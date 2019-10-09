<template>
  <nuxt></nuxt>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  clipped = false
  drawer = false
  fixed = false
  items = [
    {
      icon: 'apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'bubble_chart',
      title: 'Inspire',
      to: '/inspire'
    }
  ]
  miniVariant = false
  right = true
  rightDrawer = false
  title = 'Vuetify.js'
}
</script>

