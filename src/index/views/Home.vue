<template>
	<section data-reactroot="" class="widgets clientapp-index home index mode">
		<!-- <XTopbar status="home" /> -->
    <ul class="filter-bar">
			<li v-for="(t,index) in tabs" :key="index" @click="changeTab(index)" class="all" :class="{current:tab==index}" v-text="t.name"></li>
		</ul>
    <div class="list" v-if="tab==0">
      <div class="itembox" v-for="(item,index) in list1" :key="index">
        <div class="taocan mt-10">
          <div class="taocanL">{{item.type}}</div>
          <div class="taocanC">{{item.time}}</div>
          <div class="taocanR" v-if="tab==1||tab==2">{{item.chadui}}</div>
        </div>
        <div class="dizhi mt-10" v-if="tab==0">
          <div class="dizhidsc">{{item.dizhi}}</div>
        </div>
        <div class="address mt-10" v-if="tab==1||tab==2">
          <div class="dizhidscs">{{item.address}}</div>
        </div>
        <div class="carbrand mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车辆品牌:{{item.carbrand}}</div>
        </div>
        <div class="carnumber mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车牌号码:{{item.carnumber}}</div>
        </div>
        <div class="quche mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">取车员:{{item.quche}}</div>
        </div>
        <div class="masks mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">备注信息:{{item.masks}}</div>
        </div>

        <div class="btnbox">
          <el-button   v-if="tab==0" class="reject-btn" @click="removeOrder">拒绝</el-button>
          <button v-if="tab==0" class="confirm-btn" @click="openorder">接受</button>
        </div>
      </div>
      <div class="tips" v-show="list1==null||list1.length<0">暂无订单!</div>
    </div>
    <!-- 指派员工 -->
    <div class="assignEmployees" v-if="tab==0" v-show="employees">
      <div class="employees-title">指派提车员</div>
      <div class="Eitembox" v-for="(yuan,index) in y" :key="index">
        <img src="../../assets/images/logo.png" class="yuanImg">
        <div class="yuanname">{{yuan.name}}</div>
        <div class="zhipai" @click="submitAjax">指派</div>
      </div>

    </div>

    <!-- 弹窗 -->
    <div class="orderPopup" v-show="showorder" @click="closeorder">
      <div class="orderBOX">
        <div class="ordertop">
          <img class="imgs" src="../../assets/images/logo.png" />
          <div class="name-address">
            <div class="order-name">张小姐</div>
            <div class="order-address">广州市车陂街道中山大道888号</div>
          </div>
        </div>
        <div class="orderbottom">
          <div class="bottom-top">服务项目：套餐一</div>
          <div class="bottom-bottom">
            <div class="marks">备注信息：无</div>
            <div class="money">订单金额：88</div>
          </div>
        </div>
        <button class="btn-commit" @click="setOrder">接受订单</button>
      </div>
    </div>

    <div class="list" v-if="tab==1">
      <div class="itembox" v-for="(item1,index) in list2" :key="index">
        <div class="taocan mt-10">
          <div class="taocanL">{{item1.type}}</div>
          <div class="taocanC">{{item1.time}}</div>
          <div class="taocanR" v-if="tab==1||tab==2">{{item1.chadui}}</div>
        </div>
        <div class="dizhi mt-10" v-if="tab==0">
          <div class="dizhidsc">{{item1.dizhi}}</div>
        </div>
        <div class="address mt-10" v-if="tab==1||tab==2">
          <div class="dizhidscs">{{item1.address}}</div>
        </div>
        <div class="carbrand mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车辆品牌:{{item1.carbrand}}</div>
        </div>
        <div class="carnumber mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车牌号码:{{item1.carnumber}}</div>
        </div>
        <div class="quche mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">取车员:{{item1.quche}}</div>
        </div>
        <div class="masks mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">备注信息:{{item1.masks}}</div>
        </div>
      </div>
      <div class="tips" v-show="list2==null||list2.length<0">暂无订单!</div>
    </div>
    <div class="list" v-if="tab==2">
      <div class="itembox" v-for="(item2,index) in list3" :key="index">
        <div class="taocan mt-10">
          <div class="taocanL">{{item2.type}}</div>
          <div class="taocanC">{{item2.time}}</div>
          <div class="taocanR" v-if="tab==1||tab==2">{{item2.chadui}}</div>
        </div>
        <div class="dizhi mt-10" v-if="tab==0">
          <div class="dizhidscs">{{item2.dizhi}}</div>
        </div>
        <div class="address mt-10" v-if="tab==1||tab==2">
          <div class="dizhidsc">{{item2.address}}</div>
        </div>
        <div class="carbrand mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车辆品牌:{{item2.carbrand}}</div>
        </div>
        <div class="carnumber mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">车牌号码:{{item2.carnumber}}</div>
        </div>
        <div class="quche mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">取车员:{{item2.quche}}</div>
        </div>
        <div class="masks mt-10" v-if="tab==1||tab==2">
          <div class="taocanL">备注信息:{{item2.masks}}</div>
        </div>
      </div>
      <div class="tips" v-show="list3==null||list3.length<0">暂无订单!</div>
    </div>
		<Xnavbar />
	</section>
</template>
<script>
import axios from "axios";
// import XTopbar from "../../components/home/XTopbar.vue";
import Xnavbar from "../../components/home/Xnavbar1.vue";
export default {
  data() {
    return {
      employees: false, //员工status
      showorder: false, //弹窗status
      tab: 0,
      tabs: [
        { id: 0, name: "待接受" },
        { id: 1, name: "进行中" },
        { id: 2, name: "已完成" }
      ],
      list1: [
        {
          type: "套餐一",
          time: "2019.7.17 17：58",
          address: "广州市天河区东圃客运站",
          dizhi: "广州市天河区东圃客运站",
          carbrand: "捷豹XJ",
          carnumber: "粤A·88888",
          quche: "张锁居",
          masks: "这是备注",
          chadui: "加急"
        }
      ],
      y: [
        { url: "../../assets/images/logo.png", name: "哈哈哈" },
        { url: "../../assets/images/logo.png", name: "哈哈哈" }
      ],
      list2: null,
      list3: [
        {
          type: "套餐一",
          time: "2019.7.17 17：58",
          address: "广州市天河区东圃客运站",
          dizhi: "广州市天河区东圃客运站",
          carbrand: "捷豹XJ",
          carnumber: "粤A·88888",
          quche: "张锁居",
          masks: "这是备注",
          chadui: "加急"
        }
      ]
    };
  },
  components: {
    // XTopbar,
    Xnavbar
  },
  methods: {
    changeTab(tab) {
      var self = this;
      self.tab = tab;
    },
    openorder() {
      var self = this;
      self.showorder = true;
    },
    closeorder() {
      var self = this;
      self.showorder = false;
    },
    setOrder() {
      var self = this;
      console.log("接受订单");
      self.employees = true;
      // axios
      //   .get("./home.json")
      //   .then(function(response) {
      //     // console.log(response.data)
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    removeOrder() {
      this.$confirm("拒绝后此订单取消, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // axios
          //   .get("./home.json")
          //   .then(function(response) {
          //     // console.log(response.data)
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
          this.$message({
            type: "success",
            message: "拒绝成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消拒绝"
          });
        });
    },
    submitAjax() {
      this.$confirm("确认指派此员工, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // axios
          //   .get("./home.json")
          //   .then(function(response) {
          //     // console.log(response.data)
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
          this.$message({
            type: "success",
            message: "指派成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消指派"
          });
        });
    }
  },
  mounted() {
    console.log(`这个是默认页面的主页：${this.$store.state.myname}`);
    // var self = this;
    // axios
    //   .get("./home.json")
    //   .then(function(response) {
    //     // console.log(response.data)
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>
<style scoped>
body {
  background: #fff !important;
}
.el-message-box {
  width: 330px !important;
}
/* 弹窗 */
.orderPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #999;
  z-index: 10;
}
.orderBOX {
  width: 90%;
  position: absolute;
  top: 35%;
  left: 5%;
  background: #fff;
  z-index: 11;
}
.ordertop {
  height: 70px;
  line-height: 25px;
  align-items: center;
}
.ordertop,
.orderbottom {
  display: flex;
  padding: 10px;
}
.orderbottom {
  flex-direction: column;
}
.imgs {
  /* flex: 1; */
  width: 1.875rem;
  height: 1.875rem;
}
.name-address {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
}
/* .order-name {
}
.order-address {
} */
.bottom-top,
.bottom-bottom {
  flex: 1;
  margin-bottom: 0.625rem;
}
.bottom-bottom {
  display: flex;
}
.marks,
.money {
  flex: 1;
  align-items: center;
}
.btn-commit {
  margin: 10px 10%;
  width: 80%;
  height: 34px;
  border-radius: 2px 2px 2px 2px;
  background-color: rgba(86, 119, 252, 1);
  text-align: center;
  color: #fff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.24);
}
/* === */
.tips {
  position: fixed;
  top: 42%;
  left: 42%;
}
.list {
  margin-top: 15px;
}
.itembox {
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 1px 1px 2px rgba(170, 170, 170, 0.41);
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 5px 15px;
}
.taocan {
  display: flex;
}
.taocanL,
.taocanR {
  flex: 1;
}
.taocanC {
  flex: 2;
}
.taocanR {
  color: red;
}
.dizhi,
.address {
  display: inline-block;
}
.dizhi::before {
  display: inline-block;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: skyblue;
}
.dizhidsc {
  display: inline-block;
  margin-left: 8px;
}
.masks {
  padding: 0 0 20px 0;
}
.btnbox {
  margin-top: 10px;
  display: inline-block;
}
.reject-btn {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 8px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(24, 144, 255, 1);
  color: rgba(24, 144, 255, 1);
}
.confirm-btn {
  margin-left: 30px;
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px 5px 5px 5px;
  text-align: center;
  border: 1px solid rgba(24, 144, 255, 1);
  color: rgba(24, 144, 255, 1);
}

.filter-bar {
  width: 100%;
  height: 2rem;
  z-index: 99;
  white-space: nowrap;
  overflow-x: scroll;
  /* background-color: white; */
}
.filter-bar li {
  display: inline-block;
  font-size: 0.7rem;
  width: 27.3%;
  margin: 0 11px;
  height: 100%;
  line-height: 2.2rem;
  text-align: center;
}
.filter-bar li.current {
  color: #1890ff;
  border-bottom: 2px solid #1890ff;
}
.assignEmployees {
  width: 90%;
  margin: 10px auto 0;
  box-shadow: 0px 1px 1px 2px rgba(170, 170, 170, 0.41);
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 5px 15px;
}
.assignEmployees:last-child {
  border: none;
}
.Eitembox {
  display: flex;
  border-bottom: 1px solid #333;
  align-items: center;
  padding: 10px;
}
.Eitembox:last-child {
  border-bottom: none;
}
.yuanImg {
  width: 30px;
  height: 30px;
  /* flex: 1; */
  border-radius: 50%;
}
.yuanname {
  flex: 3;
  border-right: 1px solid #666;
  padding-left: 15px;
}
.zhipai {
  flex: 1;
  text-align: center;
}
</style>
