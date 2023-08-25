import Header from './Header';
import Footer from './Footer';
import { container } from '@/app/page.module.css';
import { getAuth } from '@/app/auth';

export default function Layout({
  isHeader = true,
  isFooter = true,
  displayCoins = true,
  children,
}) {
  const auth = getAuth();

  return (
    <div className={container}>
      {isHeader && <Header displayCoins={displayCoins} auth={auth} />}
      {children}
      {isFooter && <Footer />}
    </div>
  );
}
