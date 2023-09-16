'use client';
import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { getTwoQuestions } from '@/api';
import Question from './Question';
import Error from './Error';
import EmptyStart from '@/components/start/emptyStart';
import { getLocation } from '@/utils/Location';
import { CORRECT_ANSWER_COINS } from '@/utils/Constant';

const initialState = {
  index: 0,
  questions: [],
  answer: null,
  coins: 0,
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'answered':
      return { ...state, ...action.payload };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finished':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unknown Action');
  }
}

function TwoQuestion() {
  const [{ status, questions, index, answer, coins }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const router = useRouter();

  useEffect(() => {
    async function getQuestoins() {
      const questions = await getTwoQuestions();
      dispatch({ type: 'dataReceived', payload: questions });
      getLocation();
    }

    getQuestoins();
  }, []);

  useEffect(() => {
    console.log(status);
    router.push('/finished');
  }, [status]);

  const verifyAnswer = (answer) => {
    let updatedCoins = answer.isCorrectAnswer
      ? coins + CORRECT_ANSWER_COINS
      : coins;

    dispatch({
      type: 'answered',
      payload: { answer: answer.option, coins: updatedCoins },
    });

    setTimeout(() => {
      dispatch({ type: 'finished' });
    }, [500]);

    // if (index >= 1) {
    //   setTimeout(() => {
    //     dispatch({ type: 'finished' });
    //   }, [500]);
    // } else {
    //   // setTimeout(() => {
    //   //   dispatch({ type: 'nextQuestion' });
    //   // }, [500]);
    // }
  };

  return (
    <>
      {status === 'loading' && <EmptyStart />}
      {status === 'error' && <EmptyStart />}
      {status === 'ready' && (
        <Question
          question={questions[index]}
          index={index}
          answer={answer}
          verifyAnswer={verifyAnswer}
        />
      )}
      {status === 'finished' && <div>Finished</div>}
    </>
  );
}

export default TwoQuestion;
