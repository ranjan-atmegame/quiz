import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export const LOCATION_API = 'https://pro.ip-api.com/json?key=iZun9ZnnZf8crvL';

const API_LIST = {
  PROD: process.env.API_URL,
  TEST: process.env.TEST_API_URL,
  DEV: process.env.DEV_API_URL,
};

export const API_URL = API_LIST[process.env.ENV];
export const IMG_PATH = 'https://www.atmequiz.com';
export const SECRET_KEY = 'atmequiz@1234567890#';

export const getContestTypes = () => {
  if (window.location.hostname === CRICKET_SUBDOMAIN) {
    return CONTEST_TYPES.reverse();
  }

  return CONTEST_TYPES;
};
