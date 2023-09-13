'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';
import QuizRules from '../rule';
import { getTwoQuestions } from '@/api';
import { showRewardAd } from '@/utils';
import { setQuizSubmitted, setDomain } from './api';
// import { authenticate, updateUser } from '@/api/auth';
import LoginOption from './LoginOptions';
import TwoQuestion from './twoQuestion/Question';
import FunFact from './FunFact';
import Modal from '../bonusModal/Modal';
import { useSession } from 'next-auth/react';
import EmptyStart from './emptyStart';
import { getLocation } from '@/utils/Location';
// import Toast from '../toast/toast';
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
  const { status } = useSession();

  useEffect(() => {
    getLocation();
    getTwoQuestions()
      .then((response) => {
        if (response.length) {
          setState((prevState) => {
            return {
              ...prevState,
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

  const closeBonusModal = (e) => {
    e.preventDefault();

    if (state.lastQuestion) {
      setState((prevState) => ({
        ...prevState,
        displayedOnce: true,
        isBonusModal: false,
        isSubmitted: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        displayedOnce: true,
        isBonusModal: false,
      }));
    }
  };

  const handleBonusCoins = (e) => {
    e.preventDefault();
    const questionIndex = state.questionIndex;

    showRewardAd((result) => {
      if (result?.status) {
        // updateUser({ coins: user.coins + BONUS_COINS });
        addRewardCoins(BONUS_COINS);
      }

      setState((prevState) => ({
        ...prevState,
        isBonusModal: false,
        displayedOnce: true,
        isSubmitted: state.lastQuestion,
      }));
    }, questionIndex);
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

      {status !== 'authenticated' && <LoginOption />}
      {/* {!state.displayedOnce && state.isBonusModal && (
        <Modal
          onClose={closeBonusModal}
          handleClick={handleBonusCoins}
          message={`Incorrect Answer`}
        />
      )} */}
      <QuizRules />
      {/* <Toast message="Subscribed successfully." /> */}
    </>
  );
}
