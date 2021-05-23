import {makeRequest, buildUrl} from './BaseApi';

export function getAllFeedbacks(successKey, failureKey, data) {
  const method = 'GET';
  const url = buildUrl('/feedback/');
  makeRequest({url, successKey, failureKey, data, method});
}

export function submitFeedback(successKey, failureKey, data) {
  const method = 'POST';
  const url = buildUrl('/feedback/');
  makeRequest({url, successKey, failureKey, data, method});
}

export function deleteFeedback(successKey, failureKey, data) {
  const method = 'DELETE';
  const url = buildUrl('/feedback/' + data.id);
  makeRequest({url, successKey, failureKey, data, method});
}

export function editFeedback(successKey, failureKey, data) {
  const method = 'PUT';
  const url = buildUrl('/feedback/' + data.id);
  makeRequest({url, successKey, failureKey, data, method});
}

