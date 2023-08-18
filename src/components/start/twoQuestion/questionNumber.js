import styles from './questionHeader.module.css';
const QuestionNumber = () => {
  return (
    <div className={styles.questionHeading}>
      <div className={styles.inner}>
        <div>
          <span>1</span>
          <span>/</span>
          <span>
            <strong>2</strong>
          </span>
        </div>
        <div className={styles.smText}>Question</div>
      </div>
    </div>
  );
};

export default QuestionNumber;
