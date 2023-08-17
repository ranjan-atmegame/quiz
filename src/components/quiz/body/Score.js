import { footer } from '../quizCard.module.css';

export default function Score({ score }) {
  return (
    <div className={footer}>
      <h4>
        Your score : <strong>{score}</strong>
      </h4>
    </div>
  );
}
