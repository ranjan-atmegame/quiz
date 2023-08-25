'use client';
import { createContext, useState, useEffect } from 'react';
import { authenticate, saveAuth, removeAuth } from '@/api/auth';

const UserContext = createContext();

function Provider({ children }) {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const response = authenticate();
    setAuth(response);
  }, []);

  const updateUser = (data) => {
    setAuth((prevState) => {
      const newState = {
        ...prevState,
        user: { ...prevState.user, ...data },
      };

      saveAuth(newState);
      return newState;
    });
  };

  const updateAuth = (data) => {
    saveAuth(data);
    setAuth(data);
  };

  const signOut = () => {
    removeAuth();

    const response = authenticate();
    setAuth(response);
  };

  if (!auth) {
    return null;
  }

  const valueToShare = {
    isSignedIn: auth.isSignedIn,
    user: auth.user,
    token: auth?.token,
    signOut,
    updateUser,
    updateAuth,
  };

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
