import { useState, useEffect } from 'react';
import Item from '@/components/contest/Item';
import { getActiveContestByType } from '@/components/home/api';
import EmptyItem from './EmptyItem';
import { GENERAL_CONTEST } from '@/utils/Constant';
// import Image from 'next/image';

export default function ContestList() {
  const [contestList, setContestList] = useState();

  const filterContest = (contestArr) => {
    const contestNames = [];
    return contestArr.filter((contest) => {
      const shouldReturn = !contestNames.includes(contest.name);
      if (!contestNames.includes(contest.name)) {
        contestNames.push(contest.name);
      }

      return shouldReturn;
    });
  };

  // useEffect(() => {
  //   if (selectedTab) {
  //     getActiveContestByType(selectedTab)
  //       .then((contestList) => setContestList(contestList))
  //       .catch((err) => {
  //         console.log(err);
  //         setContestList([]);
  //       });
  //   }
  // }, [selectedTab]);

  useEffect(() => {
    getActiveContestByType(GENERAL_CONTEST)
      .then((contestList) => {
        const contestArr = filterContest(contestList);
        setContestList(contestArr);
      })
      .catch((err) => {
        console.log(err);
        setContestList([]);
      });
  }, []);

  if (!contestList) {
    return (
      <>
        <EmptyItem />
        <EmptyItem />
        <EmptyItem />
        <EmptyItem />
        <EmptyItem />
        <EmptyItem />
      </>
    );
  }

  return contestList.map((contest) => (
    <Item key={contest._id} contest={contest} />

    // <Image
    //   src="/img/quizNot-found.svg"
    //   width={210}
    //   height={165}
    //   alt="Quoz not found"
    //   style={{ margin: '20px 0px' }}
    // />
  ));
}
