<template>
  <div>
    <div class="banner" @click="handleGallary">
      <img class="banner-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534763508733&di=d1c1d80637d3a848525a2612b9870820&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fln%2Fpics%2Fhv1%2F72%2F193%2F1835%2F119370162.jpg" >
      <div class="banner-info">
        <div class="banner-title">
          颐和园(AAAAA级景区)
        </div>
        <div class="banner-number"><span class="iconfont icon-arrow">&#xe64b;</span>11
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showgallary" @close="handleClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'detail',
  data () {
    return {
      showgallary: false,
      imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534763508733&di=d1c1d80637d3a848525a2612b9870820&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fln%2Fpics%2Fhv1%2F72%2F193%2F1835%2F119370162.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534853472308&di=031b4626de00947d9bdac3cc2b3a69f4&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F20211%2F20210891.jpg']
    }
  },
  methods: {
    handleGallary () {
      this.showgallary = true
    },
    handleClose () {
      this.showgallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 60%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      font-size: .35rem
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
      .banner-title
        flex: 1
        padding-left: .2rem
      .banner-number
        font-size: .3rem
        padding: 0 .2rem
        border-radius: .18rem
        background: rgba(0, 0, 0, .4rem)
</style>
