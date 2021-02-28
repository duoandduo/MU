import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [ 
      {
        path: 'shop', // 新闻详情
        name:'shop',
        component: () => import('@/views/Shop/shop'), 
        children: [
          {
            path: 'Home',
            component: () => import('@/views/Shop/comp/home'),
          },
        ]
      },
      {
        path: 'freeplay', // 新闻详情
        name:'freeplay',
        component: () => import('@/views/Freeplay/freeplay'), 
      },
      {
        path: 'my', // 我的面板
        redirect: '/my/Games',
        name:'my',
        component: () => import('@/views/My/my'), 
        children: [
          {
            path: 'Games',
            component: () => import('@/views/My/comp/MyGames'),
          },{
            path: 'Orders',
            component: () => import('@/views/My/comp/MyOrders'), 
          },{
            path: 'Wallet',
            component: () => import('@/views/My/comp/MyWallet'), 
          }
        ]
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
