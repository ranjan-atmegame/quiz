'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';
import QuizRules from '../rule';
import { getTwoQuestions } from '@/api';
import { showRewardAd } from '@/utils';
import { setQuizSubmitted, setDomain } from './api';
import { authenticate, updateUser } from '@/api/auth';
import LoginOption from './LoginOptions';
import TwoQuestion from './twoQuestion/Question';
import FunFact from './FunFact';
import BonusModal from '../bonusModal/bonusModal';
import EmptyStart from './emptyStart';
import { getLocation } from '@/utils/Location';
import Toast from '../toast/toast';

const BONUS_COINS = 100;
export default function Start() {
  const router = useRouter();
  const [state, setState] = useState({
    questions: null,
    question: null,
    questionIndex: 0,
    isSubmitted: false,
    isBonusModal: false,
  });

  useEffect(() => {
    getLocation();
    getTwoQuestions()
      .then((response) => {
        if (response.length) {
          setState((prevState) => {
            return {
              ...prevState,
              // isSubmitted,
              questions: response,
              question: response[prevState.questionIndex],
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setState({ question: null, question: null, questionIndex: 0 });
      });
  }, []);

  useEffect(() => {
    if (state.isSubmitted) {
      setQuizSubmitted();
      //testing purpose only
      setDomain();
      router.push(`/submit`);
    }
  }, [state.isSubmitted]);

  const verifyUserAnswer = (isCorrect) => {
    console.log({ isCorrect });

    setState((prevState) => {
      if (state.questionIndex >= 1) {
        return { ...prevState, isSubmitted: true };
      } else {
        return {
          ...prevState,
          isBonusModal: !isCorrect,
          question: prevState.questions[prevState.questionIndex + 1],
          questionIndex: prevState.questionIndex + 1,
        };
        // update in LS
      }
    });
  };

  const closeBonusModal = (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isBonusModal: false }));
  };

  const handleBonusCoins = (e) => {
    e.preventDefault();
    const { user } = authenticate();

    showRewardAd((result) => {
      if (result?.status) {
        updateUser({ coins: user.coins + BONUS_COINS });
      }
    });
    setState((prevState) => ({ ...prevState, isBonusModal: false }));
  };

  return (
    <>
      <Ad />
      {/* <EmptyStart /> */}
      <TwoQuestion
        question={state.question}
        verifyUserAnswer={verifyUserAnswer}
        questionIndex={state.questionIndex}
      />
      <FunFact />
      <LoginOption />
      {state.isBonusModal && (
        <BonusModal onClose={closeBonusModal} handleClick={handleBonusCoins} />
      )}
      <QuizRules />
      {/* <Toast message="Subscribed successfully." /> */}
    </>
  );
}
