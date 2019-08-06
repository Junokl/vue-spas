import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from '@/store'
import Axios from 'axios';

// import {Calendar} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// // Vue.component(Calendar.name, Calendar);
// Vue.use(Calendar);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import Mint from 'mint-ui';
Vue.use(Mint);

import MintUI from 'mint-ui'
Vue.use(MintUI)


import {
	InfiniteScroll
} from 'mint-ui';

Vue.use(InfiniteScroll);

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	// 状态
	state: {
		nav: 0,
		subscribe: true,
		siteshow: true,
		DetailChannel: [],
		arr: [],
		isloading: true,
		isShowMu: true,
	},
	// 修改状态
	mutations: {
		editNav(state, data) {
			state.nav = data
		},
		editisloading(state, data) {
			state.isloading = data
		},
		editiShowMu(state, data) {
			state.isShowMu = data
		}


	},
	// actions  一般配合 事件@xxx 触发
	actions: {
		setNav(context, data) {
			context.commit('editNav', data);
		},
		setloading(context, data) {
			context.commit('editisloading', data);
		},

	},
	// 组件从store(中介)手上拿数据  配个 computed
	getters: {
		getisloading: state => {
			return state.isloading
		},
		getShowMu: state => {
			return state.isShowMu
		}

	}
})
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	store.dispatch("setloading", true);
	next()
})
router.afterEach((to, from) => {
	// setTimeout(function(){
	store.dispatch("setloading", false);
	// },500)

})

// ===
Axios.interceptors.request.use((config) => {
	console.log('加载中')
	Mint.Indicator.open({ //打开loading
		text: '加载中...',
		spinnerType: 'fading-circle'
	});
	return config;
}, (err) => {
	return Promise.reject(err)

})
// ====
Axios.interceptors.response.use((response) => {
	console.log('关闭')
	Mint.Indicator.close(); //关闭loading
	return response;
}, (err) => {
	return Promise.reject(err);

})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
