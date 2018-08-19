<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont icon-arrow">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeheader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
   .header
     display: flex
     line-height: .86rem
     background: $bgColor
     color: #fff
     .header-left
       width: .64rem
       float: left
       text-align: center
       .icon-back
         font-size: .42rem
     .header-input
       flex: 1
       height: .64rem
       line-height:.64rem
       margin-top: .13rem
       margin-left: .08rem
       margin-right: .05rem
       padding-left: .2rem
       background: #fff
       border-radius: .1rem
       color: #ccc
     .header-right
       min-width: 1.25rem
       float: right
       text-align: center
       color: #fff
       .icon-arrow
         font-size: .24rem
</style>
