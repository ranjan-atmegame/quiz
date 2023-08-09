// import moment from 'moment';
// require('moment-timezone');

// export const getQuizEndTime = (endTime) => {
//   const timeZone = moment.tz.guess();
//   // const timeZone = 'Europe/Berlin';
//   return moment(endTime).tz(timeZone).format('LT');
// };

export const getQuizEndTime = (endTime) => {
  const date = new Date(endTime);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};
