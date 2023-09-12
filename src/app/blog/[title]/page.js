import dynamic from 'next/dynamic';
import { getRobot } from '../../server';
const BlogDetail = dynamic(() => import('@/components/blog/detail'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const robots = getRobot(1);

  return {
    robots,
  };
}

export default function Page() {
  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
}
