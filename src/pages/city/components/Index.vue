<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item" @click="handleIndexClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cityindex',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleIndexClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - this.startY) / 18)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 12)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
    .item
      height: .36rem
</style>
