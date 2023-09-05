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

// 4) Update user login
export const updateExternalLogin = async (user, token) => {
  return fetch(`${API_URL}/api/auth/glogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, error: 'Something went wrong' };
    });
};

// 5) Get user coins history
export const fetchUserTransactions = async (token) => {
  try {
    const res = await fetch(`${API_URL}/api/users/transactions`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
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

// 6) Add user transaction
export const addTransaction = async (token, data) => {
  try {
    const res = await fetch(`${API_URL}/api/transactions`, {
      method: 'POST',
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

    // return response.data
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

// 7) Get question by quizId
export const getQuestionByQuizId = async (quizId) => {
  const res = await fetch(`${API_URL}/api/question/quizId/${quizId}`);
  const response = await res.json();
  if (response.status !== 'success') {
    return false;
  }

  return response.data;
};

// 8) Report an Issue
export const reportAnIssue = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/issue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.status !== 'success') {
      return false;
    }

    // return response.data
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

export const getIssueList = async () => {
  try {
    // const res = await fetch(`${API_URL}/api/issue`, {
    //   next: { revalidate: 24 * 60 * 60 },
    // });

    const res = await fetch(`${API_URL}/api/issue`);
    const response = await res.json();
    if (response.status !== 'success') {
      return [];
    }

    return response.result;
  } catch (error) {
    return [];
  }
};
