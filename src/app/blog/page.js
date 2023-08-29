import dynamic from 'next/dynamic';
const Blog = dynamic(() => import('@/components/blog'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
}
