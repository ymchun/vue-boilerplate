import Vue from 'vue'

import { HackerNewsModel } from '~/api/interfaces/models'
import { NewsState } from '~/store/states'
import mutationTypes from '~/store/mutation-types'

const mutations = {
  [mutationTypes.NEWS_SET_NEWS](
    state: NewsState,
    payload: { entities: KeyMap<HackerNewsModel>; ids: number[] },
  ) {
    for (const entityId in payload.entities) {
      if (payload.entities.hasOwnProperty(entityId)) {
        Vue.set(state.entities, entityId, payload.entities[entityId])
      }
    }
    for (const id in payload.ids) {
      if (payload.ids.hasOwnProperty(id)) {
        const key = payload.ids[id]
        if (state.ids.indexOf(key) < 0) {
          state.ids.push(key)
        }
      }
    }
  },
}

export type NewsMutation = typeof mutations
export default mutations
