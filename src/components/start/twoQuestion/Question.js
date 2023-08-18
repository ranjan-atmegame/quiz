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

  let incorrectClass = `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`;

  useEffect(() => {
    setAnswered(false);
  }, [questionIndex]);

  const handleClick = (e, answer) => {
    e.preventDefault();
    console.log(answer);
    if (!answered) {
      let answerClass = answer.isCorrectAnswer
        ? styles.correct
        : incorrectClass;
      // : `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`;

      e.target.className += answerClass;

      setAnswered(true);
      setTimeout(() => {
        verifyUserAnswer(answer.isCorrectAnswer);
      }, 500);
    }
  };

  return (
    <>
      <Instruction questionNumber={questionIndex + 1} />
      <div className={styles.body}>
        <div className={styles.qaOptions}>
          {!question ? (
            <Loader />
          ) : (
            <>
              <QuestionNumber />
              <h3>{question.question}</h3>
              <ul>
                {question.answerOptions.map((option) => (
                  <li key={option._id}>
                    {/* <Button
                      text={option.answer}
                      btnColor="default"
                      btnSize={''}
                    ></Button> */}

                    <button
                      onClick={(e) => handleClick(e, option)}
                      className={''}
                    >
                      {option.answer}
                    </button>
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
