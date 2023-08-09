'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { CONTEST_TYPES } from '@/utils/Constant';
import styles from './tab.module.css';

export default function Tab({ selectedTab, onTabChange, children }) {
  useEffect(() => {
    onTabChange(CONTEST_TYPES[0].id);
  }, []);

  const handleClick = (e, tabId) => {
    e.preventDefault();
    onTabChange(tabId);
  };

  const tabJSX = () => {
    return CONTEST_TYPES.map((tab) => {
      const tabClass = tab.id === selectedTab ? styles.active : '';
      return (
        <li key={tab.id}>
          <Link
            id={tab.id}
            className={tabClass}
            title={tab.name}
            href=""
            onClick={(e) => handleClick(e, tab.id)}
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
