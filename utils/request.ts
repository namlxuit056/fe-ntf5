import { getToken } from '../lib/auth';
import { isEmpty } from 'lodash';

function parseJSON(response) {
  return new Promise((resolve, reject) => {
    response
      .json()
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        resolve(null);
      });
  });
}

export const request = ({ path, method = 'GET', data = {}, params = {} }) => {
  const url = new URL(`${process.env.END_POINT}${path}`);
  if (!isEmpty(params)) {
    Object.keys(params).forEach(key => {
      return url.searchParams.append(key, params[key]);
    });
  }

  return new Promise((resolve, reject) => {
    fetch(`${url}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: getToken() ? `Bearer ${getToken()}` : '',
        'Access-Control-Allow-Origin': '*',
      },
      ...(method !== 'GET' && { body: JSON.stringify(data) }),
    })
      .then(parseJSON)
      .then((res: any) => {
        if (!res?.statusCode || res?.statusCode === 200) {
          return resolve(res);
        }
        return reject(res.message);
      })
      .catch(error => reject(error.message));
  });
};
