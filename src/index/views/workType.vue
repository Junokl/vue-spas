<template>
	<div data-reactroot="" class="tab-page">
		<XtopBar status="workType" />
        <div class="titleType">根据需求选择所需工位及工位数量，确认后则不可进行修改</div>
        <div style="margin-left:20px;">
            选择日期
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
        </div>
        

        <div class="table">
          <div class="tab-top">
            <div class="topitem">工种</div>
            <div class="topitem">名称</div>
            <div class="topitem">默认当前设置</div>
          </div>
          <div class="tab-bottom" v-for="(item,index) in tableData" :key="index">
            <div class="bottomitem">{{item.date}}</div>
            <div class="bottomitem">{{item.name}}</div>
            <!-- <div class="topitem"> v-model="value2" -->
              <el-input-number class="bottomitem" v-model="item.number" controls-position="right" @change="handleChange" :min="5" :max="100"><span>人</span></el-input-number><span>人</span>
            <!-- </div> -->
          </div>
        </div>
    <div class="btn-yes">确认</div>
	</div>
</template>
<script>
import XtopBar from "../../components/Register/XtopBar.vue";
export default {
  components: {
    XtopBar
  },
  data() {
    return {
      tableData: [
        {
          date: "工种A",
          name: "王小虎",
          number: "5"
        },
        {
          date: "工种A",
          name: "王小虎",
          number: "6"
        },
        {
          date: "工种A",
          name: "王小虎",
          number: "7"
        },
        {
          date: "工种A",
          name: "王小虎",
          number: "8"
        }
      ],
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '5',
    };
  },
  methods: {
    handleChange(value) {
        console.log(value);
    },
    getData(){
        console.log(this.data)
    }
  },
  computed: {
  },
  updated() {
      this.getData();
      console.log(this.props)
  },
};
</script>
<style>
.titleType {
  font-size: 13px;
  color: #999;
  text-align: center;
  margin: 15px 0;
}
.table{
  width: 100%;
  margin: 20px 0;
  padding: 5px 20px;
}
.tab-top,.tab-bottom{
  display: flex;
}
.topitem,.bottomitem{
  flex: 1;
}
.bottomitem{
  height: 40px;
  line-height: 40px;
}
.tab-bottom>span{
  line-height: 40px;
  padding-left: 4px;
}
.btn-yes {
  margin: 50px auto;
  width: 14.75rem;
  height: 2.125rem;
  line-height: 2.125rem;
  border-radius: 2px 2px 2px 2px;
  background-color: rgba(86, 119, 252, 1);
  text-align: center;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.24);
  color: #fff;
}
</style>
