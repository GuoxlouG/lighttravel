<template>
  <div class="list" ref="scroll">
    <div>
      <div class="container">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-container">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-container" v-for="item of hotlist" :key="item.id" @click="handleCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="container" v-for="(item,key) of citylist" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="cityitem of item" :key="cityitem.id" @click="handleCity(cityitem.name)">{{cityitem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'citylist',
  props: {
    hotlist: Array,
    citylist: Object,
    index: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  watch: {
    index () {
      if (this.index) {
        const ele = this.$refs[this.index][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    overflow: hidden
    position: absolute
    top: 1.76rem
    right: 0
    bottom: 0
    left: 0
    .title
      line-height: .5rem
      background: #eaeaea
      color: #7d7d7d
      padding-left: .3rem
    .button-list
      overflow: hidden
      .button-container
        float: left
        width: 33.333%
        .button
          text-align: center
          border: .01rem solid #eaeaea
          padding: .28rem
          color: #4d4d4d
    .item-list
      .item
        line-height: .76rem
        color: #4d4d4d
        padding-left: .3rem
        border-bottom: .01rem solid #eaeaea
</style>
