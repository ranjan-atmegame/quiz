import { LOCATION_API } from '@/config';
import { USER_LOCATION, LOCATION_EXPIRY } from './Constant';
import { getItemWithExpiry, setItemWithExpiry } from './Ls';

export const getLocation = async () => {
  try {
    let location = getItemWithExpiry(USER_LOCATION);
    if (location) {
      return location;
    }

    const response = await fetch(LOCATION_API);
    const result = await response.json();

    setItemWithExpiry(USER_LOCATION, result, LOCATION_EXPIRY);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
