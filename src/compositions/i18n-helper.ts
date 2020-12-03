import { SetupContext } from '@vue/composition-api'

export const useI18nHelper = (context: SetupContext) => {
  return {
    switchLanguage: () => {
      const length = context.root.$i18n.availableLocales.length
      const index = context.root.$i18n.availableLocales.indexOf(context.root.$i18n.locale)
      const lang = context.root.$i18n.availableLocales[(index + 1) % length]

      localStorage.setItem('locale', lang)
      context.root.$i18n.locale = lang
      context.root.$router.push({
        query: {
          lang: lang,
        },
      })
    },
  }
}
