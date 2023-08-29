import styles from './lifeLine.module.css';

const EmptyLifeLine = () => {
  return (
    <div className={styles.lifeLine}>
      <ul className={styles.lifeLineWrapper}>
        <li>
          <div className={`${styles.lifeLineList} ${styles.shine}`}>&nbsp;</div>
          <span>&nbsp;</span>
        </li>
        <li>
          <div className={`${styles.lifeLineList} ${styles.shine}`}>&nbsp;</div>
          <span>&nbsp;</span>
        </li>
        <li>
          <div className={`${styles.lifeLineList} ${styles.shine}`}>&nbsp;</div>
          <span>&nbsp;</span>
        </li>
        <li>
          <div className={`${styles.lifeLineList} ${styles.shine}`}>&nbsp;</div>
          <span>&nbsp;</span>
        </li>
      </ul>
    </div>
  );
};

export default EmptyLifeLine;
