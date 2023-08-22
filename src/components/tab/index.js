'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  CONTEST_TYPES,
  GENERAL_CONTEST,
  CRICKET_CONTEST,
} from '@/utils/Constant';
import styles from './tab.module.css';

export default function Tab({ children }) {
  const params = useParams();

  const tabJSX = () => {
    const selectedTab =
      params?.slug === 'cricket' ? CRICKET_CONTEST : GENERAL_CONTEST;

    return CONTEST_TYPES.map((tab) => {
      const tabClass = tab.id === selectedTab ? styles.active : '';

      return (
        <>
          <li key={tab.id}>
            <Link href={tab.slug} className={tabClass}>
              {tab.name}
            </Link>
          </li>
        </>
      );
    });
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.contests}>
        {tabJSX()}
        <li>
          <Link href="#" className="">
            Cricket
          </Link>
        </li>
      </ul>
      <div className={styles.search}>
        <Image
          src="/img/search.svg"
          width="20"
          height="20"
          alt="Search"
          title="Search"
        />
      </div>

      <div className={styles.tabContent}>{children}</div>
    </div>
  );
}
