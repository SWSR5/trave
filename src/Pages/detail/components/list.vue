<template>
  <div>
    <div class="item border-bottom" v-for="(item,index) of list" :key="index">
      <div>{{item.title}}</div>
      <div class="item-child" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    .item-child
      padding:0 0.2rem;
      font-size: 0.25rem;
</style>
