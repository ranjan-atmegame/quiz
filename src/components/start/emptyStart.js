import quizCardStyles from '@/components/quiz/quizCard.module.css';
import funFactStyle from './funFact.module.css';
import questionHeaderStyle from './twoQuestion/questionHeader.module.css';
const styles = { ...quizCardStyles, ...questionHeaderStyle, ...funFactStyle };
const EmptyStart = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.shine}>&nbsp;</h1>
        <p>&nbsp;</p>
      </div>

      <div className={styles.body}>
        <div className={styles.qaOptions}>
          <div className={styles.questionHeading}>
            <div className={`${styles.inner} ${styles.shine}`}>
              <div>
                <span>&nbsp;</span>
                <span></span>
                <span>
                  <strong>&nbsp;</strong>
                </span>
              </div>
              <div className={`${styles.smText}`}>&nbsp;</div>
            </div>
          </div>
          <h3 className={styles.shine}>&nbsp;</h3>
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
        </div>
      </div>
      <div className={`${styles.funFact}`}>
        <h4 className={styles.shine}>&nbsp;</h4>
        <p className={styles.shine}>&nbsp;</p>
      </div>
    </>
  );
};

export default EmptyStart;
