import { ActionContext } from 'vuex'

import { AppState } from '~/store/interfaces'
import mutationTypes from '~/store/mutation-types'

const actions = {
  setAppName(context: ActionContext<AppState, any>, payload: string) {
    context.commit(mutationTypes.APP_SET_APP_NAME, payload)
  },
}

export type AppAction = typeof actions
export default actions
