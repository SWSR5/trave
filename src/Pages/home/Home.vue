<template>
    <div>
        <home-header :city="this.city"></home-header>
        <home-swiper :swiperlist="this.swiperlist"></home-swiper>
        <icons :iconlist="iconList"></icons>
        <recommed :recommlist="recommlist"></recommed>
    </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import Icons from './components/icons.vue'
import Recommed from './components/recommde.vue'
import axios from 'axios'
export default {
  name: 'Homeqwe',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    Icons: Icons,
    Recommed: Recommed
  },
  data () {
    return {
      city: '',
      swiperlist: [],
      iconList: [],
      recommlist: [],
      lastcity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.getHomeInfoSucces)
    },
    getHomeInfoSucces (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperlist = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommlist = res.data.recommendList
      }
    }
  },
  mounted () {
    this.lastcity = this.$store.state.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastcity !== this.$store.state.city) {
      this.lastcity = this.$store.state.city
      this.getHomeInfo()
    }
  }
}
</script>

<style></style>
