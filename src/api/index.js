// import axios from 'axios';
// eslint-disable-next-lin e import/named
// import { APP_ID, REDIRECT_URI, VK_AUTH_URI } from '@/utils/consts';

// eslint-disable-next-line max-len
// const TOKEN =
/*
* 1. авторизоваться
* 2. если есть авторизация - получать пользователя
* 3. при выборе пользователя получать всех у кого он в друзьях
* */

// eslint-disable-next-line import/no-cycle
import store from '@/store';
// import { getData, storeData } from '@/utils/storage';

// const path = `${VK_AUTH_URI}?`
//   + `${APP_ID}&`
//   + 'display=page&'
//   + `${REDIRECT_URI}&`
//   + 'response_type=token';

// const PATH = 'https://oauth.vk.com/authorize?client_id=8210774&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.131&state=123456';

const auth = () => {
  // storeData(userId, accessToken);
};

const searchUser = () => {
  const isAuthorization = store.getters.getAuthorizationStatus;
  if (!isAuthorization) {
    auth();
  }
  // поиск пользователя по id или имени
};

export default searchUser;
