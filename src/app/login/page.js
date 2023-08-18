import dynamic from 'next/dynamic';
import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import QuizRules from '@/components/rule';
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout>
      <div className={styles.login}>
        <div className={styles.inner}>
          <h3>Login now & Play Quiz</h3>
          <p>Play Quizzes and win Coins</p>
          <button className={styles.googleLogin}>
            <Image
              src={`/img/googleLogin.svg`}
              width="36"
              height="36"
              alt="coin"
              title="coin"
            />
            <span>Login</span>
          </button>
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
