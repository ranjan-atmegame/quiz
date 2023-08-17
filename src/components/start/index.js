'use client';
import { useState, useEffect } from 'react';
import Ad from '../ad';
import QuizRules from '../rule';
import LoginOption from './LoginOptions';
import TwoQuestion from './twoQuestion/Questoins';

export default function Start() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <Ad />
      <TwoQuestion questions={questions} />
      <LoginOption />
      <QuizRules />
    </>
  );
}
