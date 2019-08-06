<template>
	<div>
		<header v-if="status=='register'||status=='login'||status=='Ordermonth'||status=='Listdetail'||status=='workType'" class="inverted bar" style="position: relative;"><button @click="back"><span
				 class="SVGInline"><svg class="SVGInline-svg" style="width: 1em;height: 1em;" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg"
					 fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
						<path d="M9.157.136l-9 8.5a.501.501 0 0 0 0 .728l9 8.5a.5.5 0 0 0 .686-.728L1.222 8.994 9.843.864a.5.5 0 0 0-.686-.728z"
						 fill="#bd9d62"></path>
					</svg></span></button>
			<h1 v-if="status=='register'">登录</h1>
			<h1 v-else-if="status=='login'">注册</h1>
			<h1 v-else-if="status=='Ordermonth'">全部订单</h1>
			<h1 v-else-if="status=='Listdetail'">订单详情</h1>
			<h1 v-else-if="status=='workType'">工种设置</h1>
			<img v-if="status=='Ordermonth'" src="../../assets/images/logo.png" @click="toggleCalendar" class="images">
		</header>
		<el-calendar v-if="status=='Ordermonth'"  @date-change="change"
@pick="pick"
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
    pick(data,event,row,dome) {
		console.log(data,event,row,dome)
      if (this.clickNum < 2) {
        // console.log('if-clickNum', this.clickNum)
        this.clickNum++;
        if (this.clickNum == 1) {
          this.setStart(date);
        }

        if (this.clickNum == 2) {
          if (date > this.startTime) {
            this.endMoney = event.toElement.innerText.slice(-3);
            this.endTime = date;
            this.dayEnd = this.msToDate(date).withoutTime;
          } else {
            this.reset(date);
          }
        }

        if (this.dayStart && this.dayEnd) {
          // console.log('money', this.startMoney, this.endMoney)
          let lack = this.endTime - this.startTime;
          let difference = lack / 1000 / 3600 / 24 + 1;
          // console.log('num', difference)
          // console.log('选择的日期:', this.dayStart, this.dayEnd)
          let startNum = new Date(this.startTime).getDate();
          let endNum = new Date(this.endTime).getDate();
          let nowMonth = new Date(this.endTime).getMonth() + 1;

          // console.log('first=', startNum, endNum)
          for (let i = startNum; i < endNum + 1; i++) {
            let insert = {
              date: `2019-0${nowMonth}-${i}`,
              content: null,
              cid: null
            };
            this.datedef.push(insert);
          }

          //计算租金总额
          let saturdayNum = 0;
          if (
            this.endMoney == this.normalPrice &&
            this.startMoney == this.normalPrice
          ) {
            saturdayNum = Math.floor(difference / 7 + 1);
          } else {
            saturdayNum = Math.floor(difference / 7);
          }
          this.totalMoney =
            (saturdayNum * this.highPrice +
              (difference - saturdayNum) * this.normalPrice) /
            100;
          // console.log('totalMoney=', this.totalMoney)
        }
      } else {
        this.reset(date);
        // console.log('else-clickNum', this.clickNum)
      }
	},
	change() {
      this.dayStart = ''
      this.startTime = 0
      this.dayEnd = ''
      this.endTime = 0
      this.datedef = []
      this.clickNum = 0
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
          )
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
          )
        }
      }
      return <div style="min-height:60px;">{loop(parmas)}</div>
    },
  }
};
</script>

<style>
.images {
  width: 15px;
  height: 15px;
  float: right;
}
</style>
