<template>
  <div class="list" ref="scroll">
    <div>
      <div class="container">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-container">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-container">
            <div class="button">北京</div>
          </div>
          <div class="button-container">
            <div class="button">北京</div>
          </div>
          <div class="button-container">
            <div class="button">北京</div>
          </div>
          <div class="button-container">
            <div class="button">北京</div>
          </div>
          <div class="button-container">
            <div class="button">北京</div>
          </div>
          <div class="button-container">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
        </div>
      </div>

      <div class="container">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
        </div>
      </div>

      <div class="container">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
          <div class="item">淡淡的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citylist',
  mounted () {
    this.scroll = new Bscroll(this.$refs.scroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    overflow: hidden
    position: absolute
    top: 1.76rem
    right: 0
    bottom: 0
    left: 0
    .title
      line-height: .5rem
      background: #eaeaea
      color: #7d7d7d
      padding-left: .3rem
    .button-list
      overflow: hidden
      .button-container
        float: left
        width: 33.33%
        .button
          text-align: center
          border: .01rem solid #eaeaea
          padding: .18rem
    .item-list
      .item
        line-height: .76rem
        color: #7d7d7d
        padding-left: .3rem
        border-bottom: .01rem solid #eaeaea
</style>
