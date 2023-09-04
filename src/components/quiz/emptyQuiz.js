// import EmptyLifeLine from './lifline/emptyLifeline';
import quizCardStyles from './quizCard.module.css';
import timerStyles from './timer/timer.module.css';
const styles = { ...quizCardStyles, ...timerStyles };
const EmptyQuiz = () => {
  return (
    <>
      <div className={styles.info}>
        <div className={`${styles.box}`}>
          <h3>&nbsp;</h3>
        </div>
        <h2>&nbsp;</h2>
        {/* <p>
          Just answer 20 {contest.name} questions and win {contest.winningCoins}{' '}
          coins.
        </p> */}
      </div>
      <div className={`${styles.info}`}>
        <div>
          <h3 className={styles.shine}>&nbsp;</h3>
        </div>
        <h2> &nbsp;</h2>
      </div>
      <div className={styles.qaHeader}>
        <div className={styles.questionTimer}>
          <div className={`${styles.questionCorrect} ${styles.shine}`}>
            &nbsp;
          </div>
          <div className={styles.answerTimer}>
            <div className={styles.baseTimer}>
              &nbsp;
              <span id="base-timer-label" className={styles.baseTimer__label}>
                <span className={`${styles.inner} ${styles.shine}`}></span>
                <span className={styles.seconds}> &nbsp;</span>
              </span>
            </div>
          </div>
          <div className={`${styles.questionIncorrect} ${styles.shine}`}>
            &nbsp;
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.qaOptions}>
          <>
            <div className={styles.qNumbers}>
              &nbsp;<span className={styles.lite}>&nbsp;</span>{' '}
              <span className={styles.bold}>&nbsp; </span>
            </div>
            <h3>&nbsp;</h3>
            <ul>
              <li className={styles.shine}>
                <button className={''}>&nbsp;</button>
              </li>
              <li className={styles.shine}>
                <button className={''}>&nbsp;</button>
              </li>
              <li className={styles.shine}>
                <button className={''}>&nbsp;</button>
              </li>
              <li className={styles.shine}>
                <button className={''}>&nbsp;</button>
              </li>
            </ul>

            {/* <EmptyLifeLine /> */}
          </>
        </div>
      </div>
    </>
  );
};

export default EmptyQuiz;
