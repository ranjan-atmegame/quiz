import { useEffect, useRef } from 'react';

export default function TestGoogleSeconds() {
  const adRef = useRef();

  useEffect(() => {
    const uniqueId = 'gpt-passback-' + new Date().valueOf();

    let hiddenElement = document.createElement('input');
    hiddenElement.type = 'hidden';
    hiddenElement.id = 'addDivClass';
    hiddenElement.value = uniqueId;
    adRef.current.appendChild(hiddenElement);

    const addDiv = document.createElement('div');
    addDiv.id = uniqueId;
    addDiv.style.width = '300px';
    addDiv.style.height = '250px';

    const divAddScript = document.createElement('script');
    divAddScript.src = '/js/secondAdScript-v3.js';

    addDiv.appendChild(divAddScript);
    adRef.current.appendChild(addDiv);
  }, []);

  return <div ref={adRef} style={{ width: '100%' }}></div>;
}
