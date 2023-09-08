import { randomNumber } from '@/utils';
// import { getItemWithExpiry, setItemWithExpiry } from '@/utils/Ls';
import { setCookies, getCookies } from '@/utils/Cookies';

import { FUN_FACT, IS_SUBMITTED, IS_SUBMITTED_EXP } from '@/utils/Constant';

export const getFunFact = () => {
  const index = randomNumber(0, 25);
  return FUN_FACT[index];
};

export const setQuizSubmitted = () =>
  setCookies(IS_SUBMITTED, 1, IS_SUBMITTED_EXP);
export const isQuizSubmitted = () => (getCookies(IS_SUBMITTED) ? true : false);

export const setDomain = () =>
  setCookies('DOMAIN', window.location.host, IS_SUBMITTED_EXP);
