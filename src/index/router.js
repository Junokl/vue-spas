import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Mine from './views/Mine.vue'
import Cat from './views/Cat.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    }, //  碰到#/重定向到#/home
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    
    {
      path: '/Cat',
      name: 'Cat',
      component: Cat
    },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: Detail,
    // },
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: List,
    //   children: [{
    //       // 当 /user/:id/profile 匹配成功，
    //       // UserProfile 会被渲染在 User 的 <router-view> 中
    //       path: 'choiceness',
    //       name: 'choiceness',
    //       component: ListChannel
    //     },
    //     {
  
    //       path: 'doctor',
    //       name: 'doctor',
    //       component: ListChannel
    //     }
    //   ]
  
    // },
    
  ]
})
