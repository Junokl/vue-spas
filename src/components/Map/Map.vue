<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=J55BZ-ZMWC4-DS5UE-DZBRY-6QVBS-ATFDD"></script>
<script src="https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js "></script>
<template>
    
    <div>
        <XtopBar status="Map" />
        <iframe id="mapPage" width="100%" height="100%" frameborder=0 
            src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=J55BZ-ZMWC4-DS5UE-DZBRY-6QVBS-ATFDD&referer=myapp">
        </iframe>
    </div>
</template>
<script>
import XtopBar from "../Register/XtopBar.vue";
export default {
  data() {
    return {
      longitude: 0, //经度
      latitude: 0, //纬度
      city: "",
    };
  },
  components: {
    XtopBar
  },
  methods: {
  },
  created() {
      this.address = '1';
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener(
        "message",
        function(event) {
          // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
          var loc = event.data;
          if (loc && loc.module == "locationPicker") {
            //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
            // console.log("location", loc);
            //   this.$store.dispatch('setlocation',loc);
            //   console.log(this.$store.state);
              this.$cookies.set('location',loc, '7d');
            //   var location = this.$cookies.get(location);
            window.location = "http://localhost:8085/mystore";
          }
        },
        false
      );
      console.log(this.address)
    });
    //   Store.getters.getLocation();
  },
  updated() {
    console.log("缓存的地址", this.address);
    window.addEventListener(
      "message",
      function(event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;
        if (loc && loc.module == "locationPicker") {
          //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          console.log("location", loc);
          this.$cookies.set("location", loc, "7d");
          var location = this.$cookies.get(location);
          console.log("缓存的地址", location);
          this.$router.history.go(-1);
        }
      },
      false
    );
    //   var location = this.$cookies.set(location)
    //   console.log(location);
  }
};
</script>
<style>
</style>
