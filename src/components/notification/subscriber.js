'use client';
// import * as firebase from 'firebase/app';
// import 'firebase/messaging';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseCloudMessaging } from '@/utils/Firebase';
// import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config';
import { getLocation } from '@/utils/Location';
import { isMobile } from 'react-device-detect';
import { subscribeTokenToTopic } from './api';

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
      const location = getLocation();
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
            countryCode: location.countryCode,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          if (response.status === 201) {
            subscribeTokenToTopic(token);
          }
        });
      }
    } catch (error) {
      console.log('HERE...');
      console.log(error);
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

  setToken();
};
