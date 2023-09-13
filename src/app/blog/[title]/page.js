import dynamic from 'next/dynamic';
import { getRobot } from '../../server';
const BlogDetail = dynamic(() => import('@/components/blog/detail'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, host } = getRobot(true);
  const canonical = `${host}/blog/${params.title}`;

  return {
    robots,
    alternates: {
      canonical,
    },
  };
}

export default function Page() {
  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
}
