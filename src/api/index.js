import { GENERAL_CONTEST } from '@/utils/Constant';
import { API_URL } from '@/config';

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
