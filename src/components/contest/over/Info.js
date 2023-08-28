'use client';
import { formatNumber } from '@/utils';
import CoinIcon from '@/components/coin';
import styles from './info.module.css';
import QuizImage from '@/components/ui/Image/QuizImage';

export default function ContestInfo({ contest }) {
  return (
    <>
      {/* <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}>
          <h3>{contest.name}</h3>
        </div>
      </div> */}

      <div className={styles.infoOver}>
        {/* <div className={`${styles.box}`}>
          <QuizImage imageName={contest.quizImage} name={contest.name} />
        </div> */}
        <div className={styles.content}>
          <h3>{contest.name}</h3>
          <h2>
            {`Play and Win ${formatNumber(contest.winningCoins)} `}
            <CoinIcon className="medium" />
          </h2>
          {/* <p>
            Winner announcement will be <strong>@ 12:15</strong> PM
          </p> */}
        </div>
      </div>
    </>
  );
}
