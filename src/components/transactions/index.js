'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '@/components/ad';
import { authenticate } from '@/api/auth';
import CoinHistory from './Coins';

export default function Transactions() {
  const { push } = useRouter();

  useEffect(() => {
    const { isSignedIn } = authenticate();
    if (!isSignedIn) {
      // push('/login');
    }
  }, []);

  return (
    <>
      <Ad />
      <CoinHistory />
    </>
  );
}
