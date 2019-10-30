<template>
  <div>123</div>
</template>

<style lang="less" scoped>
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getLetterList, getLetter } from '../graphql/letter.graph'

@Component({
  components: {}
})
export default class extends Vue {
  public mounted() {
    this.$apollo
      .query({
        query: getLetter,
        variables: {
          id: 4
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
