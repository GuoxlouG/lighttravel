<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' +item.id " class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">{{item.price}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
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
    padding-left: .15rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 2.2rem
    .item-img
      height: 1.8rem
      width: 1.8rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-price
        line-height: .7rem
        font-size: .33rem
        color: #ffa54f
      .item-button
        border-radius: .05rem
        padding: .05rem
        background: #ffe4e1
</style>
