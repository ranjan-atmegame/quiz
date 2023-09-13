'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  LIFELINE_OPTIONS,
  LIFELINE_FIFTY_FIFTY,
  LIFELINE_FREEZE_TIMER,
  LIFELINE_AUDIENCE_POLL,
  LIFELINE_FLIP_QUESTION,
  LIFELINE_COINS_VALUE,
  DEBIT,
} from '@/utils/Constant';

import Popup from './Popup';
import { getLifeLine } from './api';
import { showRewardAd } from '@/utils';
import { updateUserCoins } from '@/api/auth';
import styles from './lifeLine.module.css';

export default function LifeLine({
  auth: { isSignedIn, user, token },
  updateLifelineState,
  usedLifeline,
  question,
  quizId,
  quizName,
  quizImage,
}) {
  const [lifelineOption, setLifelineOption] = useState({
    buyOption: false,
    selectedLifeline: null,
  });

  const canUseLifeline = (lifeline) => {
    if (usedLifeline.includes(lifeline)) {
      return false;
    }

    return true;
  };

  const getLifelineOptionClass = (lifeline) =>
    usedLifeline.includes(lifeline) ? styles.disabled : '';

  const showBuyOption = (e, lifeline) => {
    e.preventDefault();
    if (!canUseLifeline(lifeline)) {
      return false;
    }

    setLifelineOption({ buyOption: true, selectedLifeline: lifeline });
  };

  const findLifelineByName = (name) =>
    LIFELINE_OPTIONS.find(({ lifeline }) => lifeline === name);

  const setLifelineAnswer = (question, lifeline) => {
    let answer = null;
    switch (lifeline) {
      case LIFELINE_FIFTY_FIFTY:
        answer = question.answerOptions.map((answer) => answer._id);
        updateLifelineState({ lifeline, lifelineAnswer: answer });
        break;
      case LIFELINE_AUDIENCE_POLL:
        answer = question.answerOptions.map((answer) => {
          return { _id: answer._id, percentage: answer.audiencePoll };
        });
        updateLifelineState({ lifeline, lifelineAnswer: answer });
        break;
      case LIFELINE_FREEZE_TIMER:
        updateLifelineState({ lifeline, shouldStopTimer: true });
        break;
      case LIFELINE_FLIP_QUESTION:
        updateLifelineState({
          lifeline,
          lifelineAnswer: question,
        });
        break;
    }
  };

  const updateState = async (lifeline) => {
    let formatQuestion = await getLifeLine(quizId, question, lifeline);
    setLifelineAnswer(formatQuestion, lifeline);
  };

  const lifeLineJSX = () => {
    const lifeLines = LIFELINE_OPTIONS.map(
      ({ lifelineClass, image, name, lifeline }) => {
        let usedClass = getLifelineOptionClass(lifeline);
        return (
          <li key={lifeline} onClick={(e) => showBuyOption(e, lifeline)}>
            <div className={`${styles.lifeLineList} ${usedClass}`}>
              <Image
                src={`/img/${image}`}
                width="40"
                height="40"
                alt="Audience Poll"
                title="Audience Poll"
              />
            </div>
            <span className={`${styles.icons} ${styles[lifelineClass]}`}></span>
            <span>{name}</span>
          </li>
        );
      }
    );

    return (
      <div className={styles.lifelinePopup}>
        <ul>{lifeLines}</ul>
      </div>
    );
  };

  const hideBuyOption = (e) => {
    e.preventDefault();
    setLifelineOption((prevState) => ({ ...prevState, buyOption: false }));
    // setBuyOption(false);
  };

  const handleLifeLine = async (e, lifeline, isFree = false) => {
    e.preventDefault();

    if (!canUseLifeline(lifeline)) {
      console.log('LOG: already used.');
      return false;
    }

    if (isFree) {
      console.log('SHOW REWARD AD!');
      return showRewardAd((result) => {
        if (result?.status) {
          return updateState(lifeline);
        }
      });
    }

    const { name } = findLifelineByName(lifeline);
    const transaction = {
      name: quizName,
      desc: `${name} lifeline used`,
      coins: LIFELINE_COINS_VALUE,
      transaction: DEBIT,
      image: quizImage,
    };

    updateUserCoins(transaction);
    return updateState(lifeline);
  };

  return (
    <div className={styles.lifeLine}>
      <ul className={styles.lifeLineWrapper}>
        {lifeLineJSX()}
        {lifelineOption.buyOption && (
          <Popup
            user={user}
            lifelineOption={lifelineOption}
            handleLifeLine={handleLifeLine}
            hideBuyOption={hideBuyOption}
          />
        )}
      </ul>
    </div>
  );
}
