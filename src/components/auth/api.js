const jwt = require('jsonwebtoken');
import { v4 as uuidv4 } from 'uuid';
import { updateExternalLogin } from '@/api';
import { getLocation } from '@/utils/Location';
import { JWT, DEFAULT_COIN } from '@/utils/Constant';
import { getCookies, setCookies } from '@/utils/Cookies';

export const getGuestUserOnServer = () => {
  return {
    isSignedIn: false,
    user: {
      userId: uuidv4(),
      coins: DEFAULT_COIN,
    },
  };
};

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

export const removeAuth = () => {
  const jwt = getGuestUser();
  saveAuth(jwt);
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

export const generateToken = (user) => {
  const SECRET_KEY = 'atmequiz@1234567890#';
  return jwt.sign({ email: user.email }, SECRET_KEY);
};

// Update user===========================
export const updateUser = (data) => {
  const auth = authenticate();
  auth.user = { ...auth.user, ...data };
  saveAuth(auth);
  return auth;
};
