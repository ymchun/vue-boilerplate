import { AppAction } from '~/store/modules/app/actions'
import { AppGetter } from '~/store/modules/app/getters'

export interface StoreModule {
  actions: ActionHelper<AppAction>
  getters: GetterHelper<AppGetter>
}
