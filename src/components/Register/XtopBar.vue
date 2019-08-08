<template>
	<div>
		<header v-if="status=='register'||status=='login'||status=='Ordermonth'||status=='Listdetail'||status=='workType'||status=='user'||status=='mystore'||status=='staffWroking'||status=='Map'" class="inverted bar" style="position: relative;"><button @click="back"><span
				 class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg"
					 fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
						<path d="M9.157.136l-9 8.5a.501.501 0 0 0 0 .728l9 8.5a.5.5 0 0 0 .686-.728L1.222 8.994 9.843.864a.5.5 0 0 0-.686-.728z"
						 fill="#bd9d62"></path>
					</svg></span></button>
			<h1 v-if="status=='register'">登录</h1>
			<h1 v-else-if="status=='login'">忘记密码</h1>
			<h1 v-else-if="status=='Ordermonth'">全部订单</h1>
			<h1 v-else-if="status=='Listdetail'">订单详情</h1>
			<h1 v-else-if="status=='workType'">工种设置</h1>
      <h1 v-else-if="status=='user'">客户管理</h1>
      <h1 v-else-if="status=='mystore'">店铺设置</h1>
      <h1 v-else-if="status=='Map'">上传地址</h1>
      <h1 v-else-if="status=='staffWroking'">在上班的员工</h1>
			<img v-if="status=='Ordermonth'" src="../../assets/images/logo.png" @click="toggleCalendar" class="images">
      <div v-if="status=='mystore'" class="right">编辑</div>
		</header>
		<el-calendar v-if="status=='Ordermonth'"  @date-change="change"
      @click="pick"
      :render-content="renderContent"  v-model="value" v-show="calendars">
    </el-calendar>
	</div>

</template>

<script>
export default {
  props: ["status"],

  data() {
    return {
      value: new Date(),
      calendars: false
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.history.go(-1);
    },
    toggleCalendar() {
      this.calendars = !this.calendars;
    },
    pick(data, event, row, dome) {
      console.log(data, event, row, dome);
    },
    change() {
      this.dayStart = "";
      this.startTime = 0;
      this.dayEnd = "";
      this.endTime = 0;
      this.datedef = [];
      this.clickNum = 0;
    },
    renderContent(h, parmas) {
      const loop = data => {
        //判断星期六 价格变动
        if (data.defvalue.column == 6) {
          return data.defvalue.value ? (
            <div class="flex2 selected">
              {data.defvalue.text}
              <span>￥{this.highPrice / 100}</span>
            </div>
          ) : (
            <div class="flex2">
              {data.defvalue.text}
              <span>￥{this.highPrice / 100}</span>
            </div>
          );
        } else {
          return data.defvalue.value ? (
            <div class="flex2 selected">
              {data.defvalue.text}
              <span>￥{this.normalPrice / 100}</span>
            </div>
          ) : (
            <div class="flex2">
              {data.defvalue.text}
              <span>￥{this.normalPrice / 100}</span>
            </div>
          );
        }
      };
      return <div style="min-height:60px;">{loop(parmas)}</div>;
    }
  }
};
</script>

<style>
.images {
  width: 15px;
  height: 15px;
  float: right;
}
.right {
  float: right;
}
</style>
