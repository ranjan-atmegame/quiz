import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { getAuth } from '../auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const CoinHistory = dynamic(() => import('@/components/user/CoinHistory'));

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
