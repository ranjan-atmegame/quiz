'use client';
import { useState, useEffect, useRef } from 'react';
import { formatNumber } from '@/utils';
import CoinIcon from '@/components/coin';
import styles from './info.module.css';
// import Image from 'next/image';

export default function ContestInfo({ contest }) {
  const [play, setPlay] = useState(false);
  const musicRef = useRef();

  useEffect(() => {
    playAudio();
  }, []);

  function playAudio() {
    if (musicRef.current) {
      musicRef.current.play();
    }
    setPlay(true);
  }

  function pauseAudio() {
    if (musicRef.current) {
      musicRef.current.pause();
    }
    setPlay(false);
  }

  const audioJSX = () => {
    return (
      <audio id="myAudio" ref={musicRef} autoplay="autoplay">
        <source src="/audio/music.mp3" />
      </audio>
    );
  };

  return (
    <>
      {audioJSX()}
      <div className={styles.info}>
        {play ? (
          <div className={`${styles.sound}`} onClick={pauseAudio}></div>
        ) : (
          <div
            className={`${styles.sound} ${styles.noSound}`}
            onClick={playAudio}
          ></div>
        )}
        <div className={`${styles.box}`}>
          <h3>{contest.name}</h3>
        </div>
        <h2>
          {`Play and Win ${formatNumber(contest.winningCoins)} `}
          <CoinIcon className="medium" />
        </h2>
        {/* <p>
          Just answer 20 {contest.name} questions and win {contest.winningCoins}{' '}
          coins.
        </p> */}
      </div>
    </>
  );
}
