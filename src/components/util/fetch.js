import fetch from '@/static/js/fetch';

export default (api, options = {}) => {
  return fetch(api, options)
    .then((data) => {
      return Promise.resolve(data);
    }, (response) => {
      const { status, statusText } = response;
      console.log(`${statusText}, status:${status}`);   
      return Promise.reject(`${statusText}, status:${status}`);
    });
};
