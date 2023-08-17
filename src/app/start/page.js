import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Start = dynamic(() => import('@/components/start'));

export default function Page() {
  return (
    <Layout isHeader={false}>
      <Start />
    </Layout>
  );
}
