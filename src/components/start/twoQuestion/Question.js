'use client';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import styles from '@/components/quiz/quizCard.module.css';
import Instruction from '../Instruction';
import QuestionNumber from './questionNumber';

export default function Question({
  question,
  questionIndex,
  verifyUserAnswer,
}) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [questionIndex]);

  const handleClick = (e, answer) => {
    e.preventDefault();
    if (!answered) {
      let answerClass = answer.isCorrectAnswer
        ? styles.correct
        : `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`;

      e.target.className += answerClass;

      setAnswered(true);
      setTimeout(() => {
        verifyUserAnswer(answer.isCorrectAnswer);
      }, 500);
    }
  };

  return (
    <>
      <Instruction />
      <div className={styles.body}>
        <div className={styles.qaOptions}>
          {!question ? (
            <Loader />
          ) : (
            <>
              <QuestionNumber questionNumber={questionIndex + 1} />
              <h3>{question.question}</h3>
              <ul>
                {question.answerOptions.map((option) => (
                  <li key={option._id} onClick={(e) => handleClick(e, option)}>
                    <button className={''}>{option.answer}</button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
