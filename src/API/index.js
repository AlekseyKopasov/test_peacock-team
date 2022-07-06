// import axios from 'axios';
// eslint-disable-next-lin e import/named
// import { APP_ID, REDIRECT_URI, VK_AUTH_URI } from '@/utils/consts';

// import fetchJsonp from 'fetch-jsonp';
// eslint-disable-next-line max-len
const TOKEN = 'vk1.a.ejlwfjmUJU-ndJv0T4y1G-MOkmUR8Y9sRoanj4R-ad-y_3vHqV4U808nvvB6ihBlWAXOGOzMDnc-D8vEsZqEFaHc5_J2C287fbHtf-J3hRGaCP6u3iVLmTu1xwsEKe5cggRKWSfR-7S0l8BeE9X_x203KGWh-N4zCzgt5Q_kB9K75uiuNnLDDWon9kJno0iq';

const auth = async () => {
  await fetch(
    `https://api.vk.com/method/users.search?count=100&access_token=${TOKEN}&v=5.81`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'no-cors',
    },
  )
    .then((res) => {
      console.log(res);
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
