import { getMessaging, getToken } from 'firebase/messaging';
import firebase from 'firebase/compat/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: env.NEXT_PUBLIC_FIREBASE_MEASERMENT_ID,
      });

      // Initialize the Firebase app with the credentials
      // firebase?.initializeApp({
      //   apiKey: 'AIzaSyDHA3OZaq4XnDGbQv5nEzxJWheP6l2jyMo',
      //   authDomain: 'atmequiz.firebaseapp.com',
      //   projectId: 'atmequiz',
      //   storageBucket: 'atmequiz.appspot.com',
      //   messagingSenderId: '719102790878',
      //   appId: '1:719102790878:web:6b77c556e65e5032f4c64f',
      //   measurementId: 'G-NJGPS639DC',
      // });

      try {
        const messaging = getMessaging();
        // const tokenInLocalForage = await localforage.getItem('fcm_token');

        // // Return the token if it is alredy in our local storage
        // if (tokenInLocalForage !== null) {
        //   return tokenInLocalForage;
        // }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        console.log(status);
        if (status && status === 'granted') {
          // Get new token from Firebase
          const fcm_token = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem('fcm_token', fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };
