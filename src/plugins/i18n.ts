import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '~/locales/en.json'
import zh_hk from '~/locales/zh-hk.json'

Vue.use(VueI18n)

const getLocale = () => {
  const paramMap = location.search
    .replace('?', '')
    .split('&')
    .map(search => search.split('='))
    .reduce(
      (mapping, [key, value]) => ({
        ...mapping,
        [key]: value,
      }),
      {} as KeyMap<string>,
    )
  return paramMap['lang'] || localStorage.getItem('locale') || undefined
}

export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: 'en',
  messages: {
    'zh-hk': zh_hk,
    en: en,
  },
})
