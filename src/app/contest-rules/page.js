import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const ContestRules = dynamic(() => import('@/components/contest/Rules'));

export const metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout>
      <ContestRules />
    </Layout>
  );
}
