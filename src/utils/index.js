//=======Number format
//========Number
export const formatNumber = (number) => {
  return number.toLocaleString(navigator.languages[1]);

  // const locale = navigator.locale;
  // const locale = 'ar-SA';
  // const locale = 'de-DE';
  // return new Intl.NumberFormat(locale).format(number);
};

// Returns number between min (included) and max (not included):
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Is client or server
export const isServer = () => typeof window === 'undefined';

export const showRewardAd = (callback) => {
  console.log('Display reward ad');

  const insElement = document.createElement('script');
  insElement.setAttribute('data-ad-client', 'ca-pub-9733910408335876');
  insElement.setAttribute('data-ad-slot', '6560622696');
  insElement.setAttribute('data-ad-format', 'auto');
  insElement.setAttribute('class', 'adsbygoogle');
  insElement.setAttribute('data-full-width-responsive', 'true');
  insElement.style.display = 'block';
  document.head.appendChild(insElement);

  window.rewardAd(callback);
};
