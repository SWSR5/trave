<template>
  <div class="gallary" @click="handclickshow">
    <swiper class='swiper' :options="swiperOptions">
      <swiper-slide v-for="(item,index) of img" :key="index">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    img: Array,
    default () {
      return []
    }
  },
  methods: {
    handclickshow () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    overflow: inherit;
  .gallary
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000;
    .swiper
      width: 100%;
      height: 0;
      padding-bottom: 67%;
      .swiper-pagination
        color: #fff;
        bottom: -3rem;
      .swiper-img
        width: 100%
</style>
