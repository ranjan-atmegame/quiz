import Link from 'next/link';
import styles from './search.module.css';
import Image from 'next/image';
import SearchList from './searchList';
import SearchHeader from './searchHeader';
import SearchCategory from './searchCategory';
const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <SearchHeader />
          <SearchCategory />
          <div className={styles.gameList}>
            <div className={styles.listingHeader}>
              <h1>Quiz List</h1>
              <p>12500 quizzes explore your favorite </p>
            </div>
            <SearchList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
