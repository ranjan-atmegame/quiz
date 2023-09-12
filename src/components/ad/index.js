// import GoogleAd from './GoogleAd';
import Ad from './Ad';
import { ad, sponsored } from '@/app/page.module.css';

export default function Ad() {
  return (
    <div className={ad}>
      <span className={sponsored}>SPONSORED</span>
      {/* <GoogleAd /> */}
      <Ad />
    </div>
  );
}
