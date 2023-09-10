importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

// FOR TESTING ONLY
// firebase.initializeApp({
//   apiKey: 'AIzaSyCpD50Sn0oJpjBdc0RD-dgE1qYOrocVfJM',
//   authDomain: 'nextquiz-9469c.firebaseapp.com',
//   projectId: 'nextquiz-9469c',
//   storageBucket: 'nextquiz-9469c.appspot.com',
//   messagingSenderId: '1047052192813',
//   appId: '1:1047052192813:web:a434915f33988609f37ca4',
// });

firebase.initializeApp({
  apiKey: 'AIzaSyDHA3OZaq4XnDGbQv5nEzxJWheP6l2jyMo',
  authDomain: 'atmequiz.firebaseapp.com',
  projectId: 'atmequiz',
  storageBucket: 'atmequiz.appspot.com',
  messagingSenderId: '719102790878',
  appId: '1:719102790878:web:6b77c556e65e5032f4c64f',
  measurementId: 'G-NJGPS639DC',
});

const messaging = firebase.messaging();
