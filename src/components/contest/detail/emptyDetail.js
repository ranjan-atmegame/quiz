import Coin from '@/components/coin';
import { formatNumber } from '@/utils';
import { QUIZ_TIME } from '@/utils/Constant';
import QuizImage from '@/components/ui/Image/QuizImage';
import styles from '@/components/submit/playNow.module.css';

export default function EmptyDetail() {
  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box}`}>
          <div className={`${styles.emptyImg} ${styles.shine}`}></div>
          <h3 className={styles.title}>&nbsp;</h3>
        </div>
      </div>

      <h2 className={`${styles.emptyH1}`}>&nbsp;</h2>

      <p className={`${styles.shine} ${styles.emptyH1}`}>
        <span className={styles.emptyVisibility}>
          You’ve got {QUIZ_TIME} seconds to answer all questions. Answer as many
          questions as you can. Entry fee will be{' '}
        </span>
        <span className={`${styles.spacer} ${styles.emptyVisibility}`}>
          <Coin />
        </span>
      </p>
      <p className={`${styles.emptyVisibility} ${styles.shine}`}>
        Join and save the coins you win! Its free & safe!
      </p>
    </div>
  );
}
