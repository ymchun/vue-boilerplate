import Vue from 'vue'

import { AppState } from '~/store/interfaces'
import mutationTypes from '~/store/mutation-types'

const mutations = {
  [mutationTypes.APP_SET_COUNTER](state: AppState, payload: number) {
    Vue.set(state, 'counter', payload)
  },
}

export type AppMutation = typeof mutations
export default mutations
