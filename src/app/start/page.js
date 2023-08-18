import dynamic from 'next/dynamic';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout isHeader={false}>
      <Start />
    </Layout>
  );
}
