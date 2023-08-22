import styles from './lifeLine.module.css';
import Image from 'next/image';

const LifeLine = () => {
  return (
    <div className={styles.lifeLine}>
      <ul className={styles.lifeLineWrapper}>
        <li>
          <div className={`${styles.lifeLineList} ${styles.disabled}`}>
            <Image
              src="/img/noLifeline.png"
              width="30"
              height="30"
              alt="No Life Line"
              title="No Life Line"
              className={styles.noLifeline}
            />
            <Image
              src="/img/fifty-50.svg"
              width="44"
              height="14"
              alt="50-50"
              title="50-50"
            />
          </div>
          <span>50:50</span>
        </li>
        <li>
          <div className={styles.lifeLineList}>
            <Image
              src="/img/audience-poll.svg"
              width="40"
              height="40"
              alt="Audience Poll"
              title="Audience Poll"
            />
          </div>
          <span>Audience Poll</span>
        </li>
        <li>
          <div className={styles.lifeLineList}>
            <Image
              src="/img/freeze-timer.svg"
              width="40"
              height="40"
              alt="50Freeze Timer-50"
              title="Freeze Timer"
            />
          </div>
          <span>Freeze Timer</span>
        </li>
        <li>
          <div className={styles.lifeLineList}>
            <Image
              src="/img/flip-question.svg"
              width="40"
              height="40"
              alt="Flip Question"
              title="Flip Question"
            />
          </div>
          <span>Flip Question</span>
        </li>
      </ul>
    </div>
  );
};

export default LifeLine;
