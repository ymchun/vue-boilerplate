import { AppState } from '~/store/interfaces'

const getters = {
  getCounter(state: AppState) {
    return state.counter
  },
}

export type AppGetter = typeof getters
export default getters
