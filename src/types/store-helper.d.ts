declare module 'store-helper' {
  module 'vuex/types' {
    interface Store<S> {
      _actions: {
        [key: string]: () => any
      }
    }
  }
}

type ActionHelper<T> = {
  [K in keyof T]: T[K] extends (a: any, payload?: infer P) => infer R
  ? (payload?: P) => R
  : T[K] extends (a: any, payload: infer P) => infer R
  ? (payload: P) => R
  : T[K] extends (a: any) => infer R
  ? () => R
  : T[K]
}

type GetterHelper<T> = {
  [K in keyof T]: T[K] extends (...a: any[]) => infer R ? R : T[K]
}
