<template lang="pug">
  div(class="hello")
    h1() {{ state.message }}
    v-btn(@click="count") count
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from '@vue/composition-api'

import { useStoreHelper } from '~/compositions'

export default defineComponent({
  name: 'hello-world',
  setup(props, context) {
    const { store } = useStoreHelper()
    const counter = ref(0)

    const state = reactive({
      message: computed(() => store.getters.getAppName),
    })

    const count = () => {
      counter.value += 1
      store.actions.setAppName(`test ${counter.value}`)
    }

    onMounted(() => {
      store.actions.setAppName(`test ${counter.value}`)
    })

    return {
      state,
      count,
    }
  },
})
</script>

<style lang="stylus" scoped></style>
