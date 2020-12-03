import Vue from 'vue'

import './plugins/vue-composition-api'

import App from './App.vue'
import i18n from './plugins/i18n'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App),
})
