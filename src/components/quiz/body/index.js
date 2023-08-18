'use client';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import styles from '../quizCard.module.css';
import Timer from '@/components/ui/timer/timer';

export default function Body({ questionIndex, question, verifyUserAnswer }) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [questionIndex]);

  const handleClick = (e, answer) => {
    e.preventDefault();
    if (!answered) {
      let answerClass = answer.isCorrectAnswer
        ? styles.correct
        : styles.incorrect;
      e.target.className += answerClass;

      setAnswered(true);
      setTimeout(() => {
        verifyUserAnswer(answer.isCorrectAnswer);
      }, 500);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.qaOptions}>
        fafjal
        {!question ? (
          <Loader />
        ) : (
          <>
            <Timer />
            <h3>{question.question}</h3>
            <ul>
              {question.answerOptions.map((option) => (
                <li key={option._id} onClick={(e) => handleClick(e, option)}>
                  <Button href="" className="">
                    {option.answer}
                  </Button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
