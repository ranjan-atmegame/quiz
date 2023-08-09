import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestDetail = dynamic(() => import('@/components/contest/detail'));

export default function Page() {
  return (
    <Layout>
      <ContestDetail />
    </Layout>
  );
}
