import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestRules = dynamic(() => import('@/components/contest/Rules'));

export const metadata = {
  title: 'Contest Rules To Play Online Quiz Games : AtmeQuiz.com',
  description:
    'Go through the contest rules to before play online quizzes on AtmeQuiz.com. Check here the Quiz contest rules before going ahead and participating in AtmeQuiz contests. ',
  keywords: ['Quiz Content, Onlien Quiz, AtmeQuiz'],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout isBackButton={true}>
      <ContestRules />
    </Layout>
  );
}
