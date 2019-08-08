<template>
	<!-- <div id="popup"> -->
		<div data-reactroot="" class="popup-component login">
			<div class="overlay"></div>
			<div class="content">
				<section class="login-container">
					<div class="bd">
						<XtopBar status="mystore" />
					</div>

				</section>
                <div class="storemain">
                    <div class="storeImg">
                        <div class="imgname">店铺头像</div>
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="店铺名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺总车位" prop="num">
                        <el-input v-model="ruleForm.num"></el-input>
                    </el-form-item>
                    <el-form-item label="店铺地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                    <div class="dscBox" @click="toMap">
                      <div class="dscleft">
                        <div>坐标上传</div>
                        <div style="color:#999;padding:10px 0">{{address == '' ?'上传店铺坐标，精确定位店铺地址':address}}</div>
                      </div>
                      <div>
                        <span class="SVGInline"><svg class="SVGInline-svg" style="width: 0.6rem;height: 0.6rem;"
                        viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.547 5.002L.383 9.167c-.2.2-.194.509 0 .703a.502.502 0 0 0 .703 0l4.411-4.411a.494.494 0 0 0 .26-.386.494.494 0 0 0-.256-.523L1.086.135a.491.491 0 0 0-.703 0 .502.502 0 0 0 0 .703l4.164 4.164z"
                          fill="#999" fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      </div>
                    </div>
                    
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                    </el-form>
                </div>
			</div>
		</div>
	<!-- </div> -->
</template>

<script>
import XtopBar from "../../components/Register/XtopBar.vue";
// import Xlogin from '../Register/Xlogin.vue';
export default {
  props: ["status"],
  components: {
    XtopBar
    // Xlogin
  },
  data() {
    return {
      address: '', //存放的缓存地址
      latlng:[],//存放的经纬度地址
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        phone: "",
        address: "",
        num: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入正确的联系方式", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入店铺车位", trigger: "blur" }
        ],
        num: [{ required: true, message: "请设置店铺地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toMap() {
      this.$router.push({ name: "Maps" });
    }
  },
  created() {
    var location = this.$cookies.get('location');
    console.log("店铺的地址", location);
    if(location.poiaddress){
      this.address = location.poiaddress;
      this.latlng = location.latlng;
    }
  }
};
</script>

<style>
.storeImg {
  height: 140px;
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}
.el-upload--picture-card {
  width: 68px !important;
  height: 68px !important;
  line-height: 68px !important;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 68px !important;
  height: 68px !important;
}
.el-upload-list--picture .el-upload-list__item {
  widows: 92px !important;
  float: left;
}
.storemain {
  width: 100%;
}
.dscBox {
  display: flex;
  align-items: center;
  margin: 0 24px;
  justify-content: space-between;
}
</style>
