import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Cat from './views/Cat.vue'
import Register from './views/Register.vue'
import login from './views/Login.vue'
import Ordermonth from './views/Ordermonth.vue'
import Listdetail from '../components/Order/Listdetail.vue'
import Maps from '../components/Map/Map.vue'
import workType from './views/workType.vue'
import user from './views/user.vue'
import mystore from './views/mystore.vue'
import staffWroking from './views/staffWroking.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: 'home'
    }, //  碰到#/重定向到#/home
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/subpage',
      beforeEnter(to, from, next) {
        window.location = '/subpage.html'
      }
    },
    {
      path: '/index',
      beforeEnter(to, from, next) {
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
    {
      path: '/Ordermonth',
      name: 'Ordermonth',
      component: Ordermonth
    },
    {
      path: '/Listdetail',
      name: 'Listdetail',
      component: Listdetail
    },
    {
      path: '/workType',
      name: 'workType',
      component: workType
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/mystore',
      name: 'mystore',
      component: mystore,
    },
    {
      path: '/staffWroking',
      name: 'staffWroking',
      component: staffWroking
    },
    {
      path: 'Maps',
      name: 'Maps',
      component: Maps
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
