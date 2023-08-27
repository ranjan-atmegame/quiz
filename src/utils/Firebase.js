import { getMessaging, getToken } from 'firebase/messaging';
import firebase from 'firebase/compat/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: 'AIzaSyDHA3OZaq4XnDGbQv5nEzxJWheP6l2jyMo',
        authDomain: 'atmequiz.firebaseapp.com',
        projectId: 'atmequiz',
        storageBucket: 'atmequiz.appspot.com',
        messagingSenderId: '719102790878',
        appId: '1:719102790878:web:6b77c556e65e5032f4c64f',
        measurementId: 'G-NJGPS639DC',
      });

      try {
        const messaging = getMessaging();
        const tokenInLocalForage = await localforage.getItem('fcm_token');

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        console.log(status);
        if (status && status === 'granted') {
          // Get new token from Firebase
          const fcm_token = await getToken(messaging, {
            vapidKey:
              'BMShZfcx2WepwBGo3CA7PvbyB6jrggaiPD9oIwCEwUQARVLQSOSw43TBGIVFamhRfvo3ZBCw7PkfDwfv5Taa0bE',
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
