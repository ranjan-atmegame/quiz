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
  fetch('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, {
    method: 'POST',
    headers: new Headers({
      Authorization: 'key=' + fcm_server_key,
    }),
  })
    .then((response) => {
      if (response.status < 200 || response.status >= 400) {
        throw (
          'Error subscribing to topic: ' +
          response.status +
          ' - ' +
          response.text()
        );
      }
      console.log('Subscribed to "' + topic + '"');
    })
    .catch((error) => {
      console.error(error);
    });
};
