import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false
import router from './router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


router.beforeEach(function (to, from,next) {
  console.log(to.meta)
  console.log(from.meta)
  if(to.meta.login_Required){
    console.log("a")
    if(to.meta.login_Required==from.meta.isLogin){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    console.log("b")
    next()
  }
  
});
