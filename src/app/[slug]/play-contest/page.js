import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Play = dynamic(() => import('@/components/contest/play'));

export default function Page() {
  return (
    <Layout>
      <Play />
    </Layout>
  );
}
