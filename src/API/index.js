import axios from 'axios';
// eslint-disable-next-line import/named
import { APP_ID, REDIRECT_URI, VK_AUTH_URI } from '@/utils/consts';

const auth = () => {
  axios.get(`${VK_AUTH_URI}?
  client_id=${APP_ID}
  &display=page
  &redirect_uri=${REDIRECT_URI}
  &response_type=token`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log('res--->', res);
    });
};

const searchUser = () => {
  auth();
  // axios.get('https://oauth.vk.com/authorize?'
  //   + 'client_id=1&'
  //   + 'display=page&'
  //   + 'redirect_uri=http://localhost:8080'
  //   + '&response_type=token')
  //   .then((res) => {
  //     console.log(res);
  //   });
};

export default searchUser;
