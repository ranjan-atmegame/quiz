import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));
import styles from '@/app/page.module.css';

export default function Layout({ isHeader = true, isFooter = true, children }) {
  return (
    <div className={styles.container}>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
}
