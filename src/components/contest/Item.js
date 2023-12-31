import Link from 'next/link';
import QuizImage from '@/components/ui/Image/QuizImage';
// import CoinIcon from '@/components/coin';

// import { getQuizEndTime } from '@/utils/DateTime';
// import { formatNumber, randomNumber } from '@/utils';

import styles from './quizList.module.css';

export default function Contest({ contest }) {
  const entryFeeJSX = contest.entryCoins
    ? `Entry: ${contest.entryCoins} `
    : 'Free Entry ';

  const date = new Date(contest.endTime);
  const endsAt = `${date.getHours()}:${date.getMinutes()} pm`;
  return (
    <div className={styles.quizList}>
      <div className={styles.quizCard}>
        <div className={styles.cardContent}>
          <div className={styles.thumbnialImg}>
            <QuizImage name={contest.name} imageName={contest.quizImage} />
          </div>
          <div className={styles.quizNameStatus}>
            <div className={styles.categoryLiveDiv}>
              <span className={styles.categories}>{contest.name}</span>
              {/* <span className={styles.statusLive}>Live</span> */}
            </div>
            <h3>
              {/* {`Play and Win ${formatNumber(contest.winningCoins)}`} */}
              {`Play and Win 100,000`}
              {/* <CoinIcon className="medium" /> */}
            </h3>
            {/* <p>Winner announcement @ {getQuizEndTime(contest.endTime)}</p> */}
            <p>Winner announcement @ {endsAt} </p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <p>
            <span>
              {entryFeeJSX}
              {/* <CoinIcon />{' '} */}
              <strong>
                {/* {randomNumber(5000, 6500)} */}
                5490
              </strong>{' '}
              Users Playing
            </span>
          </p>

          <Link
            className={`${styles.btn} ${styles.btnSmall}`}
            title={`Play ${contest.name} contest`}
            href="/"
            // href={`/${contest.slug}-quiz/join-contest?contestId=${contest._id}`}
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
