import { DEFAULT_COIN } from '@/utils/Constant';
import { header } from '@/components/quiz/quizCard.module.css';

export default function Instruction({ total = 2 }) {
  return (
    <div className={header}>
      <h1>Quick Start!</h1>
      <p>Answer {total} questions and win upto 200 coins.</p>
    </div>
  );
}
