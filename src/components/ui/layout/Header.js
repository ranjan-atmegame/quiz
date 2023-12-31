import Link from 'next/link';
import Image from 'next/image';
import { IMG_PATH } from '@/config';
import styles from './header.module.css';

const Header = ({ displayCoins = true }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <nav>
            <label htmlFor="menu-control" className={styles.sidebarToggle}>
              <Image
                src={`${IMG_PATH}/img/menu-icon.svg`}
                width={24}
                height={14}
                title="Toggle Sidebar"
                alt="Toggle Sidebar"
                priority={true}
              />
            </label>
          </nav>
          <Link className={styles.atmequizLogo} href="/">
            <Image
              width={119}
              height={30}
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
              <Link href={'/'}>
                <Image
                  width={24}
                  height={24}
                  src={`${IMG_PATH}/img/coin-icon.png`}
                  title="Coin"
                  alt="Coin"
                  className={styles.pulse}
                  priority={true}
                />
                <span>
                  200
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
      </header>
    </>
  );
};

export default Header;
