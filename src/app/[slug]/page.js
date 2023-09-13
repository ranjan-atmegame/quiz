import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Category = dynamic(() => import('@/components/category'));
import { ALLOWED_CATEGORY, CONTEST_TYPES } from '@/utils/Constant';
import { cookies } from 'next/headers';
import { getRobot } from '../server';
// import { getCategory } from '@/api';
// import { QUIZ_LIST } from './category';
// import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, host } = getRobot(true);
  const canonical = `${host}/${params.slug}`;

  const slug = params.slug.replace('-quiz', '');
  let quizList = cookies().get(ALLOWED_CATEGORY)?.value;
  quizList = quizList ? JSON.parse(quizList) : [];

  const contest = quizList.find((quiz) => quiz.slug === slug);
  const contestName = contest?.name;

  return {
    title: `Play ${contestName} Quiz Questions with Answers, Online ${contestName} G.K. Contest : AtmeQuiz.com`,

    description: `Play online ${contestName} quizzes with answers now!. Test ${contestName} GK in an online ${contestName} questions and answers free quiz contest & win coins. Choose from multiple options to answer questions.`,
    keywords: [
      `${contestName}, Online Quiz, Play Quiz, Win Coin, GK, Question Answer`,
    ],
    robots,
    alternates: {
      canonical,
    },
  };
}

export default async function QuizLayout() {
  // 2) Verify domain is cricket subdomain or not
  // const domain = cookies().get('DOMAIN')?.value;
  // let tabs = CONTEST_TYPES;
  // if (domain === CRICKET_SUBDOMAIN) {
  //   tabs = CONTEST_TYPES.reverse();
  // }

  // const category = await getCategory();
  // const tabs = [...CONTEST_TYPES, ...category];

  // 2) Get allowed category
  let allowedCategory = cookies().get(ALLOWED_CATEGORY)?.value;
  allowedCategory = allowedCategory
    ? JSON.parse(allowedCategory)
    : CONTEST_TYPES;

  return (
    <Layout>
      <Category tabs={allowedCategory} />
    </Layout>
  );
}
