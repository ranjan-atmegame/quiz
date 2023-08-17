// import Lottie from '../animation/Lottie';
import CoinIcon from '@/components/coin';
import { getQuizEndTime } from '@/utils/DateTime';
import styles from './timeOver.module.css';

export default function TimeOver({ mayWinCoins, score, endTime }) {
  return (
    <div className={styles.timeOver}>
      <div className={styles.card}>
        <h1>Time is over! Well Played</h1>
        <p>Winner announcement @ {getQuizEndTime(endTime)}</p>

        {/* <p>Winner announcement will be @ 11:00 AM</p> */}
        <div className={styles.score}>
          {/* <Lottie size="winningCup" src={'/animation/winningCup.json'} /> */}
          <span>
            <span>Your current score is </span>
            <strong>{score}</strong>
          </span>
        </div>
        <p>
          Based on your current score, you can win{' '}
          <span className={`${styles.animate__fadeIn} ${styles.pulse}`}>
            <strong>{mayWinCoins} </strong>
            <CoinIcon className="medium" />
          </span>
        </p>
      </div>
    </div>
  );
}
