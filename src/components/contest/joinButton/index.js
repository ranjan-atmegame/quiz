import Link from 'next/link';
import {
  btn,
  shine,
  blue,
  animated,
  bounceIn,
} from '@/components/submit/playNow.module.css';

export default function Join({ isSignedIn, href, onClick }) {
  const playBtnClass = isSignedIn ? '' : blue;
  return (
    <>
      {!isSignedIn && (
        <Link
          href="/login"
          className={`${btn} ${shine} ${animated} ${bounceIn}`}
        >
          Join Quiz
        </Link>
      )}

      <Link
        className={`${btn} ${playBtnClass} ${shine} ${animated} ${bounceIn}`}
        href={href}
        onClick={onClick}
        prefetch={true}
      >
        {isSignedIn ? 'Play' : 'Play as Guest'}
      </Link>
    </>
  );
}
