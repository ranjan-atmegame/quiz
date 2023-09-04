import styles from './tab.module.css';
import Link from 'next/link';
const EmptyTab = () => {
  return (
    <>
      <li key="0" className={styles.shine}>
        <Link href="">
          <span className={styles.emptyList}>Contests</span>
        </Link>
      </li>
      <li key="1" className={styles.shine}>
        <Link href="">
          <span className={styles.emptyList}>CRICKET</span>
        </Link>
      </li>
      <li key="2" className={styles.shine}>
        <Link href="">
          <span className={styles.emptyList}>10+2</span>
        </Link>
      </li>
      <li key="3" className={styles.shine}>
        <Link href="">
          <span className={styles.emptyList}>BANK PO EXAM</span>
        </Link>
      </li>
      <li key="4" className={styles.shine}>
        <Link href="">
          <span className={styles.emptyList}>BIRDS AND ANIMALS</span>
        </Link>
      </li>
    </>
  );
};

export default EmptyTab;
