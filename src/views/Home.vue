<template lang="pug">
.d-flex.flex-column.align-center
  img(src='@/assets/logo.png')
  language-switcher
  hacker-news
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import HackerNews from '~/components/HackerNews.vue'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

export default defineComponent({
  name: 'home',
  components: {
    HackerNews,
    LanguageSwitcher,
  },
  setup(props, context) {},
})
</script>

<style lang="stylus" scoped></style>
