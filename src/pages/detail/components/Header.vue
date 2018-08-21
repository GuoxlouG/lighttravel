<template>
  <div>
    <router-link tag="div" to="/" class="header-back"><span class="iconfont icon-back">&#xe624;</span></router-link>
    <div class="header" v-show="!showHeader">景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  data () {
    return {
      showHeader: true
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-back
    position: absolute
    left: .2rem
    top: .2rem
    width: .75rem
    border-radius: .1rem
    background: rgba(0, 0, 0, .4rem)
    line-height: .75rem
    text-align: center
    .icon-back
      color: #fff
      font-size:  .4rem
  .header
    position: fixed
    top: 0
    left: 0
    right: 0
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .34rem
    opacity: 0.86
    .header-fixed-back
        width: .64rem
        float: left
        font-size: .42rem
        color: #fff
</style>
