<template>
  <v-layout
    class="write-page"
    column
    fill-height
  >
    <v-layout
      class="button-container"
      row
      justify-end
      align-center
      px-3
    >
      <v-icon>send</v-icon>
    </v-layout>
    <div class="edit-container ma-3">
      <div
        class="edit-content fill-height body-2"
        contenteditable="true"
        placeholder="..."
      ></div>
    </div>
  </v-layout>
</template>

<style lang="less" scoped>
.write-page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url('../assets/image/paper.jpg');
  background-size: auto 100%;
  background-repeat: repeat;

  .button-container {
    flex: none;
    flex-basis: 40px;
  }
  .edit-container {
    flex: 1;
    overflow-y: scroll;
    .edit-content[placeholder]:empty:before {
      content: attr(placeholder);
      color: #555;
    }

    .edit-content[contenteditable]:focus {
      outline: 0px solid transparent;
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class extends Vue {}
</script>
