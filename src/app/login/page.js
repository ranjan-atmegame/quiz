import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import QuizRules from '@/components/rule';
import styles from './login.module.css';
import GoogleLogin from '@/components/auth/google';
import { JWT } from '@/utils/Constant';
const Layout = dynamic(() => import('@/components/ui/layout'));
import { isServer } from '@/utils';

export default function Page() {
  const jsonString = cookies().get(JWT)?.value;
  const auth = jsonString && JSON.parse(jsonString);
  if (auth?.isSignedIn) {
    redirect('/');
  }

  if (!isServer()) {
    process.env.NEXTAUTH_URL = window.location.origin;
  }

  return (
    <Layout displayCoins={false}>
      <div className={styles.login}>
        <div className={styles.inner}>
          <h3>Login now & Play Quiz</h3>
          <p>Play Quizzes and win Coins</p>

          <GoogleLogin className={styles.googleLogin} />
          <p>
            Don’t have an account?{' '}
            <Link className={styles.signup} href="">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <QuizRules />
    </Layout>
  );
}
