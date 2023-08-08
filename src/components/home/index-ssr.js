import Item from '@/components/contest/Item';
import { GENERAL_CONTEST } from '@/utils/Constant';

const API_URL = 'https://testserv.atmegame.com';
const fetchContest = async () => {
  const res = await fetch(
    `${API_URL}/api/contest?quizType=${GENERAL_CONTEST}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const response = await res.json();
  if (response.status !== 'success') {
    return [];
  }

  return response.data.contest;
};

export default async function ContestList() {
  const contestList = await fetchContest();

  return contestList.map((contest) => (
    <Item key={contest._id} contest={contest} />
  ));
}
