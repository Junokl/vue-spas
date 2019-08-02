<template>
  <div id="app">
    <loading v-if="isloading" />
    <transition :name="transitionName" >
    	<router-view ></router-view>
    </transition>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div @click="gostores">去门店</div>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import loading from '../components/loading/isloading.vue';
  export default {
		name: 'app',
		data(){
			return {
				 transitionName: 'slide-left'
			}
		},
		components: {
			loading
    },
    methods: {
    gostores() {
      window.location = "http://localhost:8085/subpage.html";
      },
    },
		watch: {
			'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
				window.scrollTo(0,0);
			}
		},
		computed:{
			...mapState([
				'isloading'
			])
		},
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
