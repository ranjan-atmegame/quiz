import { headers } from 'next/headers';
import { cookies } from 'next/headers';
import { USER_LOCATION } from '@/utils/Constant';
import { getCategory } from '@/api';

export const getRobot = () => {
  const headerList = headers();
  const robots = {
    index: true,
    follow: true,
  };

  if (!headerList.headers.host.includes('www')) {
    robots.index = false;
    robots.follow = false;
  }

  return robots;
};

export const getCategoryList = async () => {
  // let location = cookies().get(USER_LOCATION)?.value;
  // location = location ? JSON.parse(location) : 'IN';

  //Testing...
  const location = { countryCode: 'US' };

  const categoryList = await getCategory();
  return categoryList.filter((category) =>
    !category?.country ? true : category.country === location.countryCode
  );
};
