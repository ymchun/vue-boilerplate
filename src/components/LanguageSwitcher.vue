<template lang="pug">
v-menu(offset-y)
  template(v-slot:activator='{ on, attrs }')
    v-btn(icon, v-bind='attrs', v-on='on')
      v-icon translate
  v-list
    v-list-item(v-for='(locale, name) in locales', :key='locale', @click='switchLanguage(locale)')
      v-list-item-title {{ name }}
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import { useI18nHelper } from '~/compositions'

export default defineComponent({
  name: 'language-switcher',
  setup(props, context) {
    const { switchLanguage } = useI18nHelper(context)
    const locales = ref({
      English: 'en',
      中文: 'zh-hk',
    })

    return {
      locales,
      switchLanguage,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
