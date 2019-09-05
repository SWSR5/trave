<template>
    <div class="icons">
      <swiper>
        <swiper-slide v-for='(page,index) of pages' :key='index'>
          <div class="icon" v-for='item of page' :key='item.id'>
            <div class="icon-img">
              <img class="icon-img-con" :src="item.imgurl">
            </div>
            <p class="icon-text">{{item.title}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    iconlist: Array
  },
  data: function () {
    return {
      // iconList: [
      //   {
      //     id: '001',
      //     imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //     title: '景点门票'
      //   },
      //   {
      //     id: '002',
      //     imgurl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //     title: '一日游'
      //   },
      //   {
      //     id: '003',
      //     imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
      //     title: '文化古迹'
      //   },
      //   {
      //     id: '004',
      //     imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
      //     title: '牛首山'
      //   },
      //   {
      //     id: '005',
      //     imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
      //     title: '红山森林动物园'
      //   },
      //   {
      //     id: '006',
      //     imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
      //     title: '中山陵'
      //   },
      //   {
      //     id: '007',
      //     imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png',
      //     title: '总统府'
      //   },
      //   {
      //     id: '008',
      //     imgurl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
      //     title: '银杏湖公园'
      //   },
      //   {
      //     id: '009',
      //     imgurl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png',
      //     title: '总统府'
      //   }
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>
  .icons
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    .icon
      float:left;
      position: relative;
      width:25%;
      height: 0;
      padding-bottom: 25%;
      text-align: center;
      .icon-img
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding-top: 0.1rem;
        .icon-img-con
          display: block;
          margin: 0 auto;
          height: 100%;
      .icon-text
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        color: #333;
        font-size: 0.32rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
</style>
