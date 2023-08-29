import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestOver = dynamic(() => import('@/components/contest/over'));

export const metadata = {
  title: 'Thanku- Online Sports Quiz Contest Over : AtmeQuiz.com',
  description:
    'Play online sports quiz contest game that tests your knowledge.',
  keywords: ['Online Quiz , Bollywood Quiz Contes, AtmeQuiz'],
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout>
      <ContestOver />
    </Layout>
  );
}
