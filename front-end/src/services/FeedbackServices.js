import {makeRequest, buildUrl} from './BaseApi';

export function getAllFeedbacks(successKey, failureKey, data) {
  const method = 'GET';
  const url = buildUrl('/feedback/');
  makeRequest({url, successKey, failureKey, data, method});
}

export function submitFeedback(successKey, failureKey, data, cb) {
  const method = 'POST';
  const url = buildUrl('/feedback/');
  makeRequest({url, successKey, failureKey, data, method, cb});
}

export function deleteFeedback(successKey, failureKey, data, cb) {
  const method = 'DELETE';
  const url = buildUrl('/feedback/' + data.id)
  makeRequest({url, successKey, failureKey, data, method, cb});
}

export function editFeedback(successKey, failureKey, data, cb) {
  const method = 'PUT';
  const url = buildUrl('/feedback/' + data.feedbackId);
  makeRequest({url, successKey, failureKey, data, method, cb});
}

