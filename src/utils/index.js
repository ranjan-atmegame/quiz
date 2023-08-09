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
