import { randomNumber } from '@/utils';
import { getItemWithExpiry, setItemWithExpiry } from '@/utils/Ls';
import { FUN_FACT, IS_SUBMITTED, IS_SUBMITTED_EXP } from '@/utils/Constant';

export const getFunFact = () => {
  const index = randomNumber(0, 25);
  return FUN_FACT[index];
};

export const setQuizSubmitted = () =>
  setItemWithExpiry(IS_SUBMITTED, 1, IS_SUBMITTED_EXP);
export const isQuizSubmitted = () =>
  getItemWithExpiry(IS_SUBMITTED) ? true : false;
