<template>
  <div>
    <div class="header">
    <router-link to="./"><div class="iconfont icon-back">&#xe624;</div></router-link>
    城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityheader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .34rem
      .icon-back
        width: .64rem
        float: left
        font-size: .42rem
        color: #fff
</style>
