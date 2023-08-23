import Link from 'next/link';
import styles from './search.module.css';
import Image from 'next/image';
const SearchList = () => {
  return (
    <div className={styles.listBody}>
      <ul>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={styles.box}>
              <Image src="img/category/sports.svg" width="40" height="40" />
            </div>

            <div className={styles.quizTxt}>
              <h2>Play and Win 250,000 Coins</h2>
              <p>SSC, Entry : 30 Coins</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchList;
