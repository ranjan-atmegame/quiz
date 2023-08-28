// import Lottie from '../animation/Lottie';
import CoinIcon from '@/components/coin';
import { getQuizEndTime } from '@/utils/DateTime';
import styles from './timeOver.module.css';
import Image from 'next/image';
import Rank from './Rank';
import { Children } from 'react';
import Lottie from '@/components/animation/Lottie';

export default function TimeOver({ mayWinCoins, score, endTime, children }) {
  return (
    <div className={styles.timeOver}>
      <div className={styles.card}>
        {/* <Image
          src="/img/winningCup.png"
          width="182"
          height="136"
          alt=""
          title=""
        /> */}
        <Lottie size="winningCup" src={'/animation/winningCup.json'} />
        <div>
          <h1>Time is over! Well Played</h1>
          <div className={styles.wellPlayed}>
            Your score is: <span className={styles.good}>{score}</span>
          </div>
          <span> </span>
          <p className={styles.smText}>Winner announcement will be @ 4:45 PM</p>
          <p className={styles.smText}>
            Based on your current score, you can win{' '}
            <span>
              <strong>{mayWinCoins} </strong>
              <span className={`${styles.animate__fadeIn} ${styles.pulse}`}>
                <CoinIcon className="medium" />
              </span>
            </span>
          </p>

          {/* <p>Winner announcement @ {getQuizEndTime(endTime)}</p> */}
        </div>
        {/* <p>Winner announcement will be @ 11:00 AM</p> */}
        {/* <div className={styles.score}>
           <Lottie size="winningCup" src={'/animation/winningCup.json'} /> 
          <span>
            <span>Your current score is </span>
            <strong>{score}</strong>
          </span>
        </div> */}
        {children}
      </div>
      <div className={styles.claimCoins}>Join AtmeQuiz to claim your coins</div>
    </div>
  );
}
