import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  keyName: 'head'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
