import Instruction from '@/components/start/Instruction';
import QuestionNumber from '@/components/start/twoQuestion/questionNumber';
import styles from '@/components/quiz/quizCard.module.css';

export default function Question({ question, answer, index, handleClick }) {
  return (
    <>
      <Instruction />
      <div className={styles.body}>
        <div className={styles.qaOptions}>
          <>
            <QuestionNumber questionNumber={index + 1} />

            <h3>{question.question}</h3>
            <ul>
              {question.answerOptions.map((option) => {
                const correctClass =
                  answer && option.isCorrectAnswer ? styles.correct : '';
                return (
                  <li key={option._id} onClick={(e) => handleClick(e, option)}>
                    <button className={correctClass}>{option.answer}</button>
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
