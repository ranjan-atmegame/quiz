// const jwt = require('jsonwebtoken');
import { v4 as uuidv4 } from 'uuid';
// import { updateExternalLogin } from '@/api';
import { getLocation } from '@/utils/Location';
import { JWT, DEFAULT_COIN, IS_SUBMITTED } from '@/utils/Constant';
// import { SECRET_KEY } from '@/config';
import { getCookies, removeCookies, setCookies } from '@/utils/Cookies';
// import { getItem, setItem, removeItem } from '@/utils/Ls';

const getGuestUser = () => {
  return {
    isSignedIn: false,
    user: {
      userId: uuidv4(),
      coins: DEFAULT_COIN,
      domain: window.location.hostname,
      // countryCode: 'IN',
    },
  };
};

export const authenticate = () => {
  const jwt = getCookies(JWT);
  return jwt ? jwt : getGuestUser();
};

export const saveAuth = (data) => {
  setCookies(JWT, data);
};

export const removeAuth = () => removeCookies(JWT);

// export const authenticate = () => {
//   const jwt = getItem(JWT);
//   return jwt ? jwt : getGuestUser();
// };

// export const saveAuth = (data) => {
//   setItem(JWT, data);
// };

// export const removeAuth = () => removeItem(JWT);

export const clearStorage = () => {
  removeAuth();
  removeCookies(IS_SUBMITTED);
};

export const updateUserLogin = async ({ email, name, image }, tokenId) => {
  const location = await getLocation();
  const response = await updateExternalLogin(
    {
      name,
      email,
      imageUrl: image,
      countryCode: location.countryCode,
      userType: 'google',
      domain: window.location.origin,
    },
    tokenId
  );

  return response;
};

// Update user===========================
export const updateUser = (data) => {
  const auth = authenticate();
  auth.user = { ...auth.user, ...data };
  saveAuth(auth);
  return auth;
};

export const updateCoins = (coins) => {
  const auth = authenticate();
  const updatedCoins = auth.user.coins + coins;
  auth.user = { ...auth.user, coins: updatedCoins };
  saveAuth(auth);
};

export const generateToken = (user) => {
  // return jwt.sign({ email: user.email }, SECRET_KEY);
};
