import { API_URL } from '@/config';

export const saveNotification = (data) => {
  fetch(`${API_URL}/api/notificatoin`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const subscribeTokenToTopic = (token, topic = 'atmequiz-v1') => {
  fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
    headers: {
      Authorization:
        'key=AAAAp23dzN4:APA91bEidU9wv6dGFOVlkDNSrlMolNLBDI-RkRKhH7d4EQHIc_28OhQPtaNt-QK7DFZWHDp8tKAhX8YwN2fHFZpFFodDX5LyPoteIK4ymmplVcMpgw4LHm89UsFZltNVQW6JEpmX-p3y',
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return console.log(`Subscribe to ${topic}`);
      }

      console.error(
        `Error subscribing to topic: ${response.status} - ${response.text()}`
      );
    })
    .catch((error) => console.log(error));
};
