'use client';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import styles from '../quizCard.module.css';

export default function Body({
  questionIndex,
  question,
  verifyUserAnswer,
  totalQuestions = 20,
  questionNumber = 1,
}) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [questionIndex]);

  const handleClick = (e, answer) => {
    e.preventDefault();

    if (!answered) {
      let answerClass = answer.isCorrectAnswer
        ? `${styles.correct}`
        : `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`;

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
        {!question ? (
          <Loader />
        ) : (
          <>
            <div className={styles.qNumbers}>
              Question <span className={styles.lite}>{questionNumber}</span> /{' '}
              <span className={styles.bold}> {totalQuestions} </span>
            </div>
            <h3>{question.question}</h3>
            <ul>
              {question.answerOptions.map((option) => {
                return (
                  <li key={option._id} onClick={(e) => handleClick(e, option)}>
                    <button className={''}>{option.answer}</button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
