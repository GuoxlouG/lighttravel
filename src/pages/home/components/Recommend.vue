<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-price">{{item.price}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'homerecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪斯尼乐园',
        price: '¥1起'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪斯尼乐园',
        price: '¥1起'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪斯尼乐园',
        price: '¥1起'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/mixins.styl'
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
</style>
