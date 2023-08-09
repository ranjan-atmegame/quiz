import Header from './Header';
import Footer from './Footer';
import { container } from '@/app/page.module.css';

export default function Layout({ isHeader = true, isFooter = true, children }) {
  return (
    <div className={container}>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
}
