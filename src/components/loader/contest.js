import Link from 'next/link';
import QuizImage from '@/components/ui/Image/QuizImage';
import CoinIcon from '@/components/coin';
import styles from '@/components/contest/quizList.module.css';

export default function ContestLoader() {
  const entryFeeJSX = 'Entry Fee: ';

  return (
    <div className={styles.quizList}>
      <div className={styles.quizCard}>
        <div className={styles.cardContent}>
          <div className={styles.thumbnialImg}>
            <QuizImage
              name={'politics'}
              imageName="politics.png"
              quality={50}
            />
          </div>
          <div className={styles.quizNameStatus}>
            <div className={styles.categoryLiveDiv}>
              <span className={styles.categories}>Politics</span>
              <span className={styles.statusLive}>Live</span>
            </div>
            <h3>
              {/* {`Play and Win ${formatNumber(contest.winningCoins)}`} */}
              {`Play and Win 100,000`}
              <CoinIcon className="medium" />
            </h3>
            {/* <p>Winner announcement @ {getQuizEndTime(contest.endTime)}</p> */}
            <p>Winner announcement @ 10:00pm </p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <p>
            <span>
              {entryFeeJSX}
              <CoinIcon />{' '}
              <strong>
                {/* {randomNumber(5000, 6500)} */}
                5490
              </strong>{' '}
              Users Playing
            </span>
          </p>

          <Link
            className={`${styles.btn} ${styles.btnSmall}`}
            title={`Play Politics contest`}
            href=""
            onClick={(e) => e.preventDefault()}
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
