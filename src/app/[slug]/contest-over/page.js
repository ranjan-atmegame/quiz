import dynamic from 'next/dynamic';
import { getRobot } from '@/app/server';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestOver = dynamic(() => import('@/components/contest/over'));

export async function generateMetadata({ params, searchParams }, parent) {
  const robots = getRobot();

  return {
    title: 'Thanku- Online Sports Quiz Contest Over : AtmeQuiz.com',
    description:
      'Play online sports quiz contest game that tests your knowledge.',
    keywords: ['Online Quiz , Bollywood Quiz Contes, AtmeQuiz'],
    robots,
  };
}

export default function Page() {
  return (
    <Layout>
      <ContestOver />
    </Layout>
  );
}
