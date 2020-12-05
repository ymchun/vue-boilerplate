import { AxiosRequestConfig } from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

export const defaultConfig: AxiosRequestConfig = {
  responseType: 'json',
  timeout: 5000,
  transformRequest: (data: any) => decamelizeKeys(data),
  transformResponse: (data: any) => camelizeKeys(data),
}
