'use client';
import { useState, useEffect } from 'react';
import Item from '@/components/contest/Item';
import { CONTEST_DATA } from '../contest/contestData';

export default function ContestList() {
  const [contestList, setContestList] = useState(null);

  useEffect(() => {
    setContestList(CONTEST_DATA);
  }, []);

  if (!contestList) {
    return '';
  }

  return contestList.map((contest) => (
    <Item key={contest._id} contest={contest} />
  ));
}
