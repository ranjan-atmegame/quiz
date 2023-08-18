import Coin from '@/components/coin';
import { formatNumber } from '@/utils';
import { QUIZ_TIME } from '@/utils/Constant';
import QuizImage from '@/components/ui/Image/QuizImage';
import styles from '@/components/submit/playNow.module.css';

export default function Detail({ contest }) {
  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}>
          <QuizImage imageName={contest.quizImage} name={contest.name} />
          <h3 className={styles.title}>{contest.name}</h3>
        </div>
      </div>

      <h2>
        {`Play and Win ${formatNumber(contest.winningCoins)} `}
        <Coin className="medium" />
      </h2>

      <p>
        You’ve got {QUIZ_TIME} seconds to answer all questions. Answer as many
        questions as you can. Entry fee will be{' '}
        {formatNumber(contest.entryCoins)}
        <Coin />
      </p>
      <p className="mb-16">Join and save the coins you win! Its free & safe!</p>
    </div>
  );
}
