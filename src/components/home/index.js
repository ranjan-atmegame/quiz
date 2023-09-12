'use client';
import { useState, useEffect, useContext } from 'react';
import Ad from '../ad';
import Tab from '@/components/tab';
import Search from '../search/search';
import ContestList from '@/components/contest/ContestList';
import { subscribe } from '@/components/notification/subscriber';
import useCategory from '@/hooks/useCategory';
import RewardIcon from '../rewardIcon';
import useDevice from '@/hooks/useDevice';
// import PushNotificationLayout from '@/co mponents/notification';
import PublisherAd from '@/components/rewardIcon/Ad';

export default function Home() {
  const [category, isCategoryLoading] = useCategory();
  const [isMobile, isLoading] = useDevice();
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayReward, setDisplayReward] = useState(true);

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

    subscribe();
  }, []);

  const toggleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch((prevState) => !prevState);
  };

  return (
    <>
      <PublisherAd />
      <Ad />
      {displaySearch && <Search tabs={category} toggleSearch={toggleSearch} />}
      {/* <PushNotificationLayout> */}
      <Tab
        tabs={category}
        isLoading={isCategoryLoading}
        toggleSearch={toggleSearch}
      >
        <ContestList />
      </Tab>
      {isMobile && displayReward && (
        <RewardIcon setDisplay={setDisplayReward} />
      )}
      {/* </PushNotificationLayout> */}
    </>
  );
}
