import { getContestById } from '@/api';

// import { getContestById, addTransaction } from '@/api';
import { USER_CONTEST, COIN_HISTORY } from '@/utils/Constant';
// import { setCookies, getCookies } from '@/utils/Cookies';
import { setItemWithExpiry, getItemWithExpiry } from '@/utils/Ls';

// CURRENT USER CONTEST
export const getUserContest = () => getItemWithExpiry(USER_CONTEST);
export const setUserContest = (data) => setItemWithExpiry(USER_CONTEST, data);

// 1) Fetch contest by id from LS
const _getContestFromLSById = async (contestId) => {
  const contest = getUserContest();
  if (!contest || contest._id !== contestId) {
    return undefined;
  }

  console.log('Fetch from local');
  return contest;
};

// 2) Fetch contest by id from db
const _getContestFromDBById = async (id) => {
  console.log('Fetch from DB');
  const contest = await getContestById(id);
  if (!contest) {
    return undefined;
  }

  // Need to work on this and set it to contest expire time
  // const endTime = contestList.endTime;
  // setItemWithExpiry(USER_CONTEST, contest);
  setUserContest(contest);
  return contest;
};

//=========(A) Contest
// a)
export const getContestQuizById = async (contestId) => {
  const contest = await _getContestFromLSById(contestId);
  if (contest) {
    return contest;
  }

  return await _getContestFromDBById(contestId);
};

// b)
export const updateUserContest = (data) => {
  const userContest = getUserContest();
  const contest = { ...userContest, ...data };
  setUserContest(contest);
};

// c) User: Play Contest, add Transaction and deduct coins
export const playQuiz = async (token, transaction) => {
  //   return await addTransaction(token, transaction);
};

// c) Guest: Play Contest, add Transaction and deduct coins
export const playGuestQuiz = (data) => {
  data.createdAt = new Date().toISOString();
  let transactions = getCookies(COIN_HISTORY);
  if (!transactions) {
    return setCookies(COIN_HISTORY, [data]);
  }

  if (transactions.length >= 10) {
    transactions.pop();
  }

  transactions = [data, ...transactions];
  setCookies(COIN_HISTORY, transactions);
};

export const updateUserCoins = async (token, transaction) => {
  //   return addTransaction(transaction).then((user) => {
  //     saveAuth({ isSignedIn, token, user });
  //     return user;
  //   });
};
