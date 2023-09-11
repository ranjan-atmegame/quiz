import { useState, useEffect } from 'react';
import { getPrizeListById } from '@/api';
import Coin from '../coin';
import styles from '@/components/report/report.module.css';

export default function PrizeList({ prizeId, onDismiss }) {
  const [prizeList, setPrizeList] = useState();

  useEffect(() => {
    getPrizeListById(prizeId)
      .then((prizeList) => {
        setPrizeList(prizeList);
      })
      .catch((error) => {
        console.log('Something went wrong.');
      });
  }, [prizeId]);

  const buidPrizeList = () => {
    return prizeList.rank.map((rank, index) => {
      const rankJSX =
        index === 0 ? (
          <>
            <span>{`Rank ${rank.from}`}</span>
            <span className={styles.bolder}>
              {rank.coins} <Coin />
            </span>
          </>
        ) : (
          <>
            <span>{`Rank ${rank.from} - ${rank.to}`}</span>
            <span className={styles.bolder}>
              {rank.coins} <Coin />
            </span>
          </>
        );

      return (
        <div className={`${styles.listCheck} ${styles.rakList}`} key={rank._id}>
          <div className={styles.between}>{rankJSX}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className={styles.report}>
        <div className={styles.inner}>
          <div className={styles.wrapper}>
            <h1>Prize Rank List</h1>

            <div className={`${styles.listSec} ${styles.spacer}`}>
              <div className={`${styles.listCheck}`}>
                <div className={styles.close} onClick={onDismiss}></div>
              </div>

              {prizeList && buidPrizeList()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
