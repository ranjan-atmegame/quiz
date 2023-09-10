'use client';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { firebaseCloudMessaging } from '@/utils/Firebase';
import { API_URL } from '@/config';
import { getLocation } from '@/utils/Location';
import { isMobile } from 'react-device-detect';

// export const pushNotification = () => {
//   const messaging = getMessaging();
//   return getToken(messaging, {
//     vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('Token : ', currentToken);
//         return saveToTopic(currentToken);
//       }

//       return {
//         status: 'error',
//         message:
//           'The notification permission was not granted and blocked instead..',
//       };
//     })
//     .catch((err) => {
//       return {
//         status: 'error',
//         message:
//           'The notification permission was not granted and blocked instead..',
//       };
//     });

//   // onMessage(messaging, (payload) => {
//   //   console.log('Message received. ', payload);
//   // });
// };

export const pushNotification = async () => {
  try {
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
    });

    if (token) {
      console.log('token', token);
      return await saveToTopic(token);
    }
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message:
        'The notification permission was not granted and blocked instead..',
    };
  }
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
      const token = await firebaseCloudMessaging.init();

      if (token) {
        console.log('token', token);
        getMessage();

        await saveToTopic(token);
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
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

export const saveToTopic = async (token) => {
  // API CALL
  const { countryCode } = await getLocation();
  const SITE_URL = window.location.origin.toString();

  let response = await fetch(`${API_URL}/api/notification`, {
    method: 'POST',
    body: JSON.stringify({
      userId: token,
      domain: SITE_URL,
      url: SITE_URL,
      deviceId: isMobile ? 'm' : 'd',
      countryCode: countryCode,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  response = await response.json();

  if (response.status === 'success') {
    return {
      status: 'success',
      message: 'User subscribed successfully.',
    };
  }

  return {
    status: 'fail',
    message: 'User already subscribed.',
  };
};
