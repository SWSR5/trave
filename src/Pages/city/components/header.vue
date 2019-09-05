<template>
  <div class="header">
    <router-link to='/'>
      <div class="header-left iconfont">
        <span>&#xe606;</span>
      </div>
    </router-link>
    <div class="city_change">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@style/veriblel.styl'
    .city_change
      width:100%;
      height: 0.86rem;
      text-align: center;
      line-height: 0.86rem;
      background: $bgcolor;
      font-size: 0.35rem;
      color: #fff;
    .header-left
      float: left;
      color: #fff;
      line-height: 0.86rem;
</style>
