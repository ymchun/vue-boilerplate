type Nullable<T> = T | null

interface KeyMap<T> {
  [key: string]: T
}
