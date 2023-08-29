'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserContest, setUserContest } from '@/components/contest/api';
import Rank from './Rank';

import ContestInfo from './Info';
import TimeOver from './TimeOver';
const JoinButton = dynamic(() => import('@/components/contest/joinButton'));
const ContestList = dynamic(() => import('@/components/contest/ContestList'));
// import JoinButton from '../JoinButton';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import JoinButtonOver from '../joinButton/joinButtonOver';
// import ContestList from '@/components/home/ContestList';
// import { GENERAL_CONTEST } from '@/utils/Constant';
import styles from './info.module.css';
import EmptyTimeOver from './emptyTimeOver';

export default function WinnerDashboard() {
  const [contest, setContest] = useState();
  const router = useRouter();

  useEffect(() => {
    const contest = getUserContest();
    if (!contest) {
      router.push('/');
    } else {
      setContest(contest);
    }

    return () => setUserContest(null);
  }, []);

  if (!contest) {
    return <Loader />;
  }

  return (
    <>
      <ContestInfo contest={contest} />
      {/* <EmptyTimeOver /> */}
      <TimeOver
        mayWinCoins={contest.mayWinCoins}
        score={contest.score}
        endTime={contest.endTime}
      >
        <Rank
          correctAnswer={contest.correctAnswer}
          inCorrectAnswer={contest.inCorrectAnswer}
          rank={contest.rank}
        />
      </TimeOver>

      <JoinButtonOver
        isSignedIn={false}
        href="/"
        onClick={() => console.log('')}
      />

      <div>
        <h2 className={styles.listH2}>Play More Quizzes</h2>
        {<ContestList />}
      </div>
    </>
  );
}
