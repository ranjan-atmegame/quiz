import Link from 'next/link';
import styles from './search.module.css';
import Image from 'next/image';
const Search = () => {
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
              />
            </div>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="Search"
                className={styles.input}
              />
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
          <div className={styles.category}>
            <ul>
              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <div className={styles.box}>
                    <Image
                      src="img/category/sports.svg"
                      width="48"
                      height="48"
                      alt="Sports"
                      title="Sports"
                    />
                  </div>
                  <span>Cricket</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.gameList}>
            <div className={styles.listingHeader}>
              <h1>Quiz List</h1>
              <p>12500 quizzes explore your favorite </p>
            </div>
            <div className={styles.listBody}>
              <ul>
                <li>
                  <Link href="#">
                    <div className={styles.box}>
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
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
                      <Image
                        src="img/category/sports.svg"
                        width="40"
                        height="40"
                      />
                    </div>

                    <div className={styles.quizTxt}>
                      <h2>Play and Win 250,000 Coins</h2>
                      <p>SSC, Entry : 30 Coins</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
