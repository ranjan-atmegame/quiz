'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Rank from './Rank';
import ContestInfo from './Info';
import TimeOver from './TimeOver';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import JoinButtonOver from '../joinButton/joinButtonOver';
import { getUserContest, setUserContest } from '@/components/contest/api';
import styles from './info.module.css';
const ContestList = dynamic(() => import('@/components/contest/ContestList'));

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

      <JoinButtonOver />

      <div>
        <h2 className={styles.listH2}>Play More Quizzes</h2>
        {<ContestList />}
      </div>
    </>
  );
}
