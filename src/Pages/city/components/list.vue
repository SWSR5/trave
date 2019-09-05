<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
        <div class="title">当前城市11</div>
        <div class="button_list">
          <div class="button_wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button_list">
          <div class="button_wrapper" v-for="item of hot" :key="item.id" @click="handclick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item_list">
          <div class="item border-bottom" v-for="inneritem of item" :key="inneritem.id" @click="handclick(inneritem.name)">{{inneritem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handclick (city) {
      this.$store.dispatch('changecity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {mouseWheel: true, click: true, tap: true})
  }
}
</script>

<style lang="stylus" scoped>
.list
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .title
    height: 0.76rem;
    line-height: 0.76rem;
    background: #F5F5F5;
    padding-left: 0.25rem;
  .button_list
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button_wrapper
      width: 33.3%;
      height: 0.55rem;
      float: left;
      box-sizing: border-box;
      padding: 0 0.1rem;
      margin: 0.1rem 0;
      .button
        height:0.5rem;
        line-height: 0.5rem;
        text-align: center;
        border: 0.02rem #DDDDDD solid;
  .item_list
    .item
      height: 0.76rem;
      line-height: 0.76rem;
      padding: 0 0.25rem;
    .border-bottom
      &:before
        border-color: #ccc;
</style>
