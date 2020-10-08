import { useStore } from '@u3u/vue-hooks'

import { StoreModule } from '~/store/store-module'

export const useStoreHelper = () => {
  const store = useStore()
  const storeModule: any = {}

  if (store.value) {
    storeModule.getters = store.value.getters
    storeModule.actions = Object.keys(store.value._actions).reduce(
      (myActions, key) => ({
        ...myActions,
        [key]: (...args: any[]) => store.value.dispatch(key, ...args),
      }),
      {},
    )
  }

  return {
    store: storeModule as StoreModule,
  }
}
