import { useState, useEffect } from 'react';
import Card from './Card';
import Timer from './timer';
import Header from './header';
import Body from './body';
import {
  CORRECT_SCORE,
  INCORRECT_SCORE,
  TOTAL_QUESTION,
} from '@/utils/Constant';
import Score from './body/Score';

export default function Quiz({
  contest: {
    questionSet: { questionSet },
  },
  submitQuiz,
}) {
  const [question, setQuestion] = useState();
  const [state, setState] = useState({
    questionIndex: 0,
    correctAnswer: 0,
    inCorrectAnswer: 0,
    score: 0,
  });

  useEffect(() => {
    if (!questionSet.length) {
      console.error('Invalid question set.');
      return false;
    }

    // add Transaction...

    setQuestion(questionSet[state.questionIndex]);
  }, [state.questionIndex]);

  // 1 Timer functions
  const onTimerOver = () => {
    submitQuiz({
      score: state.score,
      correctAnswer: state.correctAnswer,
      inCorrectAnswer: state.inCorrectAnswer,
    });
  };

  // 2 Verify user answer
  const getUpdatedScore = (isCorrect) => {
    let { score, correctAnswer, inCorrectAnswer, questionIndex } = state;
    if (isCorrect) {
      score = score + CORRECT_SCORE;
      correctAnswer = correctAnswer + 1;
    } else {
      score = score + INCORRECT_SCORE;
      inCorrectAnswer = inCorrectAnswer + 1;
    }
    questionIndex =
      questionIndex >= TOTAL_QUESTION - 1 ? questionIndex : questionIndex + 1;

    return {
      score,
      correctAnswer,
      inCorrectAnswer,
      questionIndex,
    };
  };

  const verifyUserAnswer = (isCorrectAnswer) => {
    const newState = getUpdatedScore(isCorrectAnswer);
    setState((prevState) => ({ ...prevState, ...newState }));
    if (state.questionIndex >= TOTAL_QUESTION - 1) {
      submitQuiz(newState);
    }
  };

  return (
    <Card>
      <Header
        correctAnswer={state.correctAnswer}
        inCorrectAnswer={state.inCorrectAnswer}
        totalQuestions={TOTAL_QUESTION}
        questionNumber={state.questionIndex + 1}
      >
        <Timer onTimerOver={onTimerOver} shouldStopTimer={false} />
      </Header>
      <Body
        question={question}
        verifyUserAnswer={verifyUserAnswer}
        questionIndex={state.questionIndex}
      />
      <Score score={state.score} />
    </Card>
  );
}