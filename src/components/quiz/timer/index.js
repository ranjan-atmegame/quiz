'use client';
import { useState, useEffect } from 'react';
import styles from './timer.module.css';
import { QUIZ_TIME } from '@/utils/Constant';

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 15;
const ALERT_THRESHOLD = 10;

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
};

let remainingPathColor = COLOR_CODES.info.color;

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
      setSeconds((lastSeconds) => lastSeconds - 1);
      // setCircleDasharray();
      // return setRemainingPathColor();
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

  function calculateTimeFraction() {
    return seconds / QUIZ_TIME;
  }

  // function setCircleDasharray() {
  //   const circleDasharray = `${(
  //     calculateTimeFraction() * FULL_DASH_ARRAY
  //   ).toFixed(0)} ${FULL_DASH_ARRAY}`;
  //   document
  //     .getElementById('base-timer-path-remaining')
  //     .setAttribute('stroke-dasharray', circleDasharray);
  // }

  // function setRemainingPathColor() {
  //   const { alert, warning, info } = COLOR_CODES;
  //   if (seconds <= alert.threshold) {
  //     document
  //       .getElementById('base-timer-path-remaining')
  //       .classList.remove(warning.color);
  //     document
  //       .getElementById('base-timer-path-remaining')
  //       .classList.add(alert.color);
  //   } else if (seconds <= warning.threshold) {
  //     document
  //       .getElementById('base-timer-path-remaining')
  //       .classList.remove(info.color);
  //     document
  //       .getElementById('base-timer-path-remaining')
  //       .classList.add(warning.color);
  //   }
  // }

  function getColor() {
    const { alert, warning, info } = COLOR_CODES;
    if (seconds <= alert.threshold) {
      return alert.color;
    } else if (seconds <= warning.threshold) {
      return warning.color;
    }

    return info.color;
  }

  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} ${FULL_DASH_ARRAY}`;

  return (
    <div className={styles.answerTimer}>
      <div className={styles.baseTimer}>
        <svg
          className={styles.baseTimer__svg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={styles.baseTimer__circle}>
            <circle
              className={styles.baseTimer__pathElapsed}
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              // stroke-dasharray="283"
              strokeDasharray={circleDasharray}
              className={`${styles.baseTimer__pathRemaining} ${
                styles[getColor()]
              }`}
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" className={styles.baseTimer__label}>
          {seconds}
        </span>
      </div>
    </div>
  );
}
