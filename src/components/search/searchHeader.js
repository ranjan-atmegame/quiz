import Link from 'next/link';
import styles from './search.module.css';
import Image from 'next/image';
const SearchHeader = () => {
  return (
    <div className={styles.searchHeader}>
      <div className={styles.back}>
        <Image
          src="img/back_arrow.svg"
          width="24"
          height="24"
          alt="Back"
          title="Back"
        />
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Search" className={styles.input} />
        <Image
          src="img/close.svg"
          width="14"
          height="14"
          alt="Close"
          title="Close"
          className={styles.close}
        />
      </div>
    </div>
  );
};

export default SearchHeader;
