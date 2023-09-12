'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import ContestInfo from './Info';
import Quiz from '@/components/quiz';
import { DEBIT } from '@/utils/Constant';
import { getGuestUserRankAndCoins, getUserRankAndCoins } from '@/api';
import EmptyQuiz from '@/components/quiz/emptyQuiz';
import { getContestQuizById, updateUserContest } from '../api';
import { authenticate, updateUserCoins } from '@/api/auth';

export default function Play({ auth: { isSignedIn, token } }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [contest, setContest] = useState(null);
  const [contestOver, setContestOver] = useState(false);

  const { slug } = params;
  const contestId = searchParams.get('contestId');

  useEffect(() => {
    if (contestId) {
      // getContestById(contestId).then((contest) => {
      getContestQuizById(contestId).then((contest) => {
        if (!contest) {
          return router.push('/');
        }
        setContest(contest);

        // a) Add user transaction
        handleTransaction(contest);
      });
    }
  }, [contestId]);

  useEffect(() => {
    if (contestOver) {
      router.push(`/${slug}/contest-over?contestId=${contestId}`);
    }
  }, [slug, contestId, contestOver]);

  // 1) Add user transaction
  const handleTransaction = (contest) => {
    const { user } = authenticate();
    const entryCoins = contest.entryCoins;
    if (user.coins < entryCoins) {
      alert(`You don't have coin to play.`);
      return router.push('/');
    }

    const transaction = {
      name: contest.name,
      coins: entryCoins,
      transaction: DEBIT,
      image: contest.quizImage,
    };

    updateUserCoins(transaction);
  };

  const calculateCoinsByScore = (rank, prizeList) => {
    const { coins } = prizeList?.rank.find(
      (prizeRank) => prizeRank.from <= rank && prizeRank.to >= rank
    );

    return coins;
  };

  const submitQuiz = async ({ score, correctAnswer, inCorrectAnswer }) => {
    const { user } = authenticate();
    let rank, prizeList;
    if (isSignedIn) {
      // Logged in user
      const response = await getUserRankAndCoins(contestId, token, {
        prizeId: contest.prizeId,
        score,
      });
      rank = response.rank;
      prizeList = response.prize;
    } else {
      // Guest user
      const response = await getGuestUserRankAndCoins(contestId, {
        userId: user.userId,
        prizeId: contest.prizeId,
        score,
      });
      rank = response.rank;
      prizeList = response.prize;
    }

    setContestOver(true);
    let mayWinCoins = calculateCoinsByScore(rank, prizeList);
    updateUserContest({
      score,
      correctAnswer,
      inCorrectAnswer,
      rank,
      mayWinCoins,
    });
  };

  if (!contest) {
    return <EmptyQuiz />;
  }

  return (
    <>
      <ContestInfo contest={contest} />
      <Quiz contest={contest} submitQuiz={submitQuiz} />
    </>
  );
}
