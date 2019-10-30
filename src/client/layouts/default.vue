<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>
      <nuxt></nuxt>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

