import dynamic from 'next/dynamic';
import { getAuth } from '@/app/auth';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestDetail = dynamic(() => import('@/components/contest/detail'));

export default function Page() {
  const auth = getAuth();

  return <Layout>{<ContestDetail auth={auth} />}</Layout>;
}
