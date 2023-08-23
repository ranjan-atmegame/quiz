'use client';
import Ad from '../ad';
import Tab from '@/components/tab';
import ContestList from '@/components/contest/ContestList';
import Search from '../search/search';

export default function Home() {
  return (
    <>
      <Ad />
      {/* <Search /> */}
      <Tab>
        <ContestList />
      </Tab>
    </>
  );
}
