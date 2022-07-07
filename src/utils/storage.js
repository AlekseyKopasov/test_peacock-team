export const storeData = (userId, accessToken) => {
  localStorage.setItem('id', userId);
  localStorage.setItem('token', accessToken);
};

export const getData = () => {
  const result = {
    user_id: null,
    access_token: null,
  };
  result.user_id = localStorage.getItem('id');
  result.access_token = localStorage.getItem('token');
  return result;
};
