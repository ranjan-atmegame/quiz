'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Ad from '../ad';
import Tab from '@/components/tab';
import Search from '../search/search';
import ContestList from '@/components/contest/ContestList';
import { subscribe } from '@/components/notification/subscriber';
import useCategory from '@/hooks/useCategory';
import RewardIcon from '../rewardIcon';
import useDevice from '@/hooks/useDevice';
// import PushNotificationLayout from '@/co mponents/notification';
import Header from '../ui/layout/Header';
import Footer from '../ui/layout/Footer';

export default function Home() {
  const [category, isCategoryLoading] = useCategory();
  const [isMobile, isLoading] = useDevice();
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayReward, setDisplayReward] = useState(true);
  const router = useRouter();

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

  const handleDisplayReward = () => {
    console.log('Refresh router');
    router.refresh();
    console.log('hide reward icon');
    setDisplayReward(false);
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch((prevState) => !prevState);
  };

  return (
    <>
      <Header />
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
        <RewardIcon setDisplay={handleDisplayReward} />
      )}
      {/* </PushNotificationLayout> */}
      <Footer />
    </>
  );
}
