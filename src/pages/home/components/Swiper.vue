<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'homeswiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 2000,
        autoplay: 1500,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-container >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.75%
    background: #ccc
    .swiper-img
      width: 100%
</style>
