import dynamic from 'next/dynamic';
import { getAuth } from '../auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Submit = dynamic(() => import('@/components/submit'));

export const metadata = {
  title: 'Now Play More Quiz Contest and Submit : AtmeQuiz.com',
  description:
    'Now play more online quiz contest, check and submit your knowledge and win coins.',
  keywords: ['Quiz, Online Quiz , AtmeQuiz'],
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const auth = getAuth();

  return (
    <Layout isHeader={false}>
      <Submit auth={auth} />
    </Layout>
  );
}
