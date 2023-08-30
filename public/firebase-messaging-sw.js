importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCpD50Sn0oJpjBdc0RD-dgE1qYOrocVfJM',
  authDomain: 'nextquiz-9469c.firebaseapp.com',
  projectId: 'nextquiz-9469c',
  storageBucket: 'nextquiz-9469c.appspot.com',
  messagingSenderId: '1047052192813',
  appId: '1:1047052192813:web:a434915f33988609f37ca4',
});

const messaging = firebase.messaging();
