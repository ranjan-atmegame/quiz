import Script from 'next/script';
import { useEffect } from 'react';
export default function Desktop() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div id="desktopAd" style={{ width: '100%' }}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '300px', height: '250px' }}
        data-ad-client="ca-pub-9733910408335876"
        data-ad-slot="2952657359"
      ></ins>
    </div>
  );
}
