import { headers } from 'next/headers';
import { cookies } from 'next/headers';
import { USER_LOCATION } from '@/utils/Constant';
import { getCategory } from '@/api';

export const getRobot = (indexPages) => {
  // const headerList = headers();
  // if (!headerList.headers.host.includes('www')) {
  //   return { index: false, follow: false };
  // }

  if (indexPages) {
    return { index: true, follow: true };
  }

  return { index: false, follow: true };
};

export const getCategoryList = async () => {
  //Testing...
  // const location = { countryCode: 'US' };

  let location = cookies().get(USER_LOCATION)?.value;
  location = location ? JSON.parse(location) : 'IN';

  const categoryList = await getCategory();
  return categoryList.filter((category) =>
    !category?.country ? true : category.country === location.countryCode
  );
};
