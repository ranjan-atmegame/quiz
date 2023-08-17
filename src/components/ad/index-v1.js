import Mobile from './Mobile';
import Desktop from './Desktop';
import { isMobile } from 'react-device-detect';
import { ad } from '@/app/page.module.css';

export default function Ad() {
  const mobile = !process.browser || isMobile ? true : false;

  return <div className={ad}>{mobile ? <Mobile /> : <Desktop />}</div>;
}
