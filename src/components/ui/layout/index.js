import Header from './Header';
import Footer from './Footer';
import { container } from '@/app/page.module.css';
import { getAuth } from '@/app/auth';

export default function Layout({
  isHeader = true,
  isFooter = true,
  displayCoins = true,
  displayFooterLogo = false,
  isBackButton = false,
  children,
}) {
  const auth = getAuth();

  return (
    <div>
      <div className={container}>
        {isHeader && (
          <Header
            isBackButton={isBackButton}
            displayCoins={displayCoins}
            auth={auth}
          />
        )}
        {children}
        {isFooter && <Footer displayLogo={displayFooterLogo} />}
      </div>
    </div>
  );
}
