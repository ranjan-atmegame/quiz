import {
  GENERAL_CONTEST,
  CRICKET_CONTEST,
  GENERAL_CONTEST_LIST,
  CRICKET_CONTEST_LIST,
  CONTEST_FETCH_AT,
  CRICKET_FETCH_AT,
} from '@/utils/Constant';
import {
  setItem,
  getItem,
  setItemWithExpiry,
  getItemWithExpiry,
} from '@/utils/Ls';
import { getContestListByType } from '@/api';
import { formatNumber } from '@/utils';
import { getQuizEndTime } from '@/utils/DateTime';

// 0) SET AND GET NEXT FETCH FROM LOCAL STORAGE
const _setNextFetch = (fetchAtKey, nextFetchAt) =>
  setItem(fetchAtKey, nextFetchAt);
const _getNextFetch = (fetchAtKey) => getItem(fetchAtKey);

// 1) FETCH IITEM BY KEY FROM LS
const getItemByKey = async (key) => {
  const contestList = getItemWithExpiry(key);

  return new Promise((resolve) =>
    contestList?.length ? resolve(contestList) : resolve([])
  );
};

// 2) Fetch from local storage
const _getContestFromLS = async (type) => {
  const [contestListKey, fetchAtKey] = _getContestTypeKeys(type);
  if (!_isValidNextFetch(fetchAtKey)) {
    console.log('NO DATA');
    return false;
  }

  console.log('Fetch from local');
  return await getItemByKey(contestListKey);
};

// 3) Build key for contest list and fetch at
const _getContestTypeKeys = (contestType) => {
  if (contestType === CRICKET_CONTEST) {
    return [CRICKET_CONTEST_LIST, CRICKET_FETCH_AT];
  }

  return [GENERAL_CONTEST_LIST, CONTEST_FETCH_AT];
};

// 4) Verify is contest expiry
const _isValidNextFetch = (fetchAtKey) => {
  const nextFetchAt = _getNextFetch(fetchAtKey);

  const currentTime = new Date().getTime();
  const lastFetchAt = new Date(nextFetchAt).getTime();

  return currentTime > lastFetchAt;
};

// 4) Verify is contest expiry
// const _isValidNextFetch = (fetchAtKey) => {
//   const nextFetchAt = _getNextFetch(fetchAtKey);
//   return nextFetchAt ? moment().isBefore(nextFetchAt) : false;
// };

// 5) Fetch active contest from DB
const _getContestListFromDBByType = async (type) => {
  console.log('Fetch from DB');
  const [contestListKey, fetchAtKey] = _getContestTypeKeys(type);
  let contestList = await getContestListByType(type);
  if (!contestList.length) {
    return [];
  }

  // format endTime and winningCoins
  // contestList = _formatContest(contestList);

  const endTime = contestList[0].endTime;
  _setNextFetch(fetchAtKey, endTime);
  setItemWithExpiry(contestListKey, contestList);
  return contestList;
};

// 6) format contest fields
const _formatContest = (contestList) => {
  return contestList.map((contest) => {
    contest.formattedWinningCoins = formatNumber(contest.winningCoins);
    contest.formattedEndTime = getQuizEndTime(contest.endTime);
    return contest;
  });
};

// 101) Fetch contest list by contest type
export const getActiveContestByType = async (contestType) => {
  const contestList = await _getContestFromLS(contestType);
  if (contestList?.length) {
    return contestList;
  }

  return await _getContestListFromDBByType(contestType);
};

// 102) Fetch contest by slug and id
export const getContestById = async (slug, contestId) => {
  const contestType = ['cricket-quiz', 'ipl-quiz'].includes(slug)
    ? CRICKET_CONTEST
    : GENERAL_CONTEST;

  let contestList = await _getContestFromLS(contestType);

  contestList =
    contestList && contestList.length
      ? contestList
      : await _getContestListFromDBByType(contestType);

  return contestList.find((contest) => contest._id === contestId);
};

// 103) Fetch contest by quiz id
export const getContestQuizById = async (contestId) => {
  const contest = await _getContestFromLSById(contestId);
  if (contest) {
    return contest;
  }

  return await _getContestFromDBById(contestId);
};
