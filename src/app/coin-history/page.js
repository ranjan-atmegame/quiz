import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { getAuth } from '../auth';
import { getRobot } from '../server';
const Layout = dynamic(() => import('@/components/ui/layout'));
const CoinHistory = dynamic(() => import('@/components/user/CoinHistory'));

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, canonical } = getRobot();

  return {
    title: 'Coin History : AtmeQuiz.com',
    description: 'Check your coin history that you have won',
    keywords: ['Coin History, Online Quiz, AtmeQuiz'],
    robots,
    alternates: {
      canonical,
    },
  };
}

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    redirect('/login');
  }

  return (
    <Layout isBackButton={true}>
      <CoinHistory auth={auth} />
    </Layout>
  );
}
