<template>
  <div>
    <city-header></city-header>
    <city-serach :cities="cities"></city-serach>
    <city-list :hot="this.hotcitys" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handletter"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/header.vue'
import CitySerach from './components/serach.vue'
import CityList from './components/list.vue'
import CityAlphabet from './components/alphabet.vue'
export default {
  name: 'Citylist',
  components: {
    CityHeader: CityHeader,
    CitySerach: CitySerach,
    CityList: CityList,
    CityAlphabet: CityAlphabet
  },
  data () {
    return {
      hotcitys: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    GetcityInfo () {
      axios.get('/api/city.json')
        .then(this.GetcitySuccessInfo)
    },
    GetcitySuccessInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotcitys = res.data.hotCities
        this.cities = res.data.cities
      }
    },
    handletter (res) {
      this.letter = res
    }
  },
  mounted () {
    this.GetcityInfo()
  }
}
</script>

<style></style>
