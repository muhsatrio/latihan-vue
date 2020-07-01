import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log('global beforeEach');
  next();
  // to and from are both route objects. must call `next`.
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
