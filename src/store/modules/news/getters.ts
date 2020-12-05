import { NewsState } from '~/store/states'

const getters = {
  getNews(state: NewsState) {
    return state.ids.map(id => state.entities[id])
  },
}

export type NewsGetter = typeof getters
export default getters
