import EmptySimilarQuestions from './emptySimilarQuestions';
import styles from './singleQuestion.module.css';
const EmptySingleQuestion = () => {
  return (
    <div className={styles.card}>
      <h1 className={`${styles.shine}`}>&nbsp;</h1>
      <p className={styles.subHeading}>&nbsp;</p>
      <div className={`${styles.cardHeader} ${styles.shine}`}>
        <button className={styles.disabled}>&nbsp;</button>
        <button>&nbsp;</button>
      </div>
      <div className={styles.cardBody}>
        <h2>&nbsp;</h2>
        <ul>
          <li>
            <button className={`${styles.shine}`}>
              <span>&nbsp;</span>&nbsp;
            </button>
          </li>
          <li>
            <button className={`${styles.shine}`}>
              <span>&nbsp;</span>&nbsp;
            </button>
          </li>
          <li>
            <button className={`${styles.shine}`}>
              <span>&nbsp;</span>&nbsp;
            </button>
          </li>
          <li>
            <button className={`${styles.shine}`}>
              <span>&nbsp;</span>&nbsp;
            </button>
          </li>
        </ul>
      </div>
      <div className={`${styles.cardFooter} ${styles.shine}`}>
        <h3>&nbsp;</h3>
        <p>&nbsp;</p>
      </div>
      <EmptySimilarQuestions />
    </div>
  );
};

export default EmptySingleQuestion;
