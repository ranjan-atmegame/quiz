'use client';
import { useState, useEffect, useContext } from 'react';
import { fetchUserTransactions } from '@/api';
import UserContext from '@/context/AuthProvider';
import History from './History';
import styles from './coinsHistory.module.css';

export default function CoinHistory() {
  const { token, isSignedIn } = useContext(UserContext);
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
