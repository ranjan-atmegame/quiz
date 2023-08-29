import dynamic from 'next/dynamic';
import { getAuth } from '@/app/auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Play = dynamic(() => import('@/components/contest/play'));

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const auth = getAuth();

  return (
    <Layout isHeader={false}>
      <Play auth={auth} />
    </Layout>
  );
}
