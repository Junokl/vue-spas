import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Cat from './views/Cat.vue'
import Register from './views/Register.vue'
import login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/subpage.html',
      redirect: 'home'
    }, //  碰到#/重定向到#/home
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/subpage',
      beforeEnter(to,from,next){
        window.location = '/subpage.html'
      }
    },
    {
      path: '/index',
      beforeEnter(to,from,next){
        window.location = '/index.html'
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      // children: [{
      //         // 当 /user/:id/profile 匹配成功，
      //         // UserProfile 会被渲染在 User 的 <router-view> 中
      //         path: 'register',
      //         name: 'register',
      //         component: Register
      //       },
      //       // {
      
      //       //   path: 'doctor',
      //       //   name: 'doctor',
      //       //   component: ListChannel
      //       // }
      //     ]
    },
    
    {
      path: '/Cat',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: login
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
