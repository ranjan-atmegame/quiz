'use client';
import { useState, useEffect } from 'react';
import Item from './Item';
import { getContestListByType } from '@/api';

export default function ContestList({ contestType }) {
  const [contestList, setContestList] = useState(null);

  useEffect(() => {
    if (contestType) {
      getContestListByType(contestType)
        .then((contest) => {
          setContestList(contest);
        })
        .catch((error) => {
          console.error(error);
          setContestList([]);
        });
    }
  }, [contestType]);

  if (contestList === null) {
    return '';
  }

  return contestList.map((contest) => (
    <Item key={contest._id} contest={contest} />
  ));
}
