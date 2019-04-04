<template>
  <v-layout
    class="public-page"
    align-center
    justify-space-between
    column
    fill-height
  >
    <v-flex xs2>
      <v-layout
        row
        align-center
      >
        <v-icon>send</v-icon>
      </v-layout>
    </v-flex>
    <v-flex xs10></v-flex>
  </v-layout>
</template>

<style lang="less" scoped>
.public-page {
  background-image: url('../assets/image/paper.jpg');
  background-size: auto 100%;
  background-repeat: repeat;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class extends Vue {}
</script>
