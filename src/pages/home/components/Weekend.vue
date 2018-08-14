<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必游TOP10',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
        title: '上海城市观光',
        desc: '来这里寻找你所认识的上海'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必游TOP10',
        desc: '来这里寻找你所认识的上海'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/style/mixins.styl'
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
