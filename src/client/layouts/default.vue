<template>
  <v-app>
    <v-content>
      <v-container
        class="pa-0"
        fluid
        fill-height
      >
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
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

