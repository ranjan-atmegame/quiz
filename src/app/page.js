import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/components/home/index'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
