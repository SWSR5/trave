<template>
  <div>
    <router-link to="/">
      <div class="header-left iconfont" v-show="show">
        <span>&#xe606;</span>
      </div>
    </router-link>
    <div class="header iconfont" :style="styleopcity" v-show="!show">
      <router-link class="a" to="/">
        <span class="back">&#xe606;</span>
      </router-link>
      {{sightName}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  props: {
    sightName: String
  },
  data () {
    return {
      show: true,
      styleopcity: {
        opacity: 0
      }
    }
  },
  methods: {
    handscroll () {
      let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrolltop > 0) {
        this.show = false
        this.styleopcity.opacity = (scrolltop / 200) < 1 ? (scrolltop / 200) : 1
      } else {
        this.show = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handscroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handscroll)
  }
}
</script>

<style lang="stylus" scoped>
 @import '~@style/veriblel.styl'
 .header >>> .router-link-active
   color:#fff
  .header
    z-index: 2
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.86rem;
    text-align: center;
    line-height: 0.86rem;
    background: $bgcolor;
    font-size: 0.35rem;
    color: #fff;
    padding-right: 0.5rem;
    .back
      float: left;
      margin-left: 0.2rem;
  .header-left
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width:0.8rem;
    height: 0.8rem;
    background: rgba(0,0,0,0.5);
    border-radius: 0.4rem;
    line-height: 0.8rem;
    text-align: center;
    margin: 0.2rem;
    color: #fff;
    font-size: 0.4rem;
</style>
