import Link from 'next/link';
import styles from './loginOption.module.css';

export default function LoginOption() {
  return (
    <div className={styles.signinSignup}>
      <Link className={styles.login} href="/login">
        Sign up
      </Link>
      OR
      <Link className={styles.login} href="/login">
        Sign In
      </Link>
    </div>
  );
}
