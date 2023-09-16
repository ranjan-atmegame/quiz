import dynamic from 'next/dynamic';
import { container } from '@/app/page.module.css';
const Start = dynamic(() => import('@/components/start'));
const Layout = dynamic(() => import('@/components/ui/layout'));

export default function Page() {
  return (
    <Layout isHeader={false} displayFooterLogo={true}>
      <Start />
    </Layout>
  );
}
