<template lang="pug">
.d-flex.flex-column.align-center
  v-data-table(
    disable-sort,
    hide-default-footer,
    :headers='state.headers',
    :items='state.news',
    :loading='isLoading'
  )
    template(v-slot:item.time='{ item }')
      span {{ item.time | dateTime }}
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from '@vue/composition-api'

import { useStoreHelper } from '~/compositions'
import dateTime from '~/filters/date-time'

export default defineComponent({
  name: 'hacker-news',
  filters: {
    dateTime,
  },
  setup(props, context) {
    const { store } = useStoreHelper()
    const isLoading = ref(false)

    const state = reactive({
      headers: computed(() => [
        { text: context.root.$i18n.t('hacker_news.time'), value: 'time' },
        { text: context.root.$i18n.t('hacker_news.by'), value: 'by' },
        { text: context.root.$i18n.t('hacker_news.title'), value: 'title' },
      ]),
      news: computed(() => store.getters.getNews),
    })

    onMounted(async () => {
      // set loading
      isLoading.value = true
      // fetch hacker news
      await store.actions.getTopNews()
      // unset loading
      isLoading.value = false
    })

    return {
      state,
      isLoading,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
