import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

// export const API_URL = 'http://localhost:5000';
export const API_URL = 'http://localhost:3001';
// export const API_URL = 'https://testserv.atmegame.com';
export const LOCATION_API = 'https://pro.ip-api.com/json?key=iZun9ZnnZf8crvL';

export const IMG_PATH = 'https://www.atmequiz.com';
export const SECRET_KEY = 'atmequiz@1234567890#';

export const getContestTypes = () => {
  if (window.location.hostname === CRICKET_SUBDOMAIN) {
    return CONTEST_TYPES.reverse();
  }

  return CONTEST_TYPES;
};
