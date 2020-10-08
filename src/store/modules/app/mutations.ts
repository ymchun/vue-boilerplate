import Vue from 'vue'

import { AppState } from '~/store/interfaces'
import mutationTypes from '~/store/mutation-types'

const mutations = {
  [mutationTypes.APP_SET_APP_NAME](state: AppState, payload: string) {
    Vue.set(state, 'appName', payload)
  },
}

export type AppMutation = typeof mutations
export default mutations
