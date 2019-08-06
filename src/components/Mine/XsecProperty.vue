<template>
	<section class="sec-property">
		<div class="list-item">
			<li class="tips">
				<div class="tipsleft">1</div>
				<div class="tipsright">
					<div>客户电话</div>
					<div>400-888888</div>
				</div>
			</li>
			<li class="tips">
				<div class="tipsleft">2</div>
				<div class="tipsright">
					<div>客户官网</div>
					<div>www.gxxc.com</div>
				</div>
			</li>
		</div>
	</section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
	.tips{
		width: 40%;
		height: 3rem;
		line-height: 3rem;
		float: left;
		display: flex;

	}
	.tipsleft{
		flex: 1;
	}
	.tipsright{
		flex: 2;
		line-height: 1.5rem;
	}
</style>
