<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotlist="hotCities" :citylist="cities" :index="index"></city-list>
    <city-index :cities="cities" @change="handleChange"></city-index>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityIndex from './components/Index'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityIndex
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      index: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleChange (index) {
      this.index = index
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
