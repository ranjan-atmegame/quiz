'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import ContestInfo from './Info';
import Quiz from '@/components/quiz';
import { DEBIT } from '@/utils/Constant';
import { updateUser } from '@/components/auth/api';
import { getGuestUserRankAndCoins, getUserRankAndCoins } from '@/api';
import {
  getContestQuizById,
  updateUserContest,
  playQuiz,
  playGuestQuiz,
} from '../api';

export default function Play({ auth: { isSignedIn, user, token } }) {
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
    if (user.coins < contest.entryCoins) {
      alert(`You don't have coin to play.`);
      return router.push('/');
    }

    const transaction = {
      name: contest.name,
      coins: contest.entryCoins,
      transaction: DEBIT,
      image: contest.quizImage,
    };

    if (!isSignedIn) {
      playGuestQuiz(transaction);
      return updateUser({ coins: user.coins - transaction.coins });
    }

    playQuiz(token, transaction).then((response) => {
      if (!response) {
        alert('Something went wrong!');
        return router.push('/');
      }

      const coins = user.coins - transaction.coins;
      updateUser({ coins });
    });
  };

  const calculateCoinsByScore = (rank, prizeList) => {
    const { coins } = prizeList.rank.find(
      (prizeRank) => prizeRank.from <= rank && prizeRank.to >= rank
    );

    return coins;
  };

  const submitQuiz = async ({ score, correctAnswer, inCorrectAnswer }) => {
    let rank, prizeList;
    if (isSignedIn) {
      // Register user
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

    let mayWinCoins = calculateCoinsByScore(rank, prizeList);
    updateUserContest({
      score,
      correctAnswer,
      inCorrectAnswer,
      rank,
      mayWinCoins,
    });

    setContestOver(true);
  };

  if (!contest) {
    return '';
  }

  return (
    <>
      <ContestInfo contest={contest} />
      <Quiz contest={contest} submitQuiz={submitQuiz} />
    </>
  );
}
