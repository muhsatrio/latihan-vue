import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el) {
    el.style.backgroundColor = 'red'
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
