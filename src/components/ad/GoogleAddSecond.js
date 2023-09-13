import { useEffect, useRef } from 'react';

export default function TestGoogleSeconds() {
  const adRef = useRef();

  useEffect(() => {
    const addDivClassName = adRef.current.getAttribute('class');
    console.log('add loaded in case of unfilled');

    googletag = googletag || { cmd: [] };
    googletag.cmd.push(function () {
      googletag
        .defineSlot('/21619656201/Atmequiz_Filled', [300, 250], addDivClassName)
        .addService(googletag.pubads());
      googletag.enableServices();
      googletag.display(addDivClassName);
    });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={adRef}
        className={'gpt-passback-' + new Date().valueOf()}
        style={{ minWidth: '336px', minHeight: '280px' }}
      ></div>
    </div>
  );
}
