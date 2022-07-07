import axios from 'axios';
// eslint-disable-next-lin e import/named
import { APP_ID, REDIRECT_URI, VK_AUTH_URI } from '@/utils/consts';

// eslint-disable-next-line max-len
// const TOKEN = 'vk1.a.ejlwfjmUJU-ndJv0T4y1G-MOkmUR8Y9sRoanj4R-ad-y_3vHqV4U808nvvB6ihBlWAXOGOzMDnc-D8vEsZqEFaHc5_J2C287fbHtf-J3hRGaCP6u3iVLmTu1xwsEKe5cggRKWSfR-7S0l8BeE9X_x203KGWh-N4zCzgt5Q_kB9K75uiuNnLDDWon9kJno0iq';

/*
* 1. авторизоваться
* 2. если есть авторизация - получать пользователя
* 3. при выборе пользователя получать всех у кого он в друзьях
* */

// eslint-disable-next-line import/no-cycle
import store from '@/store';
// import { getData, storeData } from '@/utils/storage';
const path = `${VK_AUTH_URI}?`
  + `${APP_ID}&`
  + 'display=page&'
  + `${REDIRECT_URI}&`
  + '&response_type=token';

const auth = () => {
  axios.get(`${path}`)
    .then((res) => {
      console.log(res);
    });
  // storeData(userId, accessToken);
};

const searchUser = () => {
  const isAuthorization = store.getters.getAuthorizationStatus;
  if (!isAuthorization) {
    auth();
  }

  // поиск пользователя по id или имени
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
