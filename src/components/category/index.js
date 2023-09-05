'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Ad from '@/components/ad';
import Tab from '@/components/tab';
import Item from '../contest/Item';
import { CRICKET_CONTEST, GENERAL_CONTEST } from '@/utils/Constant';
import { getActiveContestByType } from '@/components/home/api';
import Search from '../search/search';

export default function Category({ tabs }) {
  const [contestList, setContestList] = useState();
  const [displaySearch, setDisplaySearch] = useState(false);
  const [filterTab, setFilterTab] = useState(tabs);

  const toggleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch((prevState) => !prevState);
  };

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      // For testing purpose only
      let firstTab = null;
      const tabOrder = filterTab.filter((tab) => {
        const contestSlug = slug === '/' ? tab.slug : `${tab.slug}-quiz`;
        if (contestSlug !== slug) {
          return true;
        }

        firstTab = tab;
        return false;
      });
      setFilterTab([firstTab, ...tabOrder]);
      //==

      getActiveContestByType(GENERAL_CONTEST)
        .then((contestList) => {
          let filterContest = contestList.filter((contest) => {
            const contestSlug =
              contest.slug === '/' ? contest.slug : `${contest.slug}-quiz`;
            return contestSlug === slug;
          });
          setContestList(filterContest);
        })
        .catch((err) => {
          console.log(err);
          setContestList([]);
        });
    }
    // if (slug === 'cricket') {
    //   getActiveContestByType(CRICKET_CONTEST)
    //     .then((contestList) => setContestList(contestList))
    //     .catch((err) => {
    //       console.log(err);
    //       setContestList([]);
    //     });
    // } else {
    //   //For testing only for production need to change
    //   getActiveContestByType(GENERAL_CONTEST)
    //     .then((contestList) => {
    //       let filterContest = contestList.filter(
    //         (contest) => contest.slug === slug
    //       );
    //       setContestList(filterContest);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setContestList([]);
    //     });
    // }
  }, [slug]);

  return (
    <>
      <Ad />
      {displaySearch && <Search tabs={tabs} toggleSearch={toggleSearch} />}

      <Tab tabs={filterTab} toggleSearch={toggleSearch}>
        {contestList &&
          contestList.map((contest) => (
            <Item key={contest._id} contest={contest} />
          ))}
      </Tab>
    </>
  );
}
