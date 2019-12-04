<template>
  <section>
    <div class="letter-list-container">
      <letter class="letter-item" :style="letterStyle" v-for="item of letterList" :key="item.id"></letter>
    </div>
  </section>
</template>

<style lang="less" scoped>
.letter-item {
  position: absolute;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getLetterList, getLetter, createLetter } from '../graphql/letter.graph'
import Letter from '../components/letter.vue'
@Component({
  components: {
    Letter
  }
})
export default class extends Vue {
  public letterList: any[] = []

  public mounted() {
    this.getLetterList()
  }

  get letterStyle() {
    return {
      top: this.getRandomNumber(100, 400),
      left: this.getRandomNumber(100, 400)
    }
  }

  getRandomNumber(min, max) {
    return Math.max(min, Math.floor(Math.random() * max))
  }

  public getLetterList() {
    this.$apollo
      .query({
        query: getLetterList
      })
      .then(({ data }) => {
        this.letterList = data.letters
      })
  }

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
}
</script>
