import dynamic from 'next/dynamic';
import { getRobot } from '../server';
const Blog = dynamic(() => import('@/components/blog'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export async function generateMetadata({ params, searchParams }, parent) {
  const { robots, host } = getRobot(true);
  const canonical = `${host}/blog`;

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
      <Blog />
    </Layout>
  );
}
