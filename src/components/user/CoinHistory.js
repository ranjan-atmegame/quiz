'use client';
import { useState, useEffect } from 'react';
import { fetchUserTransactions } from '@/api';
import History from './History';
import styles from './coinsHistory.module.css';

export default function CoinHistory({ auth: { isSignedIn, token } }) {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    fetchUserTransactions(token)
      .then(({ transactions }) => setTransactions(transactions))
      .catch((error) => {
        console.log(error);
        setTransactions([]);
      });
  }, [isSignedIn, token]);

  return (
    <section className={styles.coinHistory}>
      <h1 className={styles.headingH1}>Coins History</h1>
      {transactions &&
        transactions.map((transaction) => (
          <History key={transaction._id} transaction={transaction} />
        ))}
    </section>
  );
}
