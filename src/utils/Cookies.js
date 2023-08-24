import Cookies from 'js-cookie';
import { DEFAULT_EXPIRES } from './Constant';

// 1) Cookies operation
export const setCookies = (name, value, expires = DEFAULT_EXPIRES) => {
  const secure = process.env.ENV === 'PROD' ? true : false;

  value = JSON.stringify(value);
  Cookies.set(name, value, { secure, expires });
};

export const getAllCookies = () => Cookies.get();

export const getCookies = (name) => {
  const value = Cookies.get(name);
  return value ? JSON.parse(value) : undefined;
};

export const removeCookies = (name) => Cookies.remove(name);
