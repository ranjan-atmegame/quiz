import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CONTEST_TYPES } from '@/utils/Constant';
import { getCategory } from '@/api';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default async function Page() {
  // 1) Verify is two question submitted
  const isSubmitted = cookies().get('tq-submitted')?.value;
  if (!isSubmitted) {
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
