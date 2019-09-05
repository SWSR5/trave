import Vue from 'vue'
import Router from 'vue-router'
import City from '@/Pages/city/City'
import Detail from '@/Pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hom',
      component: () => import('@/Pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
