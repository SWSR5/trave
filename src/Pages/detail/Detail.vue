<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="cont">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner: DetailBanner,
    DetailHeader: DetailHeader,
    DetailList: DetailList
  },
  methods: {
    Getdatainfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.Getdatasuccessinfo)
    },
    Getdatasuccessinfo (res) {
      res = res.data
      if (res.ret && res.data) {
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.gallaryImgs = res.data.gallaryImgs
        this.list = res.data.categoryList
      }
      console.log(res)
    }
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    this.Getdatainfo()
  }
}
</script>

<style>
  .cont{
    height: 50rem;
  }
</style>
