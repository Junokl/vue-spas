<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<template>
	<section class="code-login-container">
		<!-- <form action="http://localhost:8085/Register" method="post" target="tath"> -->
		<div class="input-cont">
			<div class="phone-verify phone-verification-form">
				<div class="input-box " >
					<!-- @change="loginBlur" -->
					<div class="phone-input-component"><input @change ="open" name="tel" type="tel" v-model="phone" class="phone-input" tabindex="1" placeholder="手机号"
						 >
					</div>
					<el-alert
						v-if="msgphone!=''"
						:title="msgphone"
						type="error"
						show-icon>
					</el-alert>
					<button class="get-check-btn inverted primary button disabled"  @click="open" >获取验证码</button>
				</div>
				<div class="input-box">
					<input type="password" style="width: 100%;height: 100%;border: 0 none;" class="verify-code" name="password" v-model="password"
					 placeholder="密码由6-16位数字、字母和英文字符组成" minlength="6" maxlength="16"  @change="checkpassword" >
					<el-alert
						v-if="passmsg!=''"
						:title="passmsg"
						type="error"
						show-icon>
					</el-alert>
				</div>
			</div>
			<div class="pwd-container"><input type="password" v-model="repassword" class="pwd-input" @change="open"  placeholder="确认密码"
				 tabindex="2">
				<el-alert
					v-if="repassmsg!=''"
					:title="repassmsg"
					type="error"
					show-icon>
				</el-alert>	 
			</div>
						<!-- <input type="hidden" name="_token" value="{{csrf_token()}}" /> -->
						<!-- @click="login" -->
		</div>
		<!-- <iframe name="tath" style="width: 0;height: 0;"></iframe> -->
		<!-- <input class="login-btn block-level"  type="submit" value="注册" /> -->
		<button class="login-btn block-level" @click="forget">确认</button>
			<!-- </form> -->
	</section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: null,
      password: null,
      repassword: null,
      isTrue: true,
	  statusMa: true,
	  passmsg:'',
	  repassmsg:'',
	  msgphone:'',
    };
  },
  methods: {
    setcodeMa() {
      console.log("发送");
	},
	open() {
		var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/; //
		var value = $("#test").val();
		if (this.password == "") {
			this.$message('密码不能为空');
		} else if (!pwdReg.test(value)) {
			this.$message('密码不合法');
		} else {
			this.$message('密码合法');
		}
    },
    // checkpassword: function() {
    //   var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/; //
    //   var value = $("#test").val();
    //   if (this.password == "") {
    //     this.passmsg = "密码不能为空";
    //   } else if (!pwdReg.test(value)) {
    //     this.passmsg = "密码不合法";
    //   } else {
    //     this.passmsg = "密码合法";
    //   }
    // },

    // checkpwd: function() {
    //   if (this.repassword == "") {
    //     this.repassmsg = "密码不能为空";
    //   } else if (this.repassword != this.password) {
    //     this.repassmsg = "输入密码保持一致";
    //   } else {
    //     this.repassmsg = "输入密码正确";
    //   }
    // },
    // checkphone: function() {
    //   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //   if (this.phone == "") {
    //     this.msgphone = "手机号不能为空";
    //   } else if (!myreg.test($("#phone").val())) {
    //     this.msgphone = "请输入有效的手机号码";
    //   } else {
    //     this.msgphone = "输入正确";
    //   }
    // },
    // 			loginBlur() {
    // 				var self = this;
    // 				var params = new URLSearchParams();
    // 				params.append('username', this.username);
    // 				axios.post('http://119.23.222.41:8888/app/register', params)
    // 					.then(function(response) {
    // 						console.log(response)
    // 						if (response.data == true) {
    // 							self.isTrue = true;
    // 						}
    // 					})
    // 			},
    forget() {
      if (this.isTrue == true) {
        if (this.password == this.repassword && this.password != null) {
          var params = new URLSearchParams();
          params.append("tel", this.username);
          params.append("password", this.password);
          // params.append('X-CSRFToken','{{csrftoken}}');
          console.log(66);
          axios
            .post("http://119.23.222.41:8888/app/register/", params)
            .then(function(response) {
              console.log(response);
            });
        } else if (this.password != this.repassword) {
		  this.$message('两次密码不一致');
        }
      }
    }

    //
  }
};
</script>

<style>
</style>
