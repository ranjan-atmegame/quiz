'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
// import { GENERAL_CONTEST, CRICKET_CONTEST } from '@/utils/Constant';
import styles from './tab.module.css';
import EmptyTab from './emptyTab';

let mouseDown = false;
let startX, scrollLeft;
export default function Tab({ tabs, isLoading, toggleSearch, children }) {
  const params = useParams();
  const parentRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    categoryRef.current.addEventListener('mousedown', startDragging, false);
    categoryRef.current.addEventListener('mouseup', stopDragging, false);
    categoryRef.current.addEventListener('mouseleave', stopDragging, false);

    parentRef.current.addEventListener('mousemove', moveCategory);
  }, []);

  const moveCategory = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }

    const x = e.pageX - parentRef.current.offsetLeft;
    const scroll = x - startX;
    parentRef.current.scrollLeft = scroll;

    console.log('Move: ');
    console.log({ pageX: e.pageX, x, scrollLeft, scroll });
  };

  const startDragging = (e) => {
    e.preventDefault();
    console.log('start dragging....');

    mouseDown = true;
    startX = e.pageX - parentRef.current.offsetLeft;
    scrollLeft = parentRef.current.scrollLeft;

    console.log({ parent: parentRef.current });

    // console.log({
    //   startX,
    //   pageX: e.pageX,
    //   offsetLeft: parentRef.current.offsetLeft,
    //   scrollLeft: parentRef.current.scrollLeft,
    // });
  };

  const stopDragging = (e) => {
    e.preventDefault();
    console.log('stop dragging....');
    mouseDown = false;
  };

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
    <div className={styles.tab} ref={parentRef} style={{ overflowX: 'hidden' }}>
      <ul className={styles.contests} ref={categoryRef}>
        {!isLoading ? tabJSX() : <EmptyTab />}
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
