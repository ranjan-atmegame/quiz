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
import { authenticate } from '@/api/auth';
import TimerModal from '../bonusModal/TimerModal';
import { showRewardAd } from '@/utils';
import RewardTimer from './timer/RewardTimer';

export default function Quiz({
  contest: {
    questionSet: { questionSet },
    quizImage,
    name,
    quizId,
  },
  submitQuiz,
  // auth,
}) {
  const [question, setQuestion] = useState();
  const [state, setState] = useState({
    questionIndex: 0,
    correctAnswer: 0,
    inCorrectAnswer: 0,
    score: 0,
  });
  const [shouldStopTimer, setShouldStopTimer] = useState(false);
  const [timerRewardState, setTimerRewardState] = useState({
    isUsed: false,
    display: false,
    rewarded: false,
  });

  const auth = authenticate();

  useEffect(() => {
    if (!questionSet.length) {
      console.error('Invalid question set.');
      return false;
    }

    // add Transaction...

    setQuestion(questionSet[state.questionIndex]);
  }, [state.questionIndex]);

  // 1 Timer functions
  const onTimerOver = (force = false) => {
    // verify if question left display modal for display ad and get 15 seconds
    if (
      !force &&
      !timerRewardState.isUsed &&
      state.correctAnswer + state.inCorrectAnswer < TOTAL_QUESTION
    ) {
      setTimerRewardState((prevState) => ({ ...prevState, display: true }));
      return false;
    }

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

  const onStopTimer = () => setShouldStopTimer(true);
  const restartTimer = () => setShouldStopTimer(false);

  const closeTimerModal = () => {
    onTimerOver(true);
  };

  const rewardOnSuccess = () =>
    setTimerRewardState({
      isUsed: true,
      rewarded: true,
      display: false,
    });

  const rewardOnError = () =>
    setTimerRewardState({
      isUsed: true,
      rewarded: false,
      display: false,
    });

  const handleReward = () => {
    //display ad and give 15 sec
    showRewardAd((result) => {
      console.log(result);
      if (result?.status === 'viewed') {
        rewardOnSuccess();
      } else {
        displayAd((result) => {
          result?.status === 'viewed' ? rewardOnSuccess() : rewardOnError();
        });
      }
    });
  };

  return (
    <>
      <Card>
        <Header
          correctAnswer={state.correctAnswer}
          inCorrectAnswer={state.inCorrectAnswer}
          totalQuestions={TOTAL_QUESTION}
          questionNumber={state.questionIndex + 1}
        >
          {/* <Timer
            onTimerOver={onTimerOver}
            shouldStopTimer={shouldStopTimer}
            rewarded={timerRewardState.rewarded}
          /> */}
          {timerRewardState.rewarded ? (
            <RewardTimer onTimerOver={onTimerOver} shouldStopTimer={false} />
          ) : (
            <Timer
              onTimerOver={onTimerOver}
              shouldStopTimer={shouldStopTimer}
            />
          )}
        </Header>

        <Body
          quizId={quizId}
          quizName={name}
          quizImage={quizImage}
          question={question}
          verifyUserAnswer={verifyUserAnswer}
          setQuestion={setQuestion}
          questionIndex={state.questionIndex}
          onStopTimer={onStopTimer}
          restartTimer={restartTimer}
          auth={auth}
        />
        <Score score={state.score} />
        {timerRewardState.display && (
          <TimerModal onClose={closeTimerModal} handleClick={handleReward} />
        )}
      </Card>
    </>
  );
}
