<template>
  <div class="container" @click="handleCloseG">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgs" :key="index">
        <img class="gallary-img" :src='item'/>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showgallary: Boolean,
    imgs: {
      type: Array,
      default () {
        return [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534763508733&di=d1c1d80637d3a848525a2612b9870820&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fln%2Fpics%2Fhv1%2F72%2F193%2F1835%2F119370162.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534853472308&di=031b4626de00947d9bdac3cc2b3a69f4&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F20211%2F20210891.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleCloseG () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      overflow: inherit
      height: 0
      width: 100%
      padding-bottom: 80%
      .gallary-img
        width: 100%
        min-height: 5.4rem
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
