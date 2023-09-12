import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isSubmitted } from './auth';
import { getRobot, getCanonicalUrl } from './server';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, canonical } = getRobot(true);

  return {
    title:
      'Play Quiz and Win Coins, Online G. K Question-Answer Quiz Contest : AtmeQuiz.com',
    description:
      'Play online quiz contest and check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket and politics, choose your favorite quiz category',
    keywords: [
      'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
    ],
    metadataBase: new URL('https://www.atmequiz.com'),
    alternates: {
      canonical,
      languages: {
        'en-US': '/en-US',
      },
    },
    robots,
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

export default async function Page() {
  // 1) Verify is two question submitted
  if (!isSubmitted()) {
    redirect('/start');
  }

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
