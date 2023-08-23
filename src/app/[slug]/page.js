import { cookies } from 'next/headers';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Category = dynamic(() => import('@/components/category'));
import { CONTEST_TYPES, CRICKET_SUBDOMAIN } from '@/utils/Constant';

export default function QuizLayout() {
  // 2) Verify domain is cricket subdomain or not
  const domain = cookies().get('DOMAIN')?.value;
  let tab = CONTEST_TYPES;
  if (domain === CRICKET_SUBDOMAIN) {
    tab = CONTEST_TYPES.reverse();
  }

  return (
    <Layout>
      <Category tab={tab} />
    </Layout>
  );
}
