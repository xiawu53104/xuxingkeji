import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/guide/index.vue'
import Guide from '../pages/login/index.vue'
import Display from '../pages/display/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide',
  },
  {
    path: '/guide',
    component: Login,
    meta: {
      title: '引导',
      authorization: true,
    },
  },
  {
    path: '/login',
    component: Guide,
    meta: {
      title: '登录',
      authorization: false,
    },
  },
  {
    path: '/display',
    component: Display,
    meta: {
      authorization: true,
    },
    children: [
      {
        path: 'emotion',
        meta: {
          title: '情绪识别系统',
          authorization: true,
        },
        component: () => import(/* webpackChunkName: "emotion" */ '../pages/display/emotion/index.vue')
      },
      {
        path: 'equities',
        meta: {
          title: '职工权益保障',
          authorization: true,
        },
        component: () => import(/* webpackChunkName: "equities" */ '../pages/display/equities/index.vue')
      },
      {
        path: 'service',
        meta: {
          title: '职工服务应用',
          authorization: true,
        },
        component: () => import(/* webpackChunkName: "service" */ '../pages/display/service/index.vue')
      },
    ]
  },
  {
    path: '/forum',
    meta: {
      title: '职工论坛',
      authorization: true,
    },
    component: () => import(/* webpackChunkName: "forum" */ '../pages/forum/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || 'xuxingkeji'
  }
  const isLogin = window.sessionStorage.getItem('isLogin')
  if (isLogin || !to.meta.authorization) {
    next()
  } else {
    next('/login')
  }
})

export default router
