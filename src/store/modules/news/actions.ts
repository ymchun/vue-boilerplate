import { ActionContext } from 'vuex'
import { normalize } from 'normalizr'

import { NewsSchema } from '~/store/schemas/news'
import { NewsState } from '~/store/states'
import api from '~/api'
import mutationTypes from '~/store/mutation-types'

const actions = {
  async getTopNews(context: ActionContext<NewsState, any>) {
    const topStoriesReply = await api.news.getTopStories()

    if (topStoriesReply.data?.length > 0) {
      const top10 = topStoriesReply.data.slice(0, 10)
      const itemReplies = await Promise.all(
        top10.map(itemId =>
          api.news.getItem({
            itemId: itemId,
          }),
        ),
      )
      const news = itemReplies.map(reply => reply.data)
      const normalized = normalize(news, [NewsSchema])

      context.commit(mutationTypes.NEWS_SET_NEWS, {
        entities: normalized.entities.news,
        ids: normalized.result,
      })
      return news
    }
    return []
  },
}

export type NewsAction = typeof actions
export default actions
