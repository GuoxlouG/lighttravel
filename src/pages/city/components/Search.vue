<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'cityheader'
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
</style>
