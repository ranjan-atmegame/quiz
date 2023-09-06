import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import {
  twoBtn,
  btn,
  shine,
  blue,
  animated,
  bounceIn,
} from '@/components/submit/playNow.module.css';

export default function JoinButtonOver() {
  const params = useParams();
  const { status } = useSession();

  const displayGuestButton = () => {
    return (
      <div className={twoBtn}>
        <Link
          href="/login"
          className={`${btn} ${shine} ${animated} ${bounceIn}`}
        >
          Join Quiz
        </Link>

        <Link
          className={`${btn} ${blue} ${shine} ${animated} ${bounceIn}`}
          href="/"
        >
          Play as Guest
        </Link>
      </div>
    );
  };

  const displayUserButton = () => {
    return (
      <div className={twoBtn}>
        <Link href="/" className={`${btn} ${shine} ${animated} ${bounceIn}`}>
          Play Quiz
        </Link>

        <Link
          className={`${btn} ${blue} ${shine} ${animated} ${bounceIn}`}
          href={`${window.location.origin}/${params.slug}/join-contest/${window.location.search}`}
        >
          Play Again
        </Link>
      </div>
    );
  };

  return status === 'authenticated'
    ? displayUserButton()
    : displayGuestButton();
}
