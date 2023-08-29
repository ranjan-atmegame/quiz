import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Submit = dynamic(() => import('@/components/submit'));

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <Layout isHeader={false}>
      <Submit />
    </Layout>
  );
}
