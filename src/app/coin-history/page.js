import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Transactions = dynamic(() => import('@/components/transactions'));

export default function Page() {
  return (
    <Layout>
      <Transactions />
    </Layout>
  );
}
