import dynamic from 'next/dynamic';
const BlogDetail = dynamic(() => import('@/components/blog/detail'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
}
