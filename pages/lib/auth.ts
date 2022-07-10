import cookie from 'js-cookie';
export const getToken = () => {
  return cookie.get('access_token');
};

export const setToken = token => {
  cookie.set('access_token', token, {
    expires: 30,
  });
};

export const removeToken = () => {
  cookie.remove('access_token');
};
