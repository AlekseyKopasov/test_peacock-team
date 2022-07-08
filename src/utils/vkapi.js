import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const BASE_URL_OAUTH = 'https://oauth.vk.com/';
const BASE_URL = 'https://api.vk.com/';
const VERSION = '5.21';
const FRIENDS_N = 5;

function getParamsObj(url) {
  const s = url.split('#');
  if (s.length < 2 || s[1] === '') return s[0];
  let params = s[1];
  params = params.split('&');
  const res = {};
  params.forEach((el) => {
    const val = el.split('=');
    if (val.length < 2) res[val[0]] = '';
    // eslint-disable-next-line prefer-destructuring
    else res[val[0]] = val[1];
  });
  return res;
}

function sendRequest(base, path, params) {
  const config = {
    adapter: jsonpAdapter,
    baseURL: base,
    headers: {
      // 'Accept': 'application/json'
      // 'Accept-Encoding': 'deflate, gzip'
    },
    params,
    // validateStatus: status => status == 200
  };
  return axios.get(path, config);
}

// eslint-disable-next-line camelcase
function getUrlAuth(client_id, redirect_uri) {
  // if (!redirect_uri) redirect_uri = 'http://localhost:3000/auth/'
  // eslint-disable-next-line camelcase
  if (!redirect_uri) redirect_uri = 'https://darchansuleimenov.github.io/nuxt-vk/auth/';
  const path = 'authorize?';
  // eslint-disable-next-line camelcase
  return `${BASE_URL_OAUTH + path}client_id=${client_id}` + '&scope=friends,offline'
    // eslint-disable-next-line camelcase,no-useless-concat
    + `&redirect_uri=${redirect_uri}` + '&display=page' + `&v=${VERSION}` + '&response_type=token';
}

// eslint-disable-next-line camelcase
async function getFriendsList(user_id, access_token) {
  try {
    const path = '/method/friends.get';
    const params = {
      user_id,
      access_token,
      v: VERSION,
    };
    const result = await sendRequest(BASE_URL, path, params);

    return result.data;
  } catch (err) {
    return null;
  }
}

// eslint-disable-next-line camelcase
async function getUsers(access_token, user_ids) {
  try {
    const path = '/method/users.get';
    const params = {
      user_ids,
      // sex, bdate, city, country, home_town, has_photo
      fields: 'photo_id,sex,bdate,country,city,has_photo',
      access_token,
      v: VERSION,
    };
    const result = await sendRequest(BASE_URL, path, params);

    return result.data;
  } catch (err) {
    return null;
  }
}

// eslint-disable-next-line camelcase
async function getPhotos(access_token, photo_ids) {
  try {
    const path = '/method/photos.getById';
    const params = {
      photos: photo_ids,
      access_token,
      v: '3.0', // удобная версия для фото
    };
    const result = await sendRequest(BASE_URL, path, params);

    return result.data;
  } catch (err) {
    return null;
  }
}

// eslint-disable-next-line camelcase
async function getFriends(user_id, access_token) {
  try {
    let result = await getFriendsList(user_id, access_token);
    result = result.response;

    // eslint-disable-next-line camelcase
    const user_ids = result.items.slice(0, FRIENDS_N);
    result = await getUsers(access_token, user_ids);
    result = result.response;

    // eslint-disable-next-line camelcase
    const photo_ids = result.map((el) => el.photo_id || '').filter((el) => el !== '');
    let photos = await getPhotos(access_token, photo_ids);
    photos = photos.response;
    result.forEach((el) => {
      // eslint-disable-next-line no-shadow
      const photo = photos.find((photo) => photo.owner_id === el.id);
      // eslint-disable-next-line no-param-reassign
      if (photo) el.photo_id = photo.src;
    });

    return result;
  } catch (err) {
    return null;
  }
}

export { getUrlAuth, getParamsObj, getFriends };
