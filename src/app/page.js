import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));
import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export default function Page() {
  // 1) Verify is two question submitted
  const isSubmitted = cookies().get('tq-submitted')?.value;
  if (!isSubmitted) {
    redirect('/start');
  }

  // 2) Verify domain is cricket subdomain or not
  const domain = cookies().get('DOMAIN')?.value;
  let tab = CONTEST_TYPES;
  if (domain === CRICKET_SUBDOMAIN) {
    tab = CONTEST_TYPES.reverse();
  }

  return (
    <Layout>
      <Home tab={tab} />
    </Layout>
  );

  // return (
  //   <Layout>
  //     <Home />
  //   </Layout>
  // );
}
