import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  const isSubmitted = cookies().get('tq-submitted')?.value;
  if (isSubmitted) {
    redirect('/');
  }

  return (
    <Layout isHeader={false}>
      <Start />
    </Layout>
  );
}
