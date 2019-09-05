<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperlist.length!=0">
      <swiper-slide v-for='item of swiperlist' :key="item.id" >
        <img class="swiper-img" :src="item.imgurl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperlist: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOninteraction: true
        },
        loop: true
      }
      // swipeList: [
      //   {
      //     id: '001',
      //     imgurl: require('../../../../src/assets/images/20190514_qunar_dujia_homepage_3.jpg')
      //   },
      //   {
      //     id: '002',
      //     imgurl: require('../../../../src/assets/images/20190517_qunar_dujia_homepage_top_banner_1.jpg')
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #ccc;
  }
  .wrapper
    width:100%;
    height: 0;
    padding-bottom: 31.25%;
    overflow: hidden;
    background: #ccc;
    .swiper-img
      width:100%;
</style>
