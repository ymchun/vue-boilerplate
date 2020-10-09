import { ActionContext } from 'vuex'

import { AppState } from '~/store/interfaces'
import mutationTypes from '~/store/mutation-types'

const actions = {
  setCounter(context: ActionContext<AppState, any>, payload: number) {
    context.commit(mutationTypes.APP_SET_COUNTER, payload)
  },
}

export type AppAction = typeof actions
export default actions
