<template>
	<!-- 登录 -->
		<section v-if="status=='register'" class="code-login-container">
			<div class="input-cont">
				<div class="title-wrap"><span class="subtitle">账号登录</span>
				<!-- <span class="jump-quick" data-track="quick-login">
					手机快捷登录
					<span class="SVGInline jump-right-arrow">
						<svg class="SVGInline-svg jump-right-arrow-svg"
						style="width: 1em;height: 1em;" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<defs></defs>
						<path d="M47.521 11.988l93.507 92.857v-9.69L47.52 188.012c-2.919 2.899-2.722 7.418.44 10.094 3.163 2.675 8.093 2.495 11.012-.404l93.506-92.857c2.755-2.736 2.755-6.954 0-9.69L58.973 2.298c-2.92-2.899-7.85-3.08-11.012-.404-3.162 2.676-3.359 7.195-.44 10.094z"
						fill="#272636"></path>
						</svg>
					</span>
					</span> -->
				</div>
				<div class="input-box">
					<div class="phone-input-component"><input type="tel" :value="phone" class="phone-input" tabindex="1" placeholder="手机号"></div>
				</div>
				<div class="pwd-container"><input type="password" class="pwd-input" :value="password" placeholder="密码" tabindex="2">
				</div>
			</div><button class="login-btn block-level" data-track="btn-login" @click="Tologin">登录</button>
			<div class="login-tips">
				<!-- <span class="sign-btn" @click="changLogin" data-track="register">注册账号</span> -->
				<span class="password-btn" @click="changLogin" data-track="register">忘记密码</span>
			</div>
		</section>
		<!-- 注册 -->
	
</template>

<script>
import axios from "axios";
	export default {
		props:["status"],
		data() {
			return {
				phone:'',
				password:'',
			};
		},
		methods:{
			changLogin(){
				this.$router.push({ name: 'login'});
			},
			Tologin(){
				axios
				.get("./home.json")
				.then(function(response) {
					console.log(response.data)
				})
				.catch(function(error) {
					console.log(error);
				});
			}
		}
	}
</script>

<style scoped>




/* === */
</style>
