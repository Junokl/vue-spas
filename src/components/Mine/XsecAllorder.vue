<template>
	<section class="sec-all-order">
		<a href="/#/orders" class="title">
			我的订单
			<span class="right">
				<span>查看全部</span>
				<span class="SVGInline"><svg class="SVGInline-svg" style="width: 0.6rem;height: 0.6rem;"
					 viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
						 fill="#999" fill-rule="evenodd"></path>
					</svg>
				</span>
			</span>
		</a>
		<a href="/#/orders" class="title">
			0.00
		</a>
		<ul href="/#/orders" class="title">
			<li class="fl">本月销售额</li>
			<li class="fl" @click="toOrderMonth" data-track="Ordermonth">本月订单</li>
			<li class="fl">余额</li>
			<li class="fl">今日客户</li>
		</ul>
		<ul href="/#/orders" class="title">
			<li class="fl">0.00</li>
			<li class="fl">0</li>
			<li class="fl">0.00</li>
			<li class="fl">0</li>
		</ul>
	</section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
	  toOrderMonth(){
		  this.$router.push({ name: 'Ordermonth'});
	  }
  },
};
</script>

<style scoped>
/* @import url("../assets/sec.css"); */
</style>
