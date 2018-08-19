<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperlist"></home-swiper>
    <home-icons :list="iconlist"></home-icons>
    <home-recommend :list="recommendlist"></home-recommend>
    <home-weekend :list="weekendlist"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastcity: '',
      swiperlist: [],
      iconlist: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperlist = data.swiperList
        this.iconlist = data.iconList
        this.recommendlist = data.recommendList
        this.weekendlist = data.weekendList
      }
    }
  },
  mounted () {
    this.lastcity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style></style>
