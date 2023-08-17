import styles from '../quizCard.module.css';

export default function Header({
  correctAnswer = 0,
  inCorrectAnswer = 0,
  totalQuestions = 20,
  questionNumber = 1,
  children,
}) {
  return (
    <div className={styles.qaHeader}>
      <div className={styles.questionTimer}>
        <div className={styles.questionCorrect}>{correctAnswer}</div>
        {children}
        <div className={styles.questionIncorrect}>{inCorrectAnswer}</div>
      </div>
      <div className={styles.qNumbers}>
        Question <span className={styles.lite}>{questionNumber}</span> /{' '}
        <span className={styles.bold}> {totalQuestions} </span>
      </div>
    </div>
  );
}
