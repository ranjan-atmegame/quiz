'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  CONTEST_TYPES,
  GENERAL_CONTEST,
  CRICKET_CONTEST,
} from '@/utils/Constant';
import styles from './tab.module.css';

export default function Tab({ children }) {
  const params = useParams();

  const tabJSX = () => {
    const selectedTab = params?.slug ? CRICKET_CONTEST : GENERAL_CONTEST;
    return CONTEST_TYPES.map((tab) => {
      const tabClass = tab.id === selectedTab ? styles.active : '';
      return (
        <li key={tab.id}>
          <Link
            className={tabClass}
            title={tab.name}
            href={`/${tab.slug}`}
            // onClick={(e) => handleClick(e, tab.id)}
          >
            {tab.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.contests}>{tabJSX()}</ul>
      <div className={styles.tabContent}>{children}</div>
    </div>
  );
}
