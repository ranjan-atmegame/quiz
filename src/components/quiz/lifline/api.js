import {
  LIFELINE_FIFTY_FIFTY,
  LIFELINE_FREEZE_TIMER,
  LIFELINE_AUDIENCE_POLL,
  LIFELINE_FLIP_QUESTION,
  //   LIFELINE_COINS_VALUE,
} from '@/utils/Constant';
import { getQuestionByQuizId } from '@/api';

// 1) 50-50
const useFiftyFifty = async (question) => {
  let counter = 0;

  question.answerOptions = question.answerOptions.filter((answer) => {
    if (counter < 2 && !answer.isCorrectAnswer) {
      counter++;
      return false;
    }

    return true;
  });

  return question;
};

// 2) Audience poll
const useAudiencePoll = async (question) => {
  const max = 100;
  let segmentMax = 60;
  let segment = 4;
  let remaining = max;
  let result = [];

  let temp = 0;
  for (let i = 1; i <= 4; i++) {
    let percentage = Math.ceil(Math.random() * segmentMax);
    if (i === segment) {
      percentage = remaining;
    }
    result.push(percentage);
    remaining = remaining - percentage;
    segmentMax = remaining;

    temp += percentage;
  }

  let percentageIndex = result.indexOf(Math.max(...result));
  let maxPercentage = result.splice(percentageIndex, 1);

  let newAnswerOptions = [];
  let count = 0;
  for (let i in question.answerOptions) {
    let { _id, option, answer, isCorrectAnswer, createdAt, updatedAt } =
      question.answerOptions[i];
    newAnswerOptions[i] = {
      _id,
      option,
      answer,
      isCorrectAnswer,
      createdAt,
      updatedAt,
    };

    if (isCorrectAnswer) {
      newAnswerOptions[i]['audiencePoll'] = maxPercentage[0];
    } else {
      newAnswerOptions[i]['audiencePoll'] = result[count];
      count++;
    }
  }

  //   return { answerOptions: newAnswerOptions };
  question.answerOptions = newAnswerOptions;
  return question;
};

// 3) Flip the question
const flipTheQuestion = async (quizId) => {
  return await getQuestionByQuizId(quizId);
  //   let skip = Math.floor(Math.random() * 25);
  //   return await Question.findOne().skip(skip);
};

const _lifeline = async (quizId, question, lifeLine) => {
  switch (lifeLine) {
    case LIFELINE_FIFTY_FIFTY:
      question = await useFiftyFifty(question);
      break;
    case LIFELINE_AUDIENCE_POLL:
      question = await useAudiencePoll(question);
      break;
    case LIFELINE_FREEZE_TIMER:
      question = question;
      break;
    case LIFELINE_FLIP_QUESTION:
      question = await flipTheQuestion(quizId);
      break;
    default:
      question = null;
      break;
  }

  return question;
};

// 1 get lifeline
export const getLifeLine = async (quizId, question, lifeline) => {
  const q = { ...question };
  return await _lifeline(quizId, q, lifeline);
};

// export const updateUserCoins = (userId, transaction) => {
//   let { isSignedIn, token, user } = getUser();
//   if (!isSignedIn) {
//     return updateUser({ coins: user.coins - LIFELINE_COINS_VALUE });
//   }
//   return addTransaction(userId, transaction).then((user) => {
//     saveAuth({ isSignedIn, token, user });
//     return user;
//   });
// };
