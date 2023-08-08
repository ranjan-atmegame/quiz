import { GENERAL_CONTEST } from '@/utils/Constant';
// const API_URL = 'http://localhost:5000';
// const API_URL = 'http://localhost:3001';
const API_URL = 'https://testserv.atmegame.com';

//============(A) CONTEST==============
// 1) Fetch contest by type
export const getContestListByType = async (type = GENERAL_CONTEST) => {
  const res = await fetch(`${API_URL}/api/contest?quizType=${type}`);
  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data.contest;
};
