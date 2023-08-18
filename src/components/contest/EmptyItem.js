import styles from './quizList.module.css';

export default function EmptyItem() {
  return (
    <>
      <div className={styles.quizList}>
        <div className={styles.quizCard}>
          <div className={styles.cardContent}>
            <div className={styles.thumbnialImg}>&nbsp;</div>
            <div className={styles.quizNameStatus}>
              <div className={styles.categoryLiveDiv}>
                <span className={styles.categories}>&nbsp;</span>
              </div>
              <h3>&nbsp;</h3>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </>
  );
}
