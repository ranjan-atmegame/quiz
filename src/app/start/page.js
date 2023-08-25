import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { isSubmitted } from '../auth';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  if (isSubmitted()) {
    redirect('/');
  }

  return (
    <Layout isHeader={false}>
      <Start />
    </Layout>
  );
}
