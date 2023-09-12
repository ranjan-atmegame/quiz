// const jwt = require('jsonwebtoken');
import { v4 as uuidv4 } from 'uuid';
// import { updateExternalLogin } from '@/api';
import { getLocation } from '@/utils/Location';
import {
  JWT,
  DEFAULT_COIN,
  IS_SUBMITTED,
  REWARD_COINS,
  CREDIT,
} from '@/utils/Constant';
// import { SECRET_KEY } from '@/config';
import { getCookies, removeCookies, setCookies } from '@/utils/Cookies';
import { addTransaction } from '@/api';

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
  removeCookies(REWARD_COINS);
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

// update user coins
export const updateUserCoins = (data) => {
  const auth = authenticate();
  const transactionType = +data.transaction;
  if (!transactionType && auth.user.coins < data.coins) {
    return false;
  }

  if (auth.isSignedIn) {
    addTransaction(auth.token, data);
  }

  // update
  const updatedCoins = transactionType
    ? auth.user.coins + data.coins
    : auth.user.coins - data.coins;

  auth.user = { ...auth.user, coins: updatedCoins };
  saveAuth(auth);
};

// This is reward coins
export const updateRewardCoins = (coins) => {
  const auth = authenticate();
  if (auth.isSignedIn) {
    addTransaction(auth.token, {
      name: 'Reward Coins',
      coins: coins,
      transaction: CREDIT,
      image: '',
    }).then((user) => user);
  }

  const updatedCoins = auth.user.coins + coins;
  auth.user = { ...auth.user, coins: updatedCoins };
  console.log(auth);
  saveAuth(auth);
};

export const generateToken = (user) => {
  // return jwt.sign({ email: user.email }, SECRET_KEY);
};
