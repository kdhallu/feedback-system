import {makeRequest, buildUrl} from './BaseApi';

export function getAllEmployees(successKey, failureKey, data) {
  const method = 'GET';
  const url = buildUrl('/employees/');
  makeRequest({url, successKey, failureKey, data, method});
}

export function createNewEmployee(successKey, failureKey, data, cb) {
  const method = 'POST';
  const url = buildUrl('/employees/');
  makeRequest({url, successKey, failureKey, data, method, cb});
}

export function deleteEmployee(successKey, failureKey, data, cb) {
  const method = 'DELETE';
  const url = buildUrl('/employees/' + data.id);
  makeRequest({url, successKey, failureKey, method, cb});
}

export function editEmployee(successKey, failureKey, data, cb) {
  const method = 'PUT';
  const url = buildUrl('/employees/' + data.id);
  makeRequest({url, successKey, failureKey, data, method, cb});
}
