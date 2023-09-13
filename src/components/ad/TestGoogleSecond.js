import { useEffect, useRef } from 'react';

export default function TestGoogleSeconds() {
  const adRef = useRef();

  useEffect(() => {
    const addDivClassName = 'gpt-passback-' + new Date().valueOf();
    // const addDivClassName = 'div-gpt-ad-1694591154579-0';
    let hiddenElement = document.createElement('input');
    hiddenElement.type = 'hidden';
    hiddenElement.id = 'addDivClass';
    hiddenElement.value = addDivClassName;
    adRef.current.appendChild(hiddenElement);

    let addDiv = document.createElement('div');
    // addDiv.id = "gpt-passback";
    addDiv.id = addDivClassName;
    addDiv.style.width = '300px';
    addDiv.style.height = '250px';

    let divAddScript = document.createElement('script');
    divAddScript.src = '/js/secondAdScript-v2.js';

    addDiv.appendChild(divAddScript);
    adRef.current.appendChild(addDiv);

    return () => {
      const item = document.querySelector(`${addDiv.id}`);
      item.remove();
    };
  }, []);

  return <div ref={adRef} style={{ width: '100%' }}></div>;
}
