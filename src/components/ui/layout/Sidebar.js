import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import styles from './header.module.css';

export default function Sidebar({ onClose }) {
  return (
    <div className={styles.sideMenu}>
      <div className={`${styles.mobileLeftMenu} ${styles.show}`}>
        <div className={`${styles.mobiContainer} ${styles.show}`}>
          <div className={`${styles.menuItemContainer}`}>
            <div className={styles.welcomeProfile}>
              <div className={styles.btnsCloseHome}>
                <div className={styles.tigerIcon}>
                  <Link href="/">
                    <Icon
                      src="https://www.atmequiz.com/img/aq-icon.png"
                      title="Go to Home"
                      width={35}
                      height={40}
                    />
                  </Link>
                </div>
                <div className={styles.close} onClick={onClose}></div>
              </div>
              <div className={styles.profilePic}>
                <Icon
                  width={71}
                  height={71}
                  src="https://www.atmequiz.com/img/male-user-avatar.png"
                  title="User Avatar"
                />
              </div>
              <div className={styles.userDetails}>
                <h3>Welcome!</h3>
                <p>play Quiz &amp; earn coins</p>
                <Link
                  className={`${styles.btn} ${styles.btnSmall} ${styles.shine}`}
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className={styles.menuItems}>
              <ul>
                <li>
                  <Link href="/contest-rules">
                    <i className={styles.icon}>
                      {' '}
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/contest-rules.svg"
                        title="Contest Rules"
                      />
                    </i>
                    Contest Rules
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
                <li>
                  <Link href="/coin-history">
                    <i className={styles.icon}>
                      {' '}
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/coin-history.svg"
                        title="Coin History"
                      />
                    </i>
                    Coin History
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className={styles.icon}>
                      {' '}
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/coin-history.svg"
                        title="Coin History"
                      />
                    </i>
                    Blogs
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.atmegame.com/about-us"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.icon}>
                      {' '}
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/about-us.svg"
                        title="About Us"
                      />
                    </i>
                    About Us
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.atmegame.com/contact-us"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.icon}>
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/contact-us.svg"
                        title=" Contact Us"
                      />
                    </i>
                    Contact Us
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <i className={styles.icon}>
                      {' '}
                      <Icon
                        width={23}
                        height={21}
                        src="https://www.atmequiz.com/img/report-issue.svg"
                        title="Report and Issue"
                      />
                    </i>
                    Report and Issue
                    <i className={`${styles.arrow} ${styles.right}`}></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.connectWithUs}>
              <h4>Connect with us</h4>
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/Atmegame"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.socialIcon}>
                      {' '}
                      <Icon
                        width={12}
                        height={23}
                        src="https://www.atmequiz.com/img/facebook-white-icon.svg"
                        title="Facebook"
                      />{' '}
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/ATMEGAME"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.socialIcon}>
                      {' '}
                      <Icon
                        width={22}
                        height={17}
                        src="https://www.atmequiz.com/img/tw-white-icon.svg"
                        title="Twitter"
                      />{' '}
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/atmegame/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.socialIcon}>
                      {' '}
                      <Icon
                        width={20}
                        height={20}
                        src="https://www.atmequiz.com/img/instagram-white-icon.svg"
                        title="Instagram"
                      />{' '}
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://in.pinterest.com/atmegame/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={styles.socialIcon}>
                      {' '}
                      <Icon
                        width={20}
                        height={26}
                        src="https://www.atmequiz.com/img/pin-white-icon.svg"
                        title="Pinterst"
                      />{' '}
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.menuOverlay}`}></div>
        </div>
      </div>
    </div>
  );
}
