import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    // eslint-disable-next-line no-console
    console.log('Global Mixins created');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
