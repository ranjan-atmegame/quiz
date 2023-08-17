import { useState, useEffect } from 'react';
import { getFunFact } from './api';
import { footer } from '@/components/quiz/quizCard.module.css';

export default function FunFact({ funFact }) {
  const [fact, setFact] = useState();

  useEffect(() => {
    const fact = getFunFact();
    setFact(fact);
  }, []);

  return (
    <div className={footer}>
      <h4>#Fun Fact</h4>
      <p>{fact && fact}</p>
    </div>
  );
}
