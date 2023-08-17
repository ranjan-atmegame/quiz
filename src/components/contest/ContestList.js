import { useState, useEffect } from 'react';
import Item from '@/components/contest/Item';
import { getActiveContestByType } from '@/components/home/api';
import EmptyItem from './EmptyItem';
import { GENERAL_CONTEST } from '@/utils/Constant';

export default function ContestList({ selectedTab = GENERAL_CONTEST }) {
  const [contestList, setContestList] = useState();

  useEffect(() => {
    getActiveContestByType(selectedTab)
      .then((contestList) => setContestList(contestList))
      .catch((err) => {
        console.log(err);
        setContestList([]);
      });
  }, [selectedTab]);

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
  ));
}
