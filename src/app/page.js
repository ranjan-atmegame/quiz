import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const Home = dynamic(() => import('@/components/home'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  const isSubmitted = cookies().get('tq-submitted')?.value;
  if (!isSubmitted) {
    redirect('/start');
  }

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
