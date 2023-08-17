'use client';
import { useState, useEffect } from 'react';
import { authenticate } from '@/api/auth';

let prevCoins = null;
export default function CoinLink() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = authenticate();
    setAuth(auth);
    prevCoins = auth.user.coins;
  }, []);

  useEffect(() => {
    if (auth && prevCoins !== auth.user.coins) {
      console.log(auth.user.coins);
    }
  }, [auth]);

  if (!auth) {
    return (
      <span>
        200<span>Coins</span>
      </span>
    );
  }
  return (
    <span>
      {auth.user.coins}
      <span>Coins</span>
    </span>
  );
}
