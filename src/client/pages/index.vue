<template>
  <section>
    <div>123</div>
    <a-button @click="addTest">createLetter</a-button>
  </section>
</template>

<style lang="less" scoped>
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getLetterList, getLetter, createLetter } from '../graphql/letter.graph'

@Component({
  components: {}
})
export default class extends Vue {
  public addTest() {
    this.$apollo
      .mutate({
        mutation: createLetter,
        variables: {
          content: '123',
          sendTime: '2019-11-01',
          receiverEmail: '2037630@163.com',
          receiverWeixin: ''
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  public mounted() {
    this.$apollo
      .query({
        query: getLetterList
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
