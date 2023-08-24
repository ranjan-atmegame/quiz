'use client';
import { useState } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import ContestList from '@/components/contest/ContestList';
import Search from '../search/search';

export default function Home({ tabs }) {
  const [displaySearch, setDisplaySearch] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch((prevState) => !prevState);
  };

  return (
    <>
      <Ad />
      {displaySearch && <Search tabs={tabs} toggleSearch={toggleSearch} />}
      <Tab tabs={tabs} toggleSearch={toggleSearch}>
        <ContestList />
      </Tab>
    </>
  );
}
