<template>
  <div>
    <div class="serach">
      <input class="serach_input" type="text" v-model="keyword" placeholder="请输入城市名称或拼音">
    </div>
    <div class="serach-conted" ref='search' v-show="keyword">
      <ul>
        <li class="seach-item" v-for="item of changelist" :key="item.id" @click="handclick(item.name)">{{item.name}}</li>
        <li class="seach-item" v-show="!changelist.length">没有查询到此项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySerach',
  props: {
    cities: Object
  },
  methods: {
    handclick (city) {
      this.$store.dispatch('changecity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {mouseWheel: true, click: true, tap: true})
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const list = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              list.push(value)
            }
          })
        }
        this.changelist = list
      }, 100)
    }
  },
  data () {
    return {
      keyword: '',
      timer: null,
      changelist: []
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@style/veriblel.styl'
  .serach
    height:0.72rem;
    padding: 0 0.1rem;
    background: $bgcolor;
    .serach_input
      height:0.62rem;
      box-sizing: border-box;
      padding: 0 0.1rem;
      width: 100%;
      border-radius: 0.06rem;
      text-align: center;
      color: #666;
  .serach-conted
    position: absolute;
    top: 1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 1;
    overflow: hidden;
    .seach-item
      height:0.7rem;
      line-height: 0.7rem;
      padding-left: 0.3rem;
      border-bottom: 0.01rem #eee solid;
      background:#fff;
</style>
