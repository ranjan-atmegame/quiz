import { FUN_FACT } from '@/utils/Constant';
import { randomNumber } from '@/utils';

export const getFunFact = () => {
  const index = randomNumber(0, 25);
  return FUN_FACT[index];
};
