'use client';
import { useState } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import ContestList from '@/components/contest/ContestList';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <>
      <Ad />
      <Tab selectedTab={selectedTab} onTabChange={setSelectedTab}>
        <ContestList selectedTab={selectedTab} />
      </Tab>
    </>
  );
}
