import styles from './rank.module.css';
import { TOTAL_QUESTION } from '@/utils/Constant';

export default function Rank({ correctAnswer, inCorrectAnswer, rank }) {
  return (
    <div className={styles.smListCard}>
      <ul>
        <li>
          <h2>{rank}</h2>
          <p>Current Rank</p>
        </li>
        <li>
          <h2>{TOTAL_QUESTION}</h2>
          <p>Total Questions</p>
        </li>
        <li>
          <h2>{correctAnswer}</h2>
          <p>Correct Answer</p>
        </li>
        <li>
          <h2>{inCorrectAnswer}</h2>
          <p>Wrong Answer</p>
        </li>
      </ul>
    </div>
  );
}
