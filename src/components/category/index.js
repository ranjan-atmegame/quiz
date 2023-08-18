'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Ad from '@/components/ad';
import Tab from '@/components/tab';
import Item from '../contest/Item';
import { CRICKET_CONTEST, GENERAL_CONTEST } from '@/utils/Constant';
import { getActiveContestByType } from '@/components/home/api';

export default function Category() {
  const [contestList, setContestList] = useState();
  const { slug } = useParams();

  useEffect(() => {
    if (slug === 'cricket') {
      getActiveContestByType(CRICKET_CONTEST)
        .then((contestList) => setContestList(contestList))
        .catch((err) => {
          console.log(err);
          setContestList([]);
        });
    } else {
      //For testing only for production need to change
      getActiveContestByType(GENERAL_CONTEST)
        .then((contestList) => {
          let filterContest = contestList.filter(
            (contest) => contest.slug === slug
          );

          setContestList(filterContest);
        })
        .catch((err) => {
          console.log(err);
          setContestList([]);
        });
    }
  }, [slug]);

  return (
    <>
      <Ad />
      <Tab>
        {contestList &&
          contestList.map((contest) => (
            <Item key={contest._id} contest={contest} />
          ))}
      </Tab>
    </>
  );
}
