<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityindex',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 0
    bottom: 0
    width: .3rem
    color: #ffaeb9
</style>
