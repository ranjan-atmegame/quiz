'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
// import { GENERAL_CONTEST, CRICKET_CONTEST } from '@/utils/Constant';
import styles from './tab.module.css';

export default function Tab({ tabs, toggleSearch, children }) {
  const params = useParams();

  const tabJSX = () => {
    const selectedTab = params?.slug === undefined ? '/' : params.slug;

    return tabs.map((tab) => {
      const tabClass = tab.slug === selectedTab ? styles.active : '';

      return (
        <li key={tab.slug}>
          <Link href={`${tab.slug}-quiz`} className={tabClass}>
            {tab.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles.tab}>
      <ul
        className={styles.contests}
        data-flickity-options='{ "wrapAround": true }'
      >
        {tabJSX()}
      </ul>
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
