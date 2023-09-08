'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuizImage from '../ui/Image/QuizImage';
import { searchCategoryByName } from './api';
import styles from './search.module.css';

let mouseDown = false;
let startX, scrollLeft;
const Search = ({ tabs, toggleSearch }) => {
  const [state, setState] = useState({
    searchTerm: '',
    selectedTab: null,
    contestList: null,
  });

  const parentRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    parentRef.current.addEventListener('mousedown', startDragging, false);
    parentRef.current.addEventListener('mouseup', stopDragging, false);
    parentRef.current.addEventListener('mouseleave', stopDragging, false);
    parentRef.current.addEventListener('mousemove', moveCategory);
  }, []);

  useEffect(() => {
    searchCategoryByName(state.searchTerm)
      .then((contestList) => {
        const selectedTab = searchTab(state.searchTerm);
        setState((prevState) => ({ ...prevState, selectedTab, contestList }));
      })
      .catch((err) => {
        console.log(err);
        setContestList([]);
      });
  }, [state.searchTerm]);

  const moveCategory = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }

    const x = e.pageX - parentRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    parentRef.current.scrollLeft = scrollLeft - walk;
  };

  const startDragging = (e) => {
    e.preventDefault();
    mouseDown = true;
    startX = e.pageX - parentRef.current.offsetLeft;
    scrollLeft = parentRef.current.scrollLeft;
  };

  const stopDragging = (e) => {
    e.preventDefault();
    mouseDown = false;
  };

  const searchTab = (searchTab) => {
    return tabs.filter((tab) => tab.name.toLowerCase().includes(searchTab));
  };

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, searchTerm: e.target.value }));
  };

  const category = state.selectedTab ? state.selectedTab : tabs;

  return (
    <div className={styles.search}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.searchHeader}>
            <div className={styles.back}>
              <Image
                src="img/back_arrow.svg"
                width="30"
                height="30"
                alt="Back"
                title="Back"
                onClick={toggleSearch}
              />
            </div>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="Search"
                className={styles.input}
                name="searchTerm"
                value={state.searchTerm}
                onChange={handleSearchTerm}
              />
              <Image
                src="img/close.svg"
                width="14"
                height="14"
                alt="Close"
                title="Close"
                className={styles.close}
                onClick={() =>
                  setState((prevState) => ({ ...prevState, searchTerm: '' }))
                }
              />
            </div>
          </div>
          <div
            className={`${styles.category}`}
            ref={parentRef}
            style={{ overflowX: 'hidden' }}
          >
            <ul ref={categoryRef}>
              {category.map((tab) => (
                <li key={tab.name}>
                  <Link href={tab.slug === '/' ? tab.slug : `${tab.slug}-quiz`}>
                    <div className={styles.box}>
                      <QuizImage
                        imageName={tab.image}
                        width={48}
                        height={48}
                        name={tab.name}
                      />
                    </div>
                    <span>{tab.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.gameList}>
            <div className={styles.listingHeader}>
              <h1>Quiz List</h1>
              <p>
                {state.contestList && state.contestList.length} quizzes explore
                your favorite{' '}
              </p>
            </div>
            <div className={styles.listBody}>
              <ul>
                {state.contestList &&
                  state.contestList.map((contest) => {
                    return (
                      <li key={contest._id}>
                        <Link
                          href={`/${contest.slug}-quiz/join-contest?contestId=${contest._id}`}
                        >
                          <div className={styles.box}>
                            <QuizImage
                              imageName={contest.quizImage}
                              width={40}
                              height={40}
                              name={contest.name}
                            />
                          </div>

                          <div className={styles.quizTxt}>
                            <h2>Play and Win {contest.winningCoins} Coins</h2>
                            <p>
                              {contest.name}, Entry : {contest.entryCoins} Coins
                            </p>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
