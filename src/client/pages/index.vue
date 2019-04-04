<template>
  <v-layout
    class="home-page pa-2 white--text"
    align-center
    justify-space-between
    column
    fill-height
  >
    <v-flex xs6>
      <v-layout
        row
        wrap
        align-center
        class="pa-3"
      >
        <v-flex
          xs10
          class="display-1"
        >写给未来的信</v-flex>
        <v-flex xs2>
          <span>
            <v-icon dark>info_outline</v-icon>
          </span>
        </v-flex>
        <v-flex
          xs12
          class="mt-1"
        >已经寄出1000封</v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs6>
      <v-layout
        fill-height
        row
        wrap
        justify-space-between
        align-content-end
        class="text-xs-center pb-3"
      >
        <v-flex
          xs3
          @click="$router.push('public')"
        >
          <v-icon
            dark
            class="d-block"
          >remove_red_eye</v-icon>
          <span class="d-block pa-2">公开信件</span>
        </v-flex>
        <v-flex
          xs3
          @click="$router.push('write')"
        >
          <v-icon
            dark
            class="d-block"
          >create</v-icon>
          <span class="d-block pa-2">撰写</span>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style lang="less" scoped>
.home-page {
  & > * {
    width: 100%;
  }
  background-image: url('../assets/image/background.jpg');
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>


<script lang="ts">
import Logo from '../components/Logo.vue'
import VuetifyLogo from '../components/VuetifyLogo.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Logo,
    VuetifyLogo
  }
})
export default class extends Vue {}
</script>
