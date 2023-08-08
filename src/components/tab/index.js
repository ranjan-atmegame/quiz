'use client';
import Link from 'next/link';
import styles from './tab.module.css';

export default function Tab({ tabs, selectedTab, onTabChange, children }) {
  const handleClick = (e, tabId) => {
    console.log('hhhhhhhhhhhhhh');
    e.preventDefault();
    console.log('clicked...');
    onTabChange(tabId);
  };

  const tabJSX = () => {
    return tabs.map((tab) => {
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
