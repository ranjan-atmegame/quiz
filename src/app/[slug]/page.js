import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Category = dynamic(() => import('@/components/category'));
import { getCategory } from '@/api';
import { CONTEST_TYPES } from '@/utils/Constant';
import { QUIZ_LIST } from './category';
// import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug.replace('-quiz', '');
  const contestName = QUIZ_LIST[slug].name;
  return {
    title: `Play ${contestName} Quiz Questions with Answers, Online ${contestName} G.K. Contest : AtmeQuiz.com`,

    description: `Play online ${contestName} quizzes with answers now!. Test ${contestName} GK in an online ${contestName} questions and answers free quiz contest & win coins. Choose from multiple options to answer questions.`,
    keywords: [
      `${contestName}, Online Quiz, Play Quiz, Win Coin, GK, Question Answer`,
    ],
  };
}

export default async function QuizLayout() {
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
      <Category tabs={tabs} />
    </Layout>
  );
}
