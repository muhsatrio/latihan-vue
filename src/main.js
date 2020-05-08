import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// axios.defaults.baseURL = 'https://axios-latihan.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'asdasd';
// axios.defaults.headers.get['Accepts'] = 'application/json';

axios.interceptors.request.use(config => {
  // eslint-disable-next-line no-console
  console.log(config);
  return config;
})
axios.interceptors.response.use(res => {
  // eslint-disable-next-line no-console
  console.log(res);
  return res;
})

// const reqInterceptors = axios.interceptors.request.use(config => {
//   // eslint-disable-next-line no-console
//   console.log(config);
//   return config;
// })
// const resInterceptors = axios.interceptors.response.use(res => {
//   // eslint-disable-next-line no-console
//   console.log(res);
//   return res;
// })

// Remove Interceptors response and request

// axios.interceptors.request.eject(reqInterceptors);
// axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
