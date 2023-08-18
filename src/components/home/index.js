'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';
import Tab from '@/components/tab';
import { isQuizSubmitted } from '@/components/start/api';
import ContestList from '@/components/contest/ContestList';

export default function Home() {
  // const [selectedTab, setSelectedTab] = useState();
  const router = useRouter();

  useEffect(() => {
    const isSubmitted = isQuizSubmitted();
    if (!isSubmitted) {
      // router.push('/start');
    }
  }, []);

  return (
    <>
      <Ad />
      <Tab>
        <ContestList />
      </Tab>
    </>
  );
}
