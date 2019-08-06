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
        

        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="工种"
        width="140">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="140">
      </el-table-column>
      <el-table-column
        prop="address"
        label="对应数量">
      </el-table-column>
      <!-- <el-input-number v-model="tableData[address]" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
    </el-table>
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
          address: "5"
        },
        {
          date: "工种A",
          name: "王小虎",
          address: "5"
        },
        {
          date: "工种A",
          name: "王小虎",
          address: "5"
        },
        {
          date: "工种A",
          name: "王小虎",
          address: "5"
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
.el-table {
  width: 100%;
  color: #000 !important;
}
.el-table__header-wrapper {
  width: 100%;
}
.el-table__body-wrapper {
  width: 100%;
}
.el-table--scrollable-x .el-table__body-wrapper > table {
  /* width: 100%; */
}
.el-table--scrollable-x .el-table__body-wrapper > table > tbody > tr {
  height: 50px;
}
.el-table--scrollable-x .el-table__body-wrapper > table > tbody > tr > td {
  width: 90px;
  padding: 0;
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
