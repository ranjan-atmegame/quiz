'use client';
import dynamic from 'next/dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';

import { getTwoQuestions } from '@/api';
import { setQuizSubmitted, setDomain } from './api';
const QuizRules = dynamic(() => import('@/components/rule'));
const TwoQuestion = dynamic(() =>
  import('@/components/start/twoQuestion/Question')
);
const FunFact = dynamic(() => import('@/components/start/FunFact'));
// const EmptyStart = dynamic(() => import('@/components/start/emptyStart'));
// import QuizRules from '../rule';
// import TwoQuestion from './twoQuestion/Question';
// import FunFact from './FunFact';
import EmptyStart from './emptyStart';
import { getLocation } from '@/utils/Location';
import { getCookies, setCookies } from '@/utils/Cookies';
import { BONUS_COINS, REWARD_COINS } from '@/utils/Constant';

export default function Start() {
  const router = useRouter();
  const [state, setState] = useState({
    questions: null,
    question: null,
    questionIndex: 0,
    isSubmitted: false,
    isBonusModal: false,
    displayedOnce: false,
    lastQuestion: false,
  });

  useEffect(() => {
    getLocation();
    // getTwoQuestions()
    //   .then((response) => {
    //     if (response.length) {
    //       setState((prevState) => {
    //         return {
    //           ...prevState,
    //           questions: response,
    //           question: response[prevState.questionIndex],
    //         };
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setState({ question: null, question: null, questionIndex: 0 });
    //   });
  }, []);

  // useEffect(() => {
  //   if (state.isSubmitted && !state.isBonusModal) {
  //     setQuizSubmitted();
  //     //testing purpose only
  //     setDomain();
  //     router.push(`/submit`);
  //   }
  // }, [state.isSubmitted, state.isBonusModal]);

  useEffect(() => {
    if (state.isSubmitted) {
      setQuizSubmitted();
      //testing purpose only
      setDomain();
      router.push(`/submit`);
    }
  }, [state.isSubmitted]);

  const addRewardCoins = (coins) => {
    const rewardCoins = getCookies(REWARD_COINS);
    const sum = rewardCoins ? rewardCoins + coins : coins;
    setCookies(REWARD_COINS, sum);
  };

  const verifyUserAnswer = (isCorrect) => {
    if (isCorrect) {
      addRewardCoins(BONUS_COINS);
    }

    if (state.questionIndex >= 1) {
      // setState((prevState) => ({
      //   ...prevState,
      //   lastQuestion: true,
      //   // questionIndex: prevState.questionIndex + 1,
      //   isSubmitted: isCorrect || prevState.displayedOnce,
      //   isBonusModal: !prevState.displayedOnce && !isCorrect ? true : false,
      // }));

      setState((prevState) => ({
        ...prevState,
        lastQuestion: true,
        isSubmitted: true,
      }));
    } else {
      setState((prevState) => {
        return {
          ...prevState,
          isBonusModal: !isCorrect,
          question: prevState.questions[prevState.questionIndex + 1],
          questionIndex: prevState.questionIndex + 1,
        };
      });
    }
  };

  return (
    <>
      <Ad />
      {state.question ? (
        <>
          <TwoQuestion
            question={state.question}
            verifyUserAnswer={verifyUserAnswer}
            questionIndex={state.questionIndex}
          />
          <FunFact />
        </>
      ) : (
        <EmptyStart />
      )}

      <QuizRules />
    </>
  );
}
