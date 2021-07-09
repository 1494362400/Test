import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../view/login/login.vue'
import home from '../view/home/home.vue'
import goods from '../view/goods/goods.vue'
const router = new Router({
  routes: [
    {
      path: "/login",
      name: 'login',
      component: login,
      meta:{
        isLogin:false
      }
    },
    {
      path: "/home",
      name: 'home',
      component: home,
      meta: {
        login_Required: true
      }
    },
    {
      path: "/goods",
      name: 'goods',
      component: goods,
      meta: {
        login_Required: false
      }
    }
  ]

})


export default router
