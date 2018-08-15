<template>
  <div class="icons-container">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-title">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'homeicons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }

  }
}

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons-container >>> .swiper-container
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 50%
  .icons-container
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: .44rem
        padding-top: .08rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-title
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        color: $blackTextColor
        ellipsis()
</style>
