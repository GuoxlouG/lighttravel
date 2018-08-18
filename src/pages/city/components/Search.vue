<template>
  <div>
    <div class="search">
      <input v-model="word" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div>
      <div class="search-content" :class="[activated]">
        <ul>
          <li class="city-item" v-for="item of list" :key="item.id">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data () {
    return {
      word: '',
      list: [],
      timer: null,
      activated: 'activated'
    }
  },
  watch: {
    word () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.word) > -1 || value.name.indexOf(this.word) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        this.activated = this.word === '' ? 'activated' : ''
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    line-height: .72rem
    padding: .08rem
    background: $bgColor
    .search-input
      width: 100%
      line-height: .58rem
      text-align: center
      border-radius: .05rem
      color: #ccc
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.8rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .city-item
      line-height: .76rem
      color: #7d7d7d
      background: #fff
      padding-left: .3rem
      border-bottom: .01rem solid #eaeaea
  .activated
    display: none
</style>
