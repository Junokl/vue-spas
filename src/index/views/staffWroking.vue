<template>
	<section data-reactroot="" class="">
    <XtopBar status="staffWroking" />
    <div class="list">
      <div class="itembox" v-for="(item,index) in list1" :key="index">
        <div class="address mt-10">
          <div class="dizhidscs">编号:{{item.usernumber}}</div>
        </div>
        <div class="address mt-10">
          <div class="dizhidscs">姓名:{{item.username}}</div>
        </div>
        <div class="taocan mt-10">
          <div class="taocanL">上班时间:{{item.time}}</div>
          <div class="taocanC">洗车数量:{{item.worknumber}}</div>
        </div>
      </div>
      <div class="tips" v-show="list1==null||list1.length<0">暂无员工上班!</div>
    </div>
	</section>
</template>
<script>
import axios from "axios";
import XtopBar from "../../components/Register/XtopBar.vue";
export default {
  data() {
    return {
      list1: [
        {
          usernumber: "66666",
          time: "8：00-14：00",
          username: "张锁居",
          worknumber: "8",
        },
        {
          usernumber: "66666",
          time: "8：00-14：00",
          username: "张锁居",
          worknumber: "8",
        },
        {
          usernumber: "66666",
          time: "8：00-14：00",
          username: "张锁居",
          worknumber: "8",
        }
      ]
    };
  },
  components: {
    XtopBar
  },
  methods: {},
  mounted() {
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
  margin: 20px auto;
  left: 13px;
  box-shadow: 0px 1px 1px 2px rgba(170, 170, 170, 0.41);
  border: 1px solid rgba(255, 255, 255, 0);
  padding: 5px 15px;
}
.taocan{
    display: flex;
}
.taocanL {
  flex: 2;
}
.taocanC {
  flex: 1;
}
.taocanR {
  color: red;
}

</style>
