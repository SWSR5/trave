<template>
  <div class="recomm">
    <div class="title">热门推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="item of recommlist" :key="item.id" :to="'/detail/' + item.id">
        <div class="recomm-img">
          <img :src="item.imgurl">
        </div>
        <div class="recomm-text">
          <p class="name">{{item.name}}</p>
          <P class="pingl">{{item.pingl}}</P>
          <p class="but">查看详情</p>
          <p class="good">{{item.good}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommed',
  props: {
    recommlist: Array
  },
  data () {
    return {
      // recommList: [
      //   {
      //     id: '001',
      //     imgurl: 'http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
      //     name: '银杏湖乐园',
      //     pingl: '2950条评论',
      //     but: 'http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
      //     good: '生态旅游，温泉度假，收获健康好心情'
      //   },
      //   {
      //     id: '002',
      //     imgurl: 'http://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_200x200_a1ff6094.jpg',
      //     name: '牛首山文化旅游区',
      //     pingl: '6123条评论',
      //     but: 'http://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_200x200_a1ff6094.jpg',
      //     good: '这里最近很火哦，好多人都在点评它呢！'
      //   },
      //   {
      //     id: '003',
      //     imgurl: 'http://img1.qunarzz.com/sight/p0/1703/6a/6ae455f41a6daab2a3.water.jpg_200x200_347a48dd.jpg',
      //     name: '老山国家森林公园',
      //     pingl: '226条评论',
      //     but: 'http://img1.qunarzz.com/sight/p0/1703/6a/6ae455f41a6daab2a3.water.jpg_200x200_347a48dd.jpg',
      //     good: '青山绿水怡人，曲径通幽访古'
      //   },
      //   {
      //     id: '004',
      //     imgurl: 'http://img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_200x200_72a1d26d.jpg',
      //     name: '红山森林动物园',
      //     pingl: '6984条评论',
      //     but: 'http://img1.qunarzz.com/sight/201312/03/38da27f8a2ad319ec8d65eac.jpg_200x200_72a1d26d.jpg',
      //     good: '近期小伙伴们收藏最！多！的景点😊'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.recomm
  margin-top:0.2rem;
  .title
    height:0.7rem;
    line-height: 0.7rem;
    background: #eee;
    padding-left: 0.3rem;
    font-size: 0.35rem;
  .item
    margin:0.2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.1rem;
    .recomm-img
      width:2rem;
      height: 2rem;
      float: left;
      margin-right: 0.2rem;
      img
        width: 100%;
    .recomm-text
      overflow:hidden;
      .name
        margin-top:0.26rem;
        height: 0.44rem;
        font-size: 0.32rem;
        line-height: 0.44rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      .pingl
        margin-top:0.14rem;
        height: 0.34rem;
        line-height: 0.34rem;
        font-size: 0.24rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      .but
        display:block;
        margin-top: 0.14rem;
        width: 1.3rem;
        height: 0.4rem;
        background: #FFA217;
        text-align: center;
        line-height: 0.4rem;
        border-radius: 0.05rem;
        font-size: 0.24rem;
        color: #fff;
      .good
        margin-top:0.48rem;
        height: 0.34rem;
        line-height: 0.34rem;
        font-size: 0.24rem;
        color:#f55;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
</style>
