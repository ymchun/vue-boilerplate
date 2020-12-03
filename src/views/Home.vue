<template lang="pug">
div
  img(src='@/assets/logo.png')
  hello-world
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import HelloWorld from '~/components/HelloWorld.vue'

export default defineComponent({
  name: 'home',
  components: {
    HelloWorld,
  },
  setup(props, context) {},
})
</script>
