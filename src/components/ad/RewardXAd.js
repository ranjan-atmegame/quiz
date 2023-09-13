import { useEffect } from 'react';

export default function RewardAdX() {
  useEffect(() => {
    googletag.cmd.push(function () {
      googletag.display('div-gpt-ad-1694172802398-0');
    });
  }, []);

  return <div id="div-gpt-ad-1694172802398-0"></div>;
}
