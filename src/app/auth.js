import { cookies } from 'next/headers';
import { getGuestUserOnServer } from '@/components/auth/api';
import { JWT, IS_SUBMITTED } from '@/utils/Constant';

export const getAuth = () => {
  const jwtString = cookies().get(JWT)?.value;
  if (!jwtString) {
    return getGuestUserOnServer();
  }

  return JSON.parse(jwtString);
};

export const isSubmitted = () => {
  return cookies().get(IS_SUBMITTED)?.value;
};
