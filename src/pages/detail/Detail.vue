<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="con"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .con
    height: 16rem
</style>
