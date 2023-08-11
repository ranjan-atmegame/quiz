'use client';
import { useState, useEffect } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import Item from '@/components/contest';
import EmptyItem from '../contest/EmptyItem';
import { getContestListByType } from '@/api';

export default function ContestList() {
  const [selectedTab, setSelectedTab] = useState();
  const [contestList, setContestList] = useState(null);

  useEffect(() => {
    if (selectedTab) {
      getContestListByType(selectedTab)
        .then((contest) => {
          setContestList(contest);
        })
        .catch((error) => {
          console.error(error);
          setContestList([]);
        });
    }
  }, [selectedTab]);

  const contestListJSX = () => {
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
  };

  return (
    <>
      <Ad />
      <Tab selectedTab={selectedTab} onTabChange={setSelectedTab}>
        {contestListJSX()}
      </Tab>
    </>
  );
}
