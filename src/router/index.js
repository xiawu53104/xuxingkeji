import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/guide/index.vue'
import Guide from '../pages/login/index.vue'
import Display from '../pages/display/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/guide',
    component: Login
  },
  {
    path: '/login',
    component: Guide
  },
  {
    path: '/display',
    component: Display,
    children: [
      {
        path: 'emotion',
        meta: {
          navTitle: '情绪识别系统'
        },
        component: () => import(/* webpackChunkName: "emotion" */ '../pages/display/emotion/index.vue')
      },
      {
        path: 'equities',
        meta: {
          navTitle: '职工权益保障'
        },
        component: () => import(/* webpackChunkName: "equities" */ '../pages/display/equities/index.vue')
      },
      {
        path: 'service',
        meta: {
          navTitle: '职工服务应用'
        },
        component: () => import(/* webpackChunkName: "service" */ '../pages/display/service/index.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
