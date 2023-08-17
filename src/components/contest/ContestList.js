import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Item from '@/components/contest/Item';
import { getActiveContestByType } from '@/components/home/api';
import EmptyItem from './EmptyItem';
import { GENERAL_CONTEST } from '@/utils/Constant';
import { isQuizSubmitted } from '../start/api';

export default function ContestList({ selectedTab = GENERAL_CONTEST }) {
  const [contestList, setContestList] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   const isSubmitted = isQuizSubmitted();
  //   if (!isSubmitted) {
  //     router.push('/start');
  //   }
  // }, []);

  useEffect(() => {
    const isSubmitted = isQuizSubmitted();
    if (isSubmitted) {
      getActiveContestByType(selectedTab)
        .then((contestList) => setContestList(contestList))
        .catch((err) => {
          console.log(err);
          setContestList([]);
        });
    } else {
      router.push('/start');
    }
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
