import Vue from 'vue'
import Vuex from 'vuex'

import appModule from './modules/app'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    modules: {
      appModule,
    },
  })
}

const store = createStore()
export default store
