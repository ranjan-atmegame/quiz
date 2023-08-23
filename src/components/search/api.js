import { GENERAL_CONTEST } from '@/utils/Constant';
import { getActiveContestByType } from '../home/api';

export const searchCategoryByName = async (name) => {
  const categoryList = await getActiveContestByType(GENERAL_CONTEST);

  return categoryList.filter((category) =>
    category.name.toLowerCase().includes(name)
  );
};
