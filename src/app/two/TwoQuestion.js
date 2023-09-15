'use client';
import { useEffect, useReducer } from 'react';
import { getTwoQuestions } from '@/api';
import Question from './Question';
import Error from './Error';
import EmptyStart from '@/components/start/emptyStart';
import { getLocation } from '@/utils/Location';

const initialState = {
  index: 0,
  questions: [],
  answer: null,
  status: 'loading',
};

function reducer(state, action) {
  //
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    default:
      throw new Error('Unknown Action');
  }
}

function TwoQuestion() {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getQuestoins() {
      const questions = await getTwoQuestions();
      dispatch({ type: 'dataReceived', payload: questions });
      getLocation();
    }

    getQuestoins();
  }, []);

  const verifyAnswer = () => {
    //
  };

  return (
    <>
      {status === 'loading' && <EmptyStart />}
      {status === 'error' && (
        <Error
          onClose={() => console.log('error')}
          handleClick={() => console.log('clicked.')}
        />
      )}
      {status === 'ready' && (
        <Question
          question={questions[index]}
          index={index}
          handleClick={verifyAnswer}
          answer={answer}
        />
      )}
    </>
  );
}

export default TwoQuestion;
