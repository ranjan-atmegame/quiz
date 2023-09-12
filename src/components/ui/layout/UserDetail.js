'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../Icon';

export default function UserDetail({ styles, isSignedIn, handleSignout }) {
  const [isEditable, setIsEditable] = useState(false);
  const userName = isSignedIn ? `Guest ${user.name}` : 'Guest';

  const handleEditable = () => {
    if (!isSignedIn) {
      return false;
    }

    setIsEditable(true);
  };

  return (
    <div className={styles.userDetails}>
      <h3 onClick={handleEditable}>
        <span className={styles.contenteditable} contentEditable={isEditable}>
          {userName}
        </span>
        {isSignedIn && (
          <Icon
            width={18}
            height={18}
            src="/img/edit.svg"
            title="Edit"
            iconClass={styles.editText}
          />
        )}
      </h3>
      <p>Play Quiz &amp; earn coins</p>

      {!isSignedIn ? (
        <Link
          className={`${styles.btn} ${styles.btnSmall} ${styles.shine}`}
          href="/login"
        >
          Sign In
        </Link>
      ) : (
        <Link
          className={`${styles.btn} ${styles.btnSmall} ${styles.shine}`}
          onClick={handleSignout}
          href=""
        >
          Logout
        </Link>
      )}
    </div>
  );
}
