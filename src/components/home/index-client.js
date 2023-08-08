'use client';
import { useState, useEffect } from 'react';
import { getContestListByType } from '@/api';
import Item from '@/components/contest/Item';
import { GENERAL_CONTEST } from '@/utils/Constant';

export default function ContestList() {
  const [contestList, setContestList] = useState(null);

  useEffect(() => {
    getContestListByType(GENERAL_CONTEST)
      .then((contest) => {
        setContestList(contest);
      })
      .catch((error) => {
        console.error(error);
        setContestList([]);
      });
  }, []);

  if (!contestList) {
    return '';
  }

  return contestList.map((contest) => (
    <Item key={contest._id} contest={contest} />
  ));
}
