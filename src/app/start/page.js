import Head from 'next/head';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isSubmitted } from '../auth';
import { getRobot } from '../server';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const robots = getRobot(true);

  return {
    title:
      'Play Quiz Online and Win Coins, Online G.K. Question-Answer Quiz Contest : AtmeQuiz.com',
    description:
      'Play online quiz contest, check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket, science and politics, choose your favorite quiz category',
    keywords: [
      'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
    ],
    metadataBase: new URL('https://www.atmequiz.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    authors: [{ name: 'Apay Marketing Private Limited' }],
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

// export const metadata = {
//   title:
//     'Play Quiz Online and Win Coins, Online G.K. Question-Answer Quiz Contest : AtmeQuiz.com',
//   description:
//     'Play online quiz contest, check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket, science and politics, choose your favorite quiz category',
//   keywords: [
//     'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
//   ],
//   metadataBase: new URL('https://www.atmequiz.com'),
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//     },
//   },
//   authors: [{ name: 'Apay Marketing Private Limited' }],
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     type: 'website',
//     title: 'Play Online Quiz Contest &amp; Win Coin, AtmeQuiz.com',
//     description:
//       'Play online quiz enhance &amp; check your GK while contests also win coins. Online educational quiz questions are from different categories and choose your favorite quiz category',
//     url: 'https://www.atmequiz.com',
//     siteName: 'AtmeQuiz.com',
//     images: 'https://www.atmequiz.com/img/social.png',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     urls: 'https://www.atmequiz.com',
//     title: 'Play Online Quiz Contest &amp; Win Coin, AtmeQuiz.com',
//     description:
//       'Play online quiz enhance &amp; check your GK while contests also win coins. Online educational quiz questions are from different categories and choose your favorite quiz category.',
//     site: 'AtmeQuiz.com',
//     creator: '@atmequiz',
//     images: ['https://www.atmequiz.com/img/social.png'],
//   },
// };

export default function Page() {
  if (isSubmitted()) {
    redirect('/');
  }

  return (
    <>
      <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Layout isHeader={false} displayFooterLogo={true}>
        <Start />
      </Layout>
    </>
  );
}
