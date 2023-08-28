importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

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
