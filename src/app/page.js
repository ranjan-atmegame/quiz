// import { headers } from 'next/headers';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { CONTEST_TYPES } from '@/utils/Constant';
import { getCategory } from '@/api';
import { isSubmitted } from './auth';
import { getRobot, getCategoryList } from './server';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));

// export const metadata = {
//   title:
//     'Play Quiz and Win Coins, Online G. K Question-Answer Quiz Contest : AtmeQuiz.com',
//   description:
//     'Play online quiz contest and check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket and politics, choose your favorite quiz category',
//   keywords: [
//     'Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer',
//   ],
//   metadataBase: new URL('https://www.atmequiz.com'),
//   alternates: {
//     canonical: '/',
//   },
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

export async function generateMetadata({ params, searchParams }, parent) {
  const robots = getRobot();

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
      canonical: '/',
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

  // const slug = params.slug.replace('-quiz', '');
  // const contestName = QUIZ_LIST[slug].name;
  // return {
  //   title: `Play ${contestName} Quiz Questions with Answers, Online ${contestName} G.K. Contest : AtmeQuiz.com`,
  //   description: `Play online ${contestName} quizzes with answers now!. Test ${contestName} GK in an online ${contestName} questions and answers free quiz contest & win coins. Choose from multiple options to answer questions.`,
  //   keywords: [
  //     `${contestName}, Online Quiz, Play Quiz, Win Coin, GK, Question Answer`,
  //   ],
  // };
}

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

  // const category = await getCategory();

  const categoryList = await getCategoryList();
  const tabs = [...CONTEST_TYPES, ...categoryList];

  return (
    <Layout>
      <Home tabs={tabs} />
    </Layout>
  );
}
