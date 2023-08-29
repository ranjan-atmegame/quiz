'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';
import QuizRules from '../rule';
import { getTwoQuestions } from '@/api';
import { setQuizSubmitted, setDomain } from './api';
import LoginOption from './LoginOptions';
import TwoQuestion from './twoQuestion/Question';
import FunFact from './FunFact';
import BonusModal from '../bonusModal/bonusModal';
// import EmptyStart from './emptyStart';

export default function Start() {
  const router = useRouter();
  const [state, setState] = useState({
    questions: null,
    question: null,
    questionIndex: 0,
    isSubmitted: false,
  });

  useEffect(() => {
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

  const verifyUserAnswer = () => {
    setState((prevState) => {
      if (state.questionIndex >= 1) {
        return { ...prevState, isSubmitted: true };
      } else {
        return {
          ...prevState,
          question: prevState.questions[prevState.questionIndex + 1],
          questionIndex: prevState.questionIndex + 1,
        };
        // update in LS
      }
    });
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
      {/* <BonusModal /> */}
      <QuizRules />
    </>
  );
}
