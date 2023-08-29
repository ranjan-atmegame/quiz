import dynamic from 'next/dynamic';
import { getAuth } from '@/app/auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Play = dynamic(() => import('@/components/contest/play'));

export const metadata = {
  title: 'Play Online Bollywood Quiz Contest : AtmeQuiz.com',
  description:
    'Play online Bollywood quiz contest, check your knowledge and win coins.',
  keywords: ['Bollywood Quiz Contest, Online Quiz , AtmeQuiz'],
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
