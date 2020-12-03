<template lang="pug">
.hello.d-flex.flex-column.align-center
  h1.my-12 {{ $t("count_msg", { num: state.counter }) }}
  v-btn.my-4(@click='count') {{ $t("count") }}
  v-btn.my-4(@click='switchLanguage') {{ $t("toggle_lang") }}
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api'

import { useI18nHelper, useStoreHelper } from '~/compositions'

export default defineComponent({
  name: 'hello-world',
  setup(props, context) {
    const { store } = useStoreHelper()
    const { switchLanguage } = useI18nHelper(context)

    const state = reactive({
      counter: computed(() => store.getters.getCounter),
    })

    const count = () => {
      store.actions.setCounter(state.counter + 1)
    }

    return {
      state,
      count,
      switchLanguage,
    }
  },
})
</script>

<style lang="stylus" scoped>
h1
  margin 10px 0px
</style>
