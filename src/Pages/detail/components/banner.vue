<template>
  <div>
    <div class="banner" @click="handclickshow" >
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num iconfont"><span class="tupian">&#xe623;</span> {{gallaryImgs.length}}</div>
      </div>
    </div>
    <gallary :img="gallaryImgs" v-show="show" @close="handclose"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
    list: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handclickshow () {
      this.show = true
    },
    handclose () {
      this.show = false
    }
  },
  components: {
    Gallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative;
    height: 0;
    padding-bottom: 55%;
    .banner-img
      width: 100%
    .banner-info
      position: absolute;
      box-sizing: border-box;
      padding: 0 0.6rem 0.3rem 0.2rem;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        float: left;
        font-size: 0.4rem;
      .banner-num
        float: right;
        width: 1.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background: rgba(0,0,0,0.5);
        border-radius: 0.2rem;
        font-size: 0.24rem;
        text-align: center;
        .tupian
          font-size: 0.35rem;
          // color: #000;
</style>
