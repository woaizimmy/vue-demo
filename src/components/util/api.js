import fetch from 'comp/util/fetch';
import { apiHost, getBaseUrl } from 'comp/util/constants';

console.log('apiHost', apiHost);
console.log('baseUrl', getBaseUrl());
const baseUrl = getBaseUrl();

const api = {
  // 接口名称都是后台提供
  myApp: `${baseUrl}/app/myApp`,
  editSave: `${baseUrl}/edit/save`,
  login: `${baseUrl}/login`,
};

async function myApp() {
  const res = fetch(api.myApp, {
    method: 'get',
    body: {}
  });
  return res;
}

async function editSave(params) {
  const res = fetch(api.editSave, {
    method: 'psot',
    body: params
  });
  return res;
}

async function login(params) {
  const res = fetch(api.login, {
    method: 'psot',
    body: params
  });
  return res;
}

export { api, myApp, editSave, login };
