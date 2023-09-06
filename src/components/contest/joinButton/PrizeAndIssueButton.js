import Link from 'next/link';
import {
  twoBtn,
  btn,
  shine,
  blue,
  animated,
  bounceIn,
} from '@/components/submit/playNow.module.css';

export default function JoinButtonOver({ showPrizes }) {
  return (
    <div className={twoBtn}>
      <Link
        href="/login"
        className={`${btn} ${blue} ${bounceIn}`}
        onClick={showPrizes}
      >
        View Prizes
      </Link>

      <Link className={`${btn} ${blue} ${bounceIn}`} href="/contest-rules">
        Contest Rules
      </Link>
    </div>
  );
}
