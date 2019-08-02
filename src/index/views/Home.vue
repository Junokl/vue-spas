<template>
	<section data-reactroot="" class="widgets clientapp-index home index mode">
		<XTopbar status="home" />
		<Xnavbar />
	</section>
</template>
<script>
import axios from "axios";
import XTopbar from "../../components/home/XTopbar.vue";
import Xnavbar from "../../components/home/Xnavbar.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    XTopbar,
    Xnavbar
  },
  mounted() {
	console.log(`这个是默认页面的主页：${this.$store.state.myname}`)
    // var self = this;
    // axios
    //   .get("./home.json")
    //   .then(function(response) {
    //     // console.log(response.data)
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    
  },
  methods: {}
};
</script>
<style scoped>

</style>
