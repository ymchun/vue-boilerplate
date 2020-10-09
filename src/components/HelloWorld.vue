<template lang="pug">
  div(class="hello")
    h1() Clicked {{ state.counter }} times
    v-btn(@click="count") count
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api'

import { useStoreHelper } from '~/compositions'

export default defineComponent({
  name: 'hello-world',
  setup(props, context) {
    const { store } = useStoreHelper()

    const state = reactive({
      counter: computed(() => store.getters.getCounter),
    })

    const count = () => {
      store.actions.setCounter(state.counter + 1)
    }

    return {
      state,
      count,
    }
  },
})
</script>

<style lang="stylus" scoped>
h1
  margin 10px 0px
</style>
