'use client';
import { useState, useEffect } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import Search from '../search/search';
import ContestList from '@/components/contest/ContestList';
import { subscribe } from '@/components/notification/subscriber';
import { setCookies } from '@/utils/Cookies';

// import PushNotificationLayout from '@/co mponents/notification';

export default function Home({ tabs }) {
  const [displaySearch, setDisplaySearch] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator)
      window.addEventListener('load', () =>
        navigator.serviceWorker.register('/js/sw.js').then(
          (registration) =>
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            ),
          (err) => console.log('Service Worker registration failed: ', err)
        )
      );

    setCookies('allowed', tabs);
    subscribe();
  }, []);

  const toggleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch((prevState) => !prevState);
  };

  return (
    <>
      <Ad />
      {displaySearch && <Search tabs={tabs} toggleSearch={toggleSearch} />}
      {/* <PushNotificationLayout> */}
      <Tab tabs={tabs} toggleSearch={toggleSearch}>
        <ContestList />
      </Tab>
      {/* </PushNotificationLayout> */}
    </>
  );
}
