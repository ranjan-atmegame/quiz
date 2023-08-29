import styles from './timeOver.module.css';
const EmptyTimeOver = () => {
  return (
    <div className={styles.timeOver}>
      <div className={styles.card}>
        <div className={`${styles.winningCup} ${styles.shine}`}></div>
        <div className={styles.empty}>
          <h1 className={styles.shine}>&nbsp;</h1>
          <div className={styles.wellPlayed}>
            &nbsp; <span className={styles.good}>&nbsp;</span>
          </div>
          <span> </span>
          <p className={`${styles.smText} ${styles.shine}`}>&nbsp;</p>
          <p className={`${styles.smText}`}>
            &nbsp;
            <span>
              <strong>&nbsp;</strong>
              <span className={`${styles.animate__fadeIn} ${styles.pulse}`}>
                &nbsp;
              </span>
            </span>
          </p>
        </div>
        &nbsp;
      </div>
      <div className={styles.claimCoins}>&nbsp;</div>
    </div>
  );
};

export default EmptyTimeOver;
