import fetch from 'isomorphic-fetch';

export const listLogs = (skip, limit) => {
  const url = `http://api-dev.truneto.com/v1/log/?limit=${limit}&skip=${skip}`;

  return fetch(url, {
    method: 'GET',
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
