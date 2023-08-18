import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/ui/layout'));
const Category = dynamic(() => import('@/components/category'));

export default function QuizLayout() {
  return (
    <Layout>
      <Category />
    </Layout>
  );
}
