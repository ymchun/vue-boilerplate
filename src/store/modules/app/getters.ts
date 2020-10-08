import { AppState } from '~/store/interfaces'

const getters = {
  getAppName(state: AppState) {
    return state.appName
  },
}

export type AppGetter = typeof getters
export default getters
