import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Home = dynamic(() => import('@/components/home/index-client'));

export default function Page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
