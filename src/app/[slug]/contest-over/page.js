import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestOver = dynamic(() => import('@/components/contest/over'));

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout>
      <ContestOver />
    </Layout>
  );
}
