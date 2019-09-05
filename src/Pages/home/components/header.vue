<template>
    <div class="header">
        <div class="header-left iconfont">
            <span>&#xe606;</span>
        </div>
        <input class="header-input iconfont" :placeholder="icon" />
        <router-link class='a' to='/city'>
            <div class="header-right iconfont">{{this.$store.state.city}}&#xe6aa;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
      icon: '\ue7b7 输入你要搜索的内容'
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@style/veriblel.styl'
    .header{
        position: relative
        height: .86rem;
        line-height: 0.86rem;
        background:$bgcolor;
        color: #fff;
    }
    .header-left{
        width: 0.64rem;
        float: left;
    }
    .header-input{
        width: 4rem;
        display:inline-block;
        border-radius: 0.1rem;
        height: .62rem;
        margin-top: 0.12rem;
        margin-left: .2rem;
        padding-left: .3rem;
        font-family:'iconfont';
    }
    ::-webkit-input-placeholder{
        color: #ccc;
    }
    .a
        position: absolute;
        right: 0.1rem;
        .header-right{
        float: right;
        min-width: 1.04rem;
        padding: 0 0.1rem;
        text-align: center;
        color: #fff;
    }
</style>
