<template>
    <div>
        <div class="Listbox">
            <div class="Itemlist" v-for="(item,index) in list" :key="index" @click="toDetail">
                <div calss="items">
                    <div class="left">套餐1</div>
                    <div class="right">{{item.time}}</div>
                </div>
                <div calss="items">
                    <div class="left">{{item.address}}</div>
                    <div class="right"></div>
                </div>
                <div calss="items">
                    <div class="left">车辆品牌:</div>
                    <div class="right">{{item.carname}}</div>
                </div>
                <div calss="items">
                    <div class="left">车牌号码:</div>
                    <div class="right">{{item.carNumber}}</div>
                </div>
                <div calss="items">
                    <div class="left">取车员:</div>
                    <div class="right">{{item.tiche}}</div>
                </div>
                <div calss="items">
                    <div class="left">备注信息:</div>
                    <div class="right">{{item.marks}}</div>
                </div>   
            </div>
        </div>
        
    </div>
	
</template>

<script>
export default {
  data() {
    return {
      
      channel: 0,
      list: [
        {
          name: "套餐一",
          address: "广州市天河区东圃客运站",
          carname: "捷豹XJ",
          carNumber: "粤A·88888",
          tiche: "张锁居",
          marks: "无",
          time: "2019.7.17 17：58"
        }
      ]
    };
  },
  methods: {
    toDetail(){
        this.$router.push({
        name: "Listdetail"
      });
    },
    
  },

  mounted() {},
  watch: {
    $route() {}
  }
};
</script>
<style scoped>
.Listbox {
  width: 90%;
  margin: 0 auto;
}
.Itemlist {
  /* width: 348px; */
  height: 171px;
  line-height: 20px;
  border-radius: 3px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  padding: 15px 0 0 45px;
  margin: 15px 0;
  box-shadow: 0px 1px 1px 2px rgba(170, 170, 170, 0.41);
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
}
.items {
  display: inline-block;
  width: 138px;
  height: 14px;
  color: rgba(87, 87, 87, 1);
  font-size: 12px;
  text-align: left;
  font-family: SFUIText-regular;
}
.left,
.right {
  display: inline-block;
}
.right {
  margin-left: 35px;
}
.el-calendar{
    position: fixed;
    top: 9%;
    left: 0;
    background: skyblue;
}
.el-calendar__body>table>tbody>.el-calendar-table__row{
    height: 25px;
} 
</style>
