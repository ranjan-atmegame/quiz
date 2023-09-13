import React, { useEffect, useRef } from 'react';
// import { saveAddReport } from "../api";
// import { SECOND_ADD } from "../constants";

export default function GoogleAddSecond() {
  const adRef = useRef();

  useEffect(() => {
    // const addDivClassName = 'gpt-passback-' + new Date().valueOf();
    const addDivClassName = 'div-gpt-ad-1694591154579-0';
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
    addDiv.id = 'gpt-passback';
    addDiv.style.minWidth = '336px';
    addDiv.style.minHeight = '280px';

    let divAddScript = document.createElement('script');
    divAddScript.src = '/js/secondAdScript.js';

    addDiv.appendChild(divAddScript);
    adRef.current.appendChild(addDiv);

    // saveAddReport({ name: SECOND_ADD, status: "filled" });
  }, []);

  return <div ref={adRef} style={{ width: '100%' }}></div>;
}
