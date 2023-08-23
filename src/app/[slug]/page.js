import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Category = dynamic(() => import('@/components/category'));
import { getCategory } from '@/api';
import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

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
