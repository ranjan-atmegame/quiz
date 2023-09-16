import Instruction from '@/components/start/Instruction';
import QuestionNumber from '@/components/start/twoQuestion/questionNumber';
import styles from '@/components/quiz/quizCard.module.css';

export default function Question({ question, answer, index, verifyAnswer }) {
  return (
    <>
      <Instruction />
      <div className={styles.body}>
        <div className={styles.qaOptions}>
          <>
            <QuestionNumber questionNumber={index + 1} />

            <h3>{question.question}</h3>
            <ul>
              {question.answerOptions.map((option, index) => {
                const answeredClass =
                  answer && answer === index + 1 && !option.isCorrectAnswer
                    ? `${styles.incorrect} ${styles.shine} ${styles.animate__animated} ${styles.animate__shakeX}`
                    : '';

                const correctClass =
                  answer && option.isCorrectAnswer ? styles.correct : '';

                return (
                  <li key={option._id} onClick={(e) => verifyAnswer(option)}>
                    <button
                      className={`${correctClass} ${answeredClass}`}
                      disabled={answer !== null}
                    >
                      {option.answer}
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        </div>
      </div>
    </>
  );
}
