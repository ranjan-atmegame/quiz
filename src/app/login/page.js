import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout>
      <div>Login</div>
    </Layout>
  );
}
