import dynamic from 'next/dynamic';
import { container } from '@/app/page.module.css';
const Start = dynamic(() => import('@/components/start'));
const Footer = dynamic(() => import('@/components/ui/layout/Footer'));

export default function Page() {
  return (
    <div>
      <div className={container}>
        <Start />
        <Footer displayLogo={true} />
      </div>
    </div>
  );
}
