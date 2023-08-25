import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { JWT } from '@/utils/Constant';
const Layout = dynamic(() => import('@/components/ui/layout'));
const CoinHistory = dynamic(() => import('@/components/user/CoinHistory'));

export default function Page() {
  const jsonString = cookies().get(JWT)?.value;
  const auth = jsonString && JSON.parse(jsonString);
  if (!auth?.isSignedIn) {
    redirect('/login');
  }

  return (
    <Layout>
      <CoinHistory />
    </Layout>
  );
}
