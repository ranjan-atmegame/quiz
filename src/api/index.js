import { GENERAL_CONTEST } from '@/utils/Constant';
import { API_URL } from '@/config';

//============(A) CONTEST==============
// 0) Fetch category
export const getCategory = async () => {
  const res = await fetch(`${API_URL}/api/quiz`, {
    next: { revalidate: 6 * 60 * 60 },
  });

  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data;
};

// 1) Fetch two question
export const getTwoQuestions = async () => {
  const res = await fetch(`${API_URL}/api/question/two-question`, {
    next: { revalidate: 6 * 60 * 60 },
  });

  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data;
};

// 2) Fetch contest by type
export const getContestListByType = async (type = GENERAL_CONTEST) => {
  const res = await fetch(`${API_URL}/api/contest?quizType=${type}`);
  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data.contest;
};

// 3) Fetch constest question set by contest id
export const getContestById = async (id) => {
  const res = await fetch(`${API_URL}/api/contest/${id}`);
  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data.contest;
};

// 3)[a] Get guest user rank and coins
export const getGuestUserRankAndCoins = async (contestId, data) => {
  try {
    const res = await fetch(`${API_URL}/api/contest/${contestId}/rank`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if (response.status !== 'success') {
      return false;
    }

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// 3[b] Get user rank and coins
export const getUserRankAndCoins = async (contestId, token, data) => {
  try {
    const res = await fetch(`${API_URL}/api/contest/${contestId}/submit`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if (response.status !== 'success') {
      return false;
    }

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
