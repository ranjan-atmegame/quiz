import dynamic from 'next/dynamic';
import { getAuth } from '@/app/auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestDetail = dynamic(() => import('@/components/contest/detail'));

export const metadata = {
  title: 'Join Now To Play Bollywood Online Quiz Contest : AtmeQuiz.com',
  description:
    'Join and Play online Bollywood quiz contest and check your bollywood  knowledge for fun and also win coins.',
  keywords: ['Bollywood Quiz Contest, Online Quiz , AtmeQuiz'],
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const auth = getAuth();

  return <Layout isBackButton={true}>{<ContestDetail auth={auth} />}</Layout>;
}
