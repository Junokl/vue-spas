<template>
		<section class="navbar-component">
			<div class="links">
				<a class="home" :class="{current:channel==0}" @click="publishHome" data-track="tab|idx"><span class="wrapper"><span
						 class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1.2rem;height: 1.2rem;" width="20" height="20" viewbox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
								<path d="M10.656.272a.926.926 0 0 0-1.311 0L.271 9.375a.93.93 0 0 0 .655 1.585h2.182l-.5-.5v8.612c0 .513.415.928.926.928h4.24a.927.927 0 0 0 .927-.928v-4.16c0-.002-.005.002.003.002h2.612c.002 0 .003.001.003-.001v4.16c0 .512.415.927.927.927h4.24a.927.927 0 0 0 .926-.928V10.46l-.5.5h2.16a.927.927 0 0 0 .928-.928.91.91 0 0 0-.31-.696L10.656.272z"
								 fill="#BD9D62" fill-rule="evenodd"></path>
							</svg></span>
						<!-- react-text: 3408 -->订单
						<!-- /react-text --></span></a>
				<a class="mine" @click="publishMine" :class="{current:channel==3}"><span class="wrapper"><span class="SVGInline icon">
							<svg class="SVGInline-svg icon-svg" style="width: 1.2rem;height: 1.2rem;" width="20" height="20" viewbox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
								<g fill="#666" fill-rule="evenodd">
									<path d="M19.862 19.387a10.002 10.002 0 0 0-19.724 0 .526.526 0 0 0 1.038.174 8.95 8.95 0 0 1 17.648 0 .526.526 0 0 0 1.038-.174z"></path>
									<path d="M10 10.526a4.737 4.737 0 1 0 0-9.473 4.737 4.737 0 0 0 0 9.473zm0 1.053A5.79 5.79 0 1 1 10 0a5.79 5.79 0 0 1 0 11.579z"></path>
								</g>
							</svg></span>
						<!-- react-text: 3420 -->我的
						<!-- /react-text --></span></a>
			</div>
		</section>
	
</template>
<script>
	export default {
		data() {
			return {
				channel: 0
			};
		},
		methods: {
			publishHome() {
				this.$router.push({
					name: 'home'
				});
			},
			publishCat(){
				this.$router.push({ name: 'Cat' });

			},
			publishOrder() {
				this.$router.push({
					name: 'all'
				});
			},
			publishMine() {
				this.$router.push({
					name: 'Mine'
				});
			},
			setChannel() {
			var route = this.$router.history.current.path;
			route = route.split('/');
			switch (route[1]) {
				case "home":
					this.channel = 0;
					break;
				case "Cat":
					this.channel = 1;
					break;
				case "orders":
					this.channel = 2;
					break;
				case "Mine":
					this.channel = 3;
					break;
				default:
					this.channel = 0;
			}
		}
		},
		
		mounted() {
			this.setChannel();

		},
		watch: {
			$route() {
				this.setChannel();
			}
		}

	}
</script>
<style scoped>
	.navbar-component {
		position: fixed;
		z-index: 1000;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_969c305f193c30fc101a863d675c0513.png) repeat-x left bottom;
			-webkit-background-size: auto 100%;
		background-size: auto 100%;
		padding: 0.4rem 0 0.2rem 0;
	}

	@media only screen and (min-width: 800px) {
		.navbar-component {
			max-width: 414px;
		}
	}

	.navbar-component .links {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		position: relative;
		bottom: 0;
		width: 100%;
	}

	.navbar-component .links > a {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		font-size: 0.55rem;
		color: #666;
	}

	.navbar-component .links > a span {
		display: block;
	}

	.navbar-component .links > a span.SVGInline {
		display: block !important;
		margin: 0 auto;
		text-align: center;
		margin-bottom: 0.2rem;
	}

	.navbar-component .links > a .wrapper {
		/* line-height: 1.5; */
		margin: auto;
	}

	.navbar-component .links > a .icon path {
		fill: #666;
	}

	.navbar-component .links > a.current {
		color: #c29f63;
	}

	.navbar-component .links > a.current .icon path {
		fill: #c29f63;
	}

	.navbar-component .links .icon {
		margin: auto;
	}

	.navbar-component .links .icon path {
		fill: #c29f63;
	}
</style>
