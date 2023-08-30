import Link from 'next/link';
import styles from './similarQuestions.module.css';
const EmptySimilarQuestions = () => {
  return (
    <div className={styles.similar}>
      <h2 className={styles.shine}>&nbsp;</h2>
      <ul className={styles.emptySimilar}>
        <li>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li className={styles.shine}>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li className={styles.shine}>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li className={styles.shine}>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
        <li>
          <Link href="">
            <strong>&nbsp;</strong> &nbsp;
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default EmptySimilarQuestions;
