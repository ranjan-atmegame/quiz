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
// import ContestList from '@/components/home/ContestList';
// import { GENERAL_CONTEST } from '@/utils/Constant';

export default function WinnerDashboard() {
  const [contest, setContest] = useState();
  const router = useRouter();

  useEffect(() => {
    const contest = getUserContest();
    if (!contest) {
      console.log('contest not found!');
      // return router.push('/');
    }
    setContest(contest);

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
      />

      <JoinButton isSignedIn={false} href="/" onClick={() => console.log('')} />

      <Rank
        correctAnswer={contest.correctAnswer}
        inCorrectAnswer={contest.inCorrectAnswer}
        rank={contest.rank}
      />

      <div className="quiz-contests">
        <h2>Play More Quizzes</h2>
        {<ContestList />}
      </div>
    </>
  );
}
