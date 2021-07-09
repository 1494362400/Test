
//  1 没有得路由跳转到404页面
//  2 次页面是否需要登录
//  3 如果页面需要登录 并且没有登录的状态 返回登录页面


import Vue from 'vue'
import Router from 'vue-router'


import login from '../view/login'
import home from '../view/home'
import goods from '../view/goods'

Vue.use(Router)

//虚拟dom

export default new Router({
    // mode:'history',
    routes:[
        {
            path:'/login',
            name:'login',
            component:login,
            
        },
        {
            path:'/index',
            name:'index',
            component:home,
            meta:{ 
                login_require:true
            },
            beforeEnter: (to, from,next) => {
                console.log("to:",to)
                console.log("from",from)
                console.log("next:",next)
            }
        },
        {
            path:'/goods',
            name:'goods',
            component:goods,
            meta:{ 
                login_require:false
            }
        }
    ]
})



// Router.beforeEach((to, from) => {
//     console.log(to)
//     console.log(from)
// })