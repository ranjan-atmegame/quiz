import Link from 'next/link';
import { signinSignup, login } from '@/components/quiz/quizCard.module.css';

export default function LoginOption() {
  return (
    <div className={signinSignup}>
      <Link className={login} href="/login">
        Sign up
      </Link>
      OR
      <Link className={login} href="/login">
        Sign In
      </Link>
    </div>
  );
}
