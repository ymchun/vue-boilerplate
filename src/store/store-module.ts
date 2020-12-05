import { NewsAction } from '~/store/modules/news/actions'
import { NewsGetter } from '~/store/modules/news/getters'

export interface StoreModule {
  // use intersection types here, e.g. ActionHelper<aAction & bAction & cAction>
  actions: ActionHelper<NewsAction>
  getters: GetterHelper<NewsGetter>
}
