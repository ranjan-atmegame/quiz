import React, { useEffect, useRef } from 'react';

const GoogleAddSecond = () => {
  const adRef = useRef();
  useEffect(() => {
    const addDivClassName = 'gpt-passback-' + new Date().valueOf();
    let hiddenElement = document.createElement('input');
    hiddenElement.type = 'hidden';
    hiddenElement.id = 'addDivClass';
    hiddenElement.value = addDivClassName;
    adRef.current.appendChild(hiddenElement);

    let addScript = document.createElement('script');
    addScript.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    addScript.async = true;
    adRef.current.appendChild(addScript);

    let addDiv = document.createElement('div');
    // addDiv.id = "gpt-passback";
    addDiv.id = addDivClassName;
    addDiv.style.width = '300px';
    addDiv.style.height = '250px';

    let divAddScript = document.createElement('script');
    divAddScript.src = '/js/secondAdScript.js';

    addDiv.appendChild(divAddScript);
    adRef.current.appendChild(addDiv);
  }, []);

  return <div ref={adRef} style={{ width: '100%' }}></div>;
};

export default GoogleAddSecond;
