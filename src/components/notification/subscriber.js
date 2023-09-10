'use client';
// import * as firebase from 'firebase/app';
// import 'firebase/messaging';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseCloudMessaging } from '@/utils/Firebase';
// import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config';
import { getLocation } from '@/utils/Location';
import { isMobile } from 'react-device-detect';
// import { subscribeTokenToTopic } from './api';
import { subscribeTokenToTopic } from './api';

export const pushNotification = () => {
  return getLocation()
    .then((response) => {
      const { countryCode } = response;
      const messaging = getMessaging();
      return getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token : ', currentToken);
            fetch(`${API_URL}/notification`, {
              method: 'POST',
              body: JSON.stringify({
                regid: currentToken,
                domain: SITE_URL,
                url: SITE_URL,
                deviceid: isMobile ? 1 : 0,
                country: countryCode,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => response.json())
              .then((response) => {
                if (response.statusCode === 201) {
                  subscribeTokenToTopic(currentToken);
                } else {
                  console.log('Aleady registered.');
                }
              });

            return true;
          } else {
            // Show permission request UI
            console.log(
              'No registration token available. Request permission to generate one.'
            );
          }

          return false;
        })
        .catch((err) => {
          // console.log('An error occurred while retrieving token. ', err);
          return false;
        });
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const subscribe = () => {
  // Event listener that listens for the push notification event in the background
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('event for the service worker', event);
    });
  }

  // Calls the getMessage() function if the token is there
  async function setToken() {
    try {
      const { countryCode } = await getLocation();
      const token = await firebaseCloudMessaging.init();

      if (token) {
        console.log('token', token);
        getMessage();

        // API CALL
        const SITE_URL = window.location.origin.toString();
        fetch(`${API_URL}/api/notification`, {
          method: 'POST',
          body: JSON.stringify({
            userId: token,
            domain: SITE_URL,
            url: SITE_URL,
            deviceId: isMobile ? 1 : 0,
            countryCode: countryCode,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          if (response.status === 201) {
            console.log('Subscribed');
            subscribeTokenToTopic(token);
          } else {
            console.log('Already subscribed!');
          }
        });

        return true;
      }

      return false;
    } catch (error) {
      console.log('HERE...');
      console.log(error);

      return false;
    }
  }

  // Handles the click function on the toast showing push notification
  // const handleClickPushNotification = (url) => {
  //   router.push(url);
  // };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();

    //Verify message
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });

    // onMessage((message) => {
    //   toast(
    //     <div onClick={() => handleClickPushNotification(message?.data?.url)}>
    //       <h5>{message?.notification?.title}</h5>
    //       <h6>{message?.notification?.body}</h6>
    //     </div>,
    //     {
    //       closeOnClick: false,
    //     }
    //   );
    // });
  }

  return setToken();
};
