import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { CONTEST_TYPES } from '@/utils/Constant';
import { getCategory } from '@/api';
import { isSubmitted } from './auth';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export const metadata = {
  title:
    'Play Quiz and Win Coins, Online G. K Question-Answer Quiz Contest : AtmeQuiz.com',
  description:
    'Play online quiz contest and check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket and politics, choose your favorite quiz category',
  keywords: [
    'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
  ],
  metadataBase: new URL('https://www.atmequiz.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
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

export default async function Page() {
  // 1) Verify is two question submitted
  if (!isSubmitted()) {
    redirect('/start');
  }
  // 2) Verify domain is cricket subdomain or not
  // const domain = cookies().get('DOMAIN')?.value;
  // let tabs = CONTEST_TYPES;
  // if (domain === CRICKET_SUBDOMAIN) {
  //   tabs = CONTEST_TYPES.reverse();
  // }

  const category = await getCategory();
  const tabs = [...CONTEST_TYPES, ...category];

  return (
    <Layout>
      <Home tabs={tabs} />
    </Layout>
  );
}
