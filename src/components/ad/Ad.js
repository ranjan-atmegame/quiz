import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import RewardAdX from './GPTAd';
// import RewardAdX from './RewardXAd';

const GoogleAdd = () => {
  const [isAdUnfilled, setIsAdUnfilled] = useState(false);
  const addRef = useRef();

  useEffect(() => {
    if (!isAdUnfilled) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      updateStatus();
    }
  }, [isAdUnfilled]);

  const updateStatus = () => {
    const element = addRef.current;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes') {
          const status = addRef.current?.getAttribute('data-ad-status');
          //   if (status === 'unfilled') {
          //     setIsAdUnfilled(true);
          //   }
          if (['unfilled', 'frequencyCapped'].includes(status)) {
            setIsAdUnfilled(true);
          }
        }
      });
    });

    observer.observe(element, {
      attributes: true,
    });
  };

  if (['PROD', 'TEST'].includes(process.env.ENV) && isAdUnfilled) {
    return <RewardAdX />;
  }

  return (
    <div style={{ width: '100%' }}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></Script>
      <ins
        ref={addRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9733910408335876"
        data-ad-slot="7826881212"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAdd;
