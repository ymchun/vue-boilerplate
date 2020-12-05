import Vue from 'vue'
import Vuex from 'vuex'

import newsModule from './modules/news'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    modules: {
      newsModule,
    },
  })
}

const store = createStore()
export default store
