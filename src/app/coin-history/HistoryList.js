import styles from './coinsHistory.module.css';
const HistoryList = () => {
  return (
    <div className={styles.historyList}>
      <div className={styles.quizThumb}>
        <img
          src="https://www.atmequiz.com/img/history.png"
          alt=""
          width="60"
          height="60"
        />
      </div>
      <div className={styles.quizNameDate}>
        <h4>HISTORY</h4>
        <span> June 28th 2023</span>
      </div>
      <div className={styles.earnedPaidCoins}>
        <span className={`${styles.historyBedge} ${styles.earned}`}>
          Earned
        </span>
        <div className={styles.spaceTop}>
          <img
            src="https://www.atmequiz.com/img/coin-icon.png"
            width="19"
            alt="coin"
          />{' '}
          200
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
