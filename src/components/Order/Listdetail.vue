<template>
    <div>
        <XtopBar status="Listdetail" />

        <div class="box-card">
            <div  class="text item">
               <div> 清洗内容：套餐一</div>
               <div>2019.08.05  18：59</div>
            </div>
            <div  class="text item">
               <div>广州市天河客运站</div>
            </div>
            <div  class="text item">
               <div>车辆品牌：捷豹XJ</div>
            </div>
            <div  class="text item">
               <div>车牌号码：粤A88888</div>
            </div>
            <div  class="text item">
               <div>取车员：张某某</div>
            </div>
            <div  class="text item">
               <div>外观清洗：李某某</div>
            </div>
            <div  class="text item">
               <div>内饰清洗：李某某</div>
            </div>
            <div  class="text item">
               <div>吸尘：李某某</div>
            </div>
            <div  class="text item">
               <div>擦干：李某某</div>
            </div>
            <div  class="text item" style="margin-top:30px;">
               <div>品检人员：李某某</div>
            </div>
            <div class="vedioBox">
                <div class="videos">
                    <video src=""></video>
                    <div>取车视频</div>
                </div>
                <div class="videos">
                    <video src=""></video>
                    <div>还车视频</div>
                </div> 
                <div class="videos">
                    <video src=""></video>
                    <div>钥匙取还视频</div>
                </div>
            </div>
        </div>
                    
    </div>
	
</template>

<script>
import XtopBar from "../Register/XtopBar.vue";
export default {
  props: ["status"],
  components: { XtopBar },
  data() {
    return {
      list: []
    };
  },
  methods: {},

  mounted() {},
  watch: {
    $route() {}
  }
};
</script>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  padding: 25px;
  background: #fff;
}
.vedioBox{
    display: flex;
}
.videos{
    flex: 1;
}
.videos>video{
    width: 50px;
    height: 50px;
}
.videos>div{
    text-align: center;
}
</style>
