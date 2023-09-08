'use client';
import { formatNumber } from '@/utils';
import CoinIcon from '@/components/coin';
import styles from './info.module.css';
import Image from 'next/image';

export default function ContestInfo({ contest }) {
  return (
    <>
      <div className={styles.info}>
        <div className={`${styles.sound}`}></div>
        {/* <div className={`${styles.sound} ${styles.noSound}`}></div> */}
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
