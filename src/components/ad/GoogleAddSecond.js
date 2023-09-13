import { useEffect, useRef } from 'react';

export default function TestGoogleSeconds() {
  const adRef = useRef();

  useEffect(() => {
    const addDivClassName = adRef.current.getAttribute('class');

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      window.googletag
        .defineSlot('/21619656201/Atmequiz_Filled', [300, 250], addDivClassName)
        .addService(window.googletag.pubads());
      window.googletag.enableServices();
      window.googletag.display(addDivClassName);
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
