<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont icon-arrow">&#xe64a;</span></div>
  </div>
</template>

<script>

export default {
  name: 'homeheader'
}
</script>

<style lang="stylus" scoped>
   @import '~@/assets/style/varibles.styl'
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
       margin-left: .18rem
       padding-left: .2rem
       background: #fff
       border-radius: .1rem
       color: #ccc
     .header-right
       width: 1.25rem
       float: right
       text-align: center
       .icon-arrow
         font-size: .24rem
</style>
