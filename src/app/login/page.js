import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import QuizRules from '@/components/rule';
import styles from './login.module.css';
import GoogleLogin from '@/components/auth/google';
import { getAuth } from '../auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
// import { isServer } from '@/utils';

export const metadata = {
  title: 'Online Quiz Contest Login : AtmeQuiz.com',
  description:
    'Login to Play online quiz contest game that tests your knowledge.',
  keywords: ['Login Online Quiz , Bollywood Quiz Contes, AtmeQuiz'],
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const auth = getAuth();
  if (auth.isSignedIn) {
    redirect('/');
  }

  // process.env.NEXTAUTH_URL = 'http://localhost:3000';
  // if (!isServer()) {
  //   process.env.NEXTAUTH_URL = window.location.origin;
  // }

  return (
    <Layout displayCoins={false} isBackButton={true}>
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
