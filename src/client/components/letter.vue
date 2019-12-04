<template>
  <section>
    <div class="letter-container">
      <div class="back-fold"></div>
      <div class="top-fold"></div>
      <div class="left-fold"></div>
      <div class="right-fold"></div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@color: #e95f55;

.letter-container {
  position: relative;
  margin: 10px;
  & > div {
    position: absolute;
    left: 0;
    right: 0;
    border-style: solid;
  }
}

.back-fold {
  top: 0;
  height: 100px;
  width: 200px;
  background: black;
}

.top-fold {
  top: 0;
  width: 0;
  height: 0;
  border-width: 50px 100px 0 100px;
  border-color: darken(@color, 6%) transparent transparent transparent;
}

.right-fold {
  width: 0;
  height: 0;
  border-width: 0 0 100px 200px;
  border-color: transparent transparent @color transparent;
}

.left-fold {
  width: 0;
  height: 0;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent darken(@color, 3%);
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>