'use client';
import Link from 'next/link';
import styles from './playNow.module.css';
import Lottie from '../animation/Lottie';

export default function Play({ user }) {
  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}></div>
      </div>
      <Lottie size="lottieCoinsSM" src={'/animation/CoinsAnimation.json'} />
      <h1>You have got {user.coins} coins</h1>

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
