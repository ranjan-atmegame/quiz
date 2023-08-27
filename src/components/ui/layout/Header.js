'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { IMG_PATH } from '@/config';
import styles from './header.module.css';
import Sidebar from './Sidebar';

import ReportAnIssue from '@/components/report';
import { removeAuth } from '@/components/auth/api';
import { DEFAULT_COIN } from '@/utils/Constant';
import { authenticate } from '@/api/auth';
import { isServer } from '@/utils';

// const Header = ({ displayCoins = true, auth: { user, isSignedIn } }) => {
const Header = ({ displayCoins = true, auth }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [displayReportModal, setDisplayReportModal] = useState(false);

  const signOutUser = function fun() {
    removeAuth();
    signOut();
  };

  const handleSidebar = () => {
    setDisplaySidebar((isDisplayed) => {
      return !isDisplayed;
    });
  };

  const handleReportModal = () => {
    setDisplaySidebar(false);
    setDisplayReportModal((prevState) => !prevState);
  };

  let user = null;
  if (isServer()) {
    user = auth.user;
  } else {
    const auth = authenticate();
    user = auth.user;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <nav>
            <label htmlFor="menu-control" className={styles.sidebarToggle}>
              <Image
                src={`/img/hamburger.svg`}
                onClick={handleSidebar}
                width={36}
                height={24}
                title="Toggle Sidebar"
                alt="Toggle Sidebar"
                priority={true}
              />
            </label>
          </nav>
          <Link className={styles.atmequizLogo} href="/">
            <Image
              width={132}
              height={34}
              src={`${IMG_PATH}/logo.png`}
              alt="Play Online Quiz Contest win Coin - AtmeQuiz"
              title="Play Online Quiz Contest win Coin - AtmeQuiz"
              priority={true}
            />
          </Link>
        </div>
        <div className={styles.headerRight}>
          {displayCoins && (
            <div className={styles.totalCoins}>
              <Link href={auth.isSignedIn ? '/coin-history' : '/login'}>
                <Image
                  width={24}
                  height={24}
                  src={`${IMG_PATH}/img/coin-icon.png`}
                  title="Coin"
                  alt="Coin"
                  className={styles.pulse}
                  priority={true}
                />
                {/* <CoinLink /> */}
                <span>
                  {auth.isSignedIn ? user.coins : DEFAULT_COIN}
                  <span>Coins</span>
                </span>
              </Link>
            </div>
          )}
          <div className={`${styles.notification} ${styles.ring}`}>
            <Image
              width={15}
              height={18}
              src={`${IMG_PATH}/img/notifications-icon.svg`}
              title="Notifications"
              alt="Notifications"
              priority={true}
            />
          </div>
        </div>

        {displaySidebar && (
          <Sidebar
            user={user}
            isSignedIn={auth.isSignedIn}
            onSignOut={signOutUser}
            onClose={handleSidebar}
            toggleReportModal={handleReportModal}
          />
        )}
      </header>
      {displayReportModal && (
        <ReportAnIssue handleReportModal={handleReportModal} />
      )}
    </>
  );
};

export default Header;
