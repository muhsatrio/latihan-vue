import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = "https://latihan-921e1.firebaseio.com"; 
Vue.http.interceptors.push((request, next) => {
  // eslint-disable-next-line no-console
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  // next();
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
