'use client';
import { useEffect, useState } from 'react';
// import Button from '@/components/ui/Button';
import Loader from '@/components/loader/shimmer/ContestShimmer';
import styles from '../quizCard.module.css';
// import LifeLine from '../lifline/lifeLine';
import LifeLine from '../lifline';
import {
  LIFELINE_FIFTY_FIFTY,
  LIFELINE_AUDIENCE_POLL,
  LIFELINE_FREEZE_TIMER,
  LIFELINE_FLIP_QUESTION,
} from '@/utils/Constant';

export default function Body({
  quizId,
  quizName,
  quizImage,
  onStopTimer,
  questionIndex,
  question,
  verifyUserAnswer,

  totalQuestions = 20,
  auth,

  setQuestion,
  restartTimer,
  // questionNumber = 1,
}) {
  const [lifeline, setLifeline] = useState({
    lifeline: null,
    hideLifeline: true,
    lifelineAnswer: [],
    usedLifeline: [],
  });
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [questionIndex]);

  const clearLifeline = () => {
    if (lifeline.lifeline === LIFELINE_FREEZE_TIMER) {
      restartTimer();
    }

    setLifeline((prevState) => ({
      usedLifeline: prevState.usedLifeline,
      lifeline: null,
      hideLifeline: true,
      lifelineAnswer: [],
    }));
  };

  const handleClick = (e, answer) => {
    e.preventDefault();

    if (!answered) {
      let answerClass = answer.isCorrectAnswer
        ? `${styles.correct}`
        : `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`;

      e.target.className += ` ${answerClass}`;

      setAnswered(true);
      setTimeout(() => {
        verifyUserAnswer(answer.isCorrectAnswer);
        clearLifeline();
      }, 500);
    }
  };

  const getLifelineClass = (answerId) => {
    const { lifeline: selectedLifeline, lifelineAnswer } = lifeline;

    if (!selectedLifeline) {
      return '';
    }

    if (selectedLifeline === LIFELINE_FIFTY_FIFTY) {
      return lifelineAnswer.indexOf(answerId) !== -1 ? '' : 'hide';
    } else if (selectedLifeline === LIFELINE_AUDIENCE_POLL) {
      const maxPercentageAnswer = lifelineAnswer.reduce((prev, current) =>
        prev.percentage > current.percentage ? prev : current
      );
      let answer = lifelineAnswer.find((answer) => answer._id === answerId);
      if (answer) {
        return maxPercentageAnswer._id === answerId
          ? styles.predictionCorrect
          : styles.prediction;
        // : `flipQuestion`;
        // : `fifty50`;
      }
    } else if (selectedLifeline === LIFELINE_FLIP_QUESTION) {
      return styles.flipQuestion;
    }
  };

  // let correctAnswerId = null;
  const buildAnswerOption = () => {
    // correctAnswerId = null;
    // const { question, userAnswerId, answerClass } = this.state;
    return question.answerOptions.map((option, key) => {
      // let yourAnswerClass = option._id === userAnswerId ? answerClass : '';
      let yourAnswerClass = '';
      let lifelineClass = getLifelineClass(option._id);

      // if (option.isCorrectAnswer === true) {
      //   correctAnswerId = option._id;
      // }

      return (
        <li key={option._id} id={option.option}>
          {lifelineClass === 'hide' ? (
            <button
              className={`${yourAnswerClass} ${styles.fifty50}`}
              onClick={(e) => e.preventDefault()}
            ></button>
          ) : (
            <button
              className={`${yourAnswerClass} ${lifelineClass}`}
              onClick={(e) => handleClick(e, option)}
            >
              {option.answer}
            </button>
          )}
        </li>
      );

      // return (
      //   <li key={option._id} id={option.option}>
      //     {lifelineClass === 'hide2' && (
      //       <button
      //         className={`${yourAnswerClass}`}
      //         onClick={(e) => e.preventDefault()}
      //       ></button>
      //     )}
      //     {lifelineClass !== 'hide2' && (
      //       <button
      //         className={`${yourAnswerClass} ${lifelineClass}`}
      //         onClick={(e) => handleClick(e, option)}
      //       >
      //         {option.answer}
      //       </button>
      //     )}
      //   </li>
      // );
    });
  };

  //========Lifeline
  const updateLifeline = (options) => {
    if (options.lifeline === LIFELINE_FREEZE_TIMER) {
      onStopTimer();
    } else if (options.lifeline === LIFELINE_FLIP_QUESTION) {
      setQuestion(options.lifelineAnswer);
    }

    setLifeline((prevState) => ({
      ...prevState,
      hideLifeline: true,
      lifeline: options.lifeline,
      lifelineAnswer: options.lifelineAnswer,
      usedLifeline: [...prevState.usedLifeline, options.lifeline],
    }));
  };

  const toggleLifeline = (e) => {
    e.preventDefault();
    setLifeline((prevState) => ({
      ...prevState,
      hideLifeline: !prevState.hideLifeline,
    }));
  };

  return (
    <div className={styles.body}>
      <div className={styles.qaOptions}>
        {!question ? (
          <Loader />
        ) : (
          <>
            <div className={styles.qNumbers}>
              Question <span className={styles.lite}>{questionIndex + 1}</span>{' '}
              / <span className={styles.bold}> {totalQuestions} </span>
            </div>
            <h3>{question.question}</h3>
            <ul>
              {buildAnswerOption()}
              {/* {question.answerOptions.map((option) => {
                return (
                  <li key={option._id} onClick={(e) => handleClick(e, option)}>
                    <button className={''}>{option.answer}</button>
                  </li>
                );
              })} */}
            </ul>
            {!lifeline.hideLifeline && (
              <LifeLine
                quizId={quizId}
                quizName={quizName}
                quizImage={quizImage}
                question={question}
                updateLifelineState={updateLifeline}
                onTimerStop={onStopTimer}
                usedLifeline={lifeline.usedLifeline}
                auth={auth}
              />
            )}

            <div className={styles.lifeLine} onClick={toggleLifeline}>
              Use LifeLine
            </div>
          </>
        )}
      </div>
    </div>
  );
}
