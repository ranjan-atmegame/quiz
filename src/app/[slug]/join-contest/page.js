import dynamic from 'next/dynamic';
import { getRobot } from '@/app/server';
import { getAuth } from '@/app/auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestDetail = dynamic(() => import('@/components/contest/detail'));

export async function generateMetadata({ params, searchParams }, parent) {
  const robots = getRobot();

  return {
    title: 'Join Now To Play Bollywood Online Quiz Contest : AtmeQuiz.com',
    description:
      'Join and Play online Bollywood quiz contest and check your bollywood  knowledge for fun and also win coins.',
    keywords: ['Bollywood Quiz Contest, Online Quiz , AtmeQuiz'],
    robots,
  };
}

export default function Page() {
  const auth = getAuth();

  return <Layout isBackButton={true}>{<ContestDetail auth={auth} />}</Layout>;
}
