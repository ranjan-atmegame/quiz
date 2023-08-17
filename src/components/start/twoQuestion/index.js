import { useState, useEffect } from 'react';
import Card from './Card';
// import Timer from './timer';
// import Header from './header';
// import Body from './body';
// import {
//   CORRECT_SCORE,
//   INCORRECT_SCORE,
//   TOTAL_QUESTION,
// } from '@/utils/Constant';

import Instruction from '../Instruction';
import FunFact from '../FunFact';

export default function Quiz({ questions, submitQuiz }) {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // useEffect(() => {
  //   const status = getTwoQuestionStatus();
  //   if (status) {
  //     router.push('/');
  //   }
  // }, []);

  useEffect(() => {
    if (isSubmitted) {
      router.push('/submit');
    }
  }, [isSubmitted]);

  const nextQuestion = () => {
    if (questionIndex >= questions.length - 1) {
      setCookies('isSubmitted', 1);
      return setIsSubmitted(true);
    }

    setQuestionIndex((index) => index + 1);
  };

  //==========END TESTING

  return (
    <Card>
      <Instruction />

      <FunFact />
    </Card>
  );
}
