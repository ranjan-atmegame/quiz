import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestOver = dynamic(() => import('@/components/contest/over'));

export default function Page() {
  return (
    <Layout>
      <ContestOver />
    </Layout>
  );
}
