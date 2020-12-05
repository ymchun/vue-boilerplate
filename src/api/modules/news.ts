import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { GetItemRequest } from '~/api/interfaces/params'
import { HackerNewsModel } from '~/api/interfaces/models'
import { defaultConfig } from '~/api/config'

export const news = {
  getTopStories: async (config?: AxiosRequestConfig): Promise<AxiosResponse<number[]>> => {
    return axios.get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json', {
      ...defaultConfig,
      ...config,
    })
  },
  getItem: async (
    params: GetItemRequest,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<HackerNewsModel>> => {
    return axios.get<HackerNewsModel>(
      `https://hacker-news.firebaseio.com/v0/item/${params.itemId}.json`,
      {
        ...defaultConfig,
        ...config,
      },
    )
  },
}
