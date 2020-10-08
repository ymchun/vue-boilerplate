import Vue from 'vue'

import './plugins/vue-composition-api'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App),
})
