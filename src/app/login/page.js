import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import QuizRules from '@/components/rule';
import styles from './login.module.css';
import GoogleLogin from '@/components/auth/google';
import { JWT } from '@/utils/Constant';
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  const jsonString = cookies().get(JWT)?.value;
  const auth = jsonString && JSON.parse(jsonString);
  console.log(auth);
  if (auth?.isSignedIn) {
    console.log('SignedIn User...');
    redirect('/');
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
