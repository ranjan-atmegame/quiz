import Head from 'next/head';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isSubmitted } from '../auth';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export const metadata = {
  metadataBase: new URL('https://www.atmequiz.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  authors: [{ name: 'Apay Marketing Private Limited' }],
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
      <Layout isHeader={false}>
        <Start />
      </Layout>
    </>
  );
}
