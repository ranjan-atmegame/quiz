'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
// import { GENERAL_CONTEST, CRICKET_CONTEST } from '@/utils/Constant';
import styles from './tab.module.css';

export default function Tab({ tabs, isLoading, toggleSearch, children }) {
  const params = useParams();

  const tabJSX = () => {
    const selectedTab = params?.slug === undefined ? '/' : params.slug;

    return tabs.map((tab) => {
      const tabSlug = tab.slug === '/' ? tab.slug : `${tab.slug}-quiz`;
      const tabClass = tabSlug === selectedTab ? styles.active : '';
      const href = tab.slug === '/' ? tab.slug : `${tab.slug}-quiz`;

      return (
        <li key={tab.slug}>
          <Link href={href} className={tabClass}>
            {tab.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.contests}>{!isLoading && tabJSX()}</ul>
      <div className={styles.search}>
        <Image
          src="/img/search.svg"
          width="20"
          height="20"
          alt="Search"
          title="Search"
          onClick={toggleSearch}
        />
      </div>

      <div className={styles.tabContent}>{children}</div>
    </div>
  );
}
