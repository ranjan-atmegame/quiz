import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export const IMG_PATH = 'https://test4.atmegame.com';
export const ATMEQUIZ_PATH = 'https://www.atmequiz.com';

export const getContestTypes = () => {
  if (window.location.hostname === CRICKET_SUBDOMAIN) {
    return CONTEST_TYPES.reverse();
  }

  return CONTEST_TYPES;
};
