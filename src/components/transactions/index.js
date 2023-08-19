'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '@/components/ad';
import { authenticate } from '@/api/auth';

export default function Transactions() {
  const { push } = useRouter();

  useEffect(() => {
    const { isSignedIn } = authenticate();
    if (!isSignedIn) {
      push('/login');
    }
  }, []);

  return (
    <>
      <Ad />
    </>
  );
}
