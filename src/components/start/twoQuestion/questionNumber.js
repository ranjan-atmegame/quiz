import styles from './questionHeader.module.css';
const QuestionNumber = ({ questionNumber, total = 2 }) => {
  return (
    <div className={styles.questionHeading}>
      <div className={styles.inner}>
        <div>
          <span>{questionNumber}</span>
          <span>/</span>
          <span>
            <strong>{total}</strong>
          </span>
        </div>
        <div className={styles.smText}>Question</div>
      </div>
    </div>
  );
};

export default QuestionNumber;
