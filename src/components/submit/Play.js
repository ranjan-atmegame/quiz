'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './playNow.module.css';
import Lottie from '../animation/Lottie';
import { getCookies, removeCookies } from '@/utils/Cookies';
import { REWARD_COINS } from '@/utils/Constant';
import { updateCoins } from '@/api/auth';

export default function Play({ user }) {
  const [rewardedCoins, setRewardedCoins] = useState();

  useEffect(() => {
    let coins = getCookies(REWARD_COINS);
    coins = coins ? +coins : 0;
    updateCoins(coins);
    setRewardedCoins(coins);

    return () => removeCookies(REWARD_COINS);
  }, []);

  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}></div>
      </div>
      <Lottie size="lottieCoinsSM" src={'/animation/CoinsAnimation.json'} />
      <h1>You have got {rewardedCoins ? rewardedCoins : 0} coins</h1>

      <p>
        Check out more quizzes to test your skills and keeps grabbing more
        coins!
      </p>
      <Link
        className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
        href="/"
        prefetch={true}
      >
        Play Now
      </Link>
    </div>
  );
}
