'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { updateUser } from '@/api/auth';
import styles from './playNow.module.css';
import Lottie from '../animation/Lottie';

export default function Play() {
  useEffect(() => {
    updateUser({ countryCode: 'IN' });
  }, []);

  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}></div>
      </div>
      <Lottie size="lottie" src={'/animation/CoinsAnimation.json'} />
      <h1>You have got 200 coins</h1>

      <p>
        Check out more quizzes to test your skills and keeps grabbing more
        coins!
      </p>
      <Link
        className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
        href="/"
      >
        Play Now
      </Link>
    </div>
  );
}
