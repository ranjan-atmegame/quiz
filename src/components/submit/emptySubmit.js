import Link from 'next/link';
import styles from './playNow.module.css';
import Lottie from '../animation/Lottie';
const EmptySubmit = () => {
  return (
    <div className={styles.playNow}>
      <div className={styles.stage}>
        <div className={`${styles.box} ${styles.bounce}`}></div>
      </div>
      <div className={`${styles.emptyLottie} ${styles.shine}`}>&nbsp;</div>
      <h1 className={`${styles.emptyH1} ${styles.shine}`}>&nbsp;</h1>

      <p className={`${styles.emptyH1} ${styles.shine}`}>&nbsp;</p>
      <Link
        className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
        href="/"
      >
        &nbsp;
      </Link>
    </div>
  );
};

export default EmptySubmit;
