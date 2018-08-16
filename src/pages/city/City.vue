<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-index></city-index>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityIndex from './components/Index'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityIndex
  }
}
</script>

<style lang="stylus" scoped>

</style>
