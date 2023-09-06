'use client';
import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { IMG_PATH } from '@/config';
import styles from './header.module.css';
import Sidebar from './Sidebar';
import ReportAnIssue from '@/components/report';
import { removeAuth } from '@/components/auth/api';
import { authenticate } from '@/api/auth';
import { isServer } from '@/utils';
import {
  // subscribe,
  pushNotification,
} from '@/components/notification/subscriber';
import Toast from '@/components/toast/toast';

// const Header = ({ displayCoins = true, auth: { user, isSignedIn } }) => {
const Header = ({ displayCoins = true, auth }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [displayReportModal, setDisplayReportModal] = useState(false);
  const [toast, setToast] = useState({
    display: false,
    message: '',
  });

  useEffect(() => {
    if (displaySidebar) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = '';
    }
  }, [displaySidebar]);

  const signOutUser = function fun() {
    removeAuth();
    signOut();
  };

  const handleSubscribe = () => {
    pushNotification().then((response) => {
      if (!response) {
        return setToast({
          display: true,
          message:
            'The notification permission was not granted and blocked instead.',
        });
      }

      return setToast({ display: true, message: 'Subscribed Successfully.' });
    });
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
                  {user.coins}
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
              onClick={handleSubscribe}
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
      {toast.display && <Toast message={toast.message} />}
    </>
  );
};

export default Header;
