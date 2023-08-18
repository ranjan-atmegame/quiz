import { useState, useEffect } from 'react';
import { getFunFact } from './api';
import styles from './funFact.module.css';

export default function FunFact({ funFact }) {
  const [fact, setFact] = useState();

  useEffect(() => {
    const fact = getFunFact();
    setFact(fact);
  }, []);

  return (
    <div className={styles.funFact}>
      <h4>#Fun Fact</h4>
      <p>{fact && fact}</p>
    </div>
  );
}
