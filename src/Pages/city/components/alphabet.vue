<template>
  <div class='list'>
    <div
    class="item"
    v-for="item of letter"
    :key="item"
    :ref="item"
    @click="handclick"
    @touchstart.prevent="handtouchstart"
    @touchmove="handtouchmove"
    @touchend="handtouchend"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.starty = this.$refs['A'][0].offsetTop
  },
  data () {
    return {
      flag: false,
      starty: 0,
      timer: null
    }
  },
  methods: {
    handclick (e) {
      this.$emit('change', e.target.innerText)
    },
    handtouchstart () {
      this.flag = true
    },
    handtouchmove (e) {
      if (this.flag) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchy = e.touches[0].clientY - 79
          const endy = Math.floor((touchy - this.starty) / 17.5)
          const finsh = this.letter[endy]
          if (endy >= 0 && endy < this.letter.length) {
            this.$emit('change', finsh)
          }
        }, 16)
      }
    },
    handtouchend () {
      this.flag = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@style/veriblel.styl'
  .list
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0.15rem;
    text-align: center;
    .item
      height: 0.35rem;
      color: $bgcolor;
</style>
