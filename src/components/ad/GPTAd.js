import { useEffect } from 'react';

export default function GPTAd() {
  useEffect(() => {
    // <!-- /21619656201/Atmequiz_Filled -->
    googletag.cmd.push(function () {
      googletag.display('div-gpt-ad-1694591154579-0');
    });
  }, []);

  return (
    <div
      id="div-gpt-ad-1694591154579-0"
      style="min-width: 336px; min-height: 280px;"
    ></div>
  );
}
