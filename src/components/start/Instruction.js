import { DEFAULT_COIN } from '@/utils/Constant';
import styles from '@/components/quiz/quizCard.module.css';

export default function Instruction({ questionNumber, total = 2 }) {
  return (
    <div className={styles.header}>
      <h1>Quick Start!</h1>
      <p>
        Just answer {total} questions and win {DEFAULT_COIN} coins.
      </p>
      <div className={styles.qNumbers}>
        Question <span className={styles.lite}>{questionNumber}</span> /{' '}
        <span className={styles.bold}> {total} </span>
      </div>
    </div>
  );
}
