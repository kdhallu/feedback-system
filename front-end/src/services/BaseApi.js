import axios from 'axios';
import AppDispatcher from '../dispatchers/AppDispatcher';
import { API_BASE_URL } from '../config';

async function getRequestHeaders(contentType = 'application/json') {
  return {
    'Content-Type': contentType,
  };
}

const buildUrl = (endPoint) => {
  return `${API_BASE_URL}${endPoint}`;
};


const makeRequest = async ({method = 'get', url, successKey, failureKey, data, cb = () => {}}) => {
  const headers = await getRequestHeaders();
  axios({url, data, method, headers})
    .then((response) => {
      const payload = {actionType: successKey, response};
      setTimeout(() => AppDispatcher.handleServerAction(payload), 500) // loader kick in :);
      cb();
    }).catch((response) => {
    const payload = {actionType: failureKey, response};
    AppDispatcher.handleServerAction(payload);
  });
};

export {
  makeRequest,
  buildUrl,
}
