'use client';
import { useState, useEffect } from 'react';
import styles from '../quizCard.module.css';
import { QUIZ_TIME } from '@/utils/Constant';

export default function Timer({ onTimerOver, shouldStopTimer }) {
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState(QUIZ_TIME);

  useEffect(() => {
    shouldStopTimer ? stopTimer() : startTimer();
  }, [shouldStopTimer]);

  useEffect(() => {
    seconds <= 0 && stopTimer();
  }, [seconds]);

  const setCountDown = () => {
    if (seconds >= 1) {
      return setSeconds((lastSeconds) => lastSeconds - 1);
    }

    stopTimer();
  };

  const startTimer = () => {
    const timer = setInterval(setCountDown, 1000);
    setTimer(timer);
  };

  const stopTimer = () => {
    clearInterval(timer);
    if (seconds <= 0) {
      onTimerOver();
    }
  };

  return (
    <div className={styles.answersTimer}>
      <h1>{seconds}</h1>
      <span>Sec left</span>
    </div>
  );
}
