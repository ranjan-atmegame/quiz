'use client';
import Ad from '../ad';
import Tab from '@/components/tab';
import ContestList from '@/components/contest/ContestList';

export default function Home({ tab }) {
  return (
    <>
      <Ad />
      <Tab tabs={tab}>
        <ContestList />
      </Tab>
    </>
  );
}
