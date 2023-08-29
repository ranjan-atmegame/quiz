import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { getAuth } from '../auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const CoinHistory = dynamic(() => import('@/components/user/CoinHistory'));

export const metadata = {
  title: 'Coin History : AtmeQuiz.com',
  description: 'Check your coin history that you have won',
  keywords: ['Coin History, Online Quiz, AtmeQuiz'],
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    redirect('/login');
  }

  return (
    <Layout>
      <CoinHistory auth={auth} />
    </Layout>
  );
}
