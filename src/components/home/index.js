'use client';
import { useState } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import Search from '../search/search';
import ContestList from '@/components/contest/ContestList';
import PushNotificationLayout from '@/components/notification';

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
      <PushNotificationLayout>
        <Tab tabs={tabs} toggleSearch={toggleSearch}>
          <ContestList />
        </Tab>
      </PushNotificationLayout>
    </>
  );
}
