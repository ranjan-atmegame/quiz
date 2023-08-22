import Link from 'next/link';
// import { useContext } from 'react';
// import UserContext from '@/context/user';
import {
  twoBtn,
  btn,
  shine,
  blue,
  animated,
  bounceIn,
} from '@/components/submit/playNow.module.css';

export default function JoinButtonOver({ isSignedIn, href, onClick }) {
  //   const { isSignedIn } = useContext(UserContext);

  return (
    <div className={twoBtn}>
      {!isSignedIn && (
        <Link
          href="/login"
          className={`${btn} ${shine} ${animated} ${bounceIn}`}
        >
          Join Quiz
        </Link>
      )}

      <Link
        className={`${btn} ${blue} ${shine} ${animated} ${bounceIn}`}
        href={href}
        onClick={onClick}
      >
        {isSignedIn ? 'Play' : 'Play as Guest'}
      </Link>
    </div>
  );
}
