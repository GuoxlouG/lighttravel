<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-container">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'homerecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    padding-left: .05rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-container
    overflow: hidden
    height: 0
    padding-bottom: 35%
    .item-img
      width: 100%
  .item-info
    flex: 1
    padding: .2rem
    min-width: 0
    .item-title
      line-height: .68rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .3rem
      color: #aaa
</style>
