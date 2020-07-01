import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import store from './store/store';

Vue.use(VueRouter);

const routes = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      component: Stocks
    }
  ]
})

new Vue({
  el: '#app',
  router: routes,
  store,
  render: h => h(App)
})
