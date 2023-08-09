'use client';
import Link from 'next/link';
// import { useContext } from 'react';
// import UserContext from '@/context/user';
import styles from '@/components/submit/playNow.module.css';

export default function Join({ title, href, onClick }) {
  //   const { isSignedIn } = useContext(UserContext);

  const isSignedIn = false;

  return (
    <>
      {!isSignedIn && (
        <Link
          href="/login"
          title="Join Quiz"
          className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
        >
          Join Quiz
        </Link>
      )}

      <Link
        className={`${styles.btn} ${styles.shine} ${styles.animated} ${styles.bounceIn}`}
        href={href}
        title={title}
        onClick={onClick}
      >
        {isSignedIn ? 'Play' : 'Play as Guest'}
      </Link>
    </>
  );
}
