import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isSubmitted } from '../auth';
import { getRobot } from '../server';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, host } = getRobot(true);
  const canonical = `${host}/start`;

  return {
    title:
      'Play Quiz Online and Win Coins, Online G.K. Question-Answer Quiz Contest : AtmeQuiz.com',
    description:
      'Play online quiz contest, check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket, science and politics, choose your favorite quiz category',
    keywords: [
      'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
    ],
    metadataBase: new URL('https://www.atmequiz.com'),
    authors: [{ name: 'Apay Marketing Private Limited' }],
    robots,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      title: 'Play Online Quiz Contest &amp; Win Coin, AtmeQuiz.com',
      description:
        'Play online quiz enhance &amp; check your GK while contests also win coins. Online educational quiz questions are from different categories and choose your favorite quiz category',
      url: 'https://www.atmequiz.com',
      siteName: 'AtmeQuiz.com',
      images: 'https://www.atmequiz.com/img/social.png',
    },
    twitter: {
      card: 'summary_large_image',
      urls: 'https://www.atmequiz.com',
      title: 'Play Online Quiz Contest &amp; Win Coin, AtmeQuiz.com',
      description:
        'Play online quiz enhance &amp; check your GK while contests also win coins. Online educational quiz questions are from different categories and choose your favorite quiz category.',
      site: 'AtmeQuiz.com',
      creator: '@atmequiz',
      images: ['https://www.atmequiz.com/img/social.png'],
    },
  };
}

export default function Page() {
  if (isSubmitted()) {
    redirect('/');
  }

  return (
    <Layout isHeader={false} displayFooterLogo={true}>
      <Start />
    </Layout>
  );
}
