import axios from 'axios';
// const API_KEY = 'ttbdudgh46512353001';

// const api = axios.create({
//   baseURL: 'https://port-0-bookj-backend-rm6l2llwasdocy.sel5.cloudtype.app/',
//   params: {
//     TTBKey: API_KEY,
//     output: 'js',
//     Version: '20131101',
//     Cover: 'Big'
//   },
//   withCredentials: true
// });

// export default api;

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'http://www.aladin.co.kr/ttb/api';
console.log(API_KEY);
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    TTBKey: API_KEY,
    output: 'js',
    Version: '20131101',
    Cover: 'Big'
  }
});

export default api;
