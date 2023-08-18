import dynamic from 'next/dynamic';
const Blog = dynamic(() => import('@/components/blog'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
}
