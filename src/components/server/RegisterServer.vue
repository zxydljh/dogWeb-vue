<script>
// import axios from "axios";
import {userLogout} from "@/api/loginout";
import { ElMessage } from 'element-plus'

export default {
  name: 'RegisterServer',
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      rePassword: "",
      code: ""
    }
  },
  methods: {
    getCode() {
      let code = Math.random().toString(36).substring(2, 6);
      document.getElementById("get_codes").innerHTML = code;
    },

    register(event) {
      event.preventDefault(); // 阻止表单默认提交行为

      if (!this.username || !this.phone || !this.password || !this.rePassword || !this.code) {
        ElMessage("请输入完整信息");
        return;
      }
      if (this.password !== this.rePassword) {
        ElMessage("两次输入的密码不一致");
        return;
      }
      if (this.phone.length !== 11) {
        ElMessage("手机号格式错误");
        return;
      }
      if (this.password.length < 6) {
        ElMessage("密码长度不能小于6位");
        return;
      }
      if (document.getElementById("agree").checked === false) {
        ElMessage("请勾选用户协议");
        return;
      }
      if (this.code !== document.getElementById("get_codes").innerHTML) {
        ElMessage.error("验证码错误");
        return;
      }

      // axios.post('/api/user/register', {
      //   username: this.username,
      //   phone: this.phone,
      //   password: this.password
      // }).then(res => {
      //       // console.log(res.data)
      //       if (res.data.code === 1) {
      //         ElMessage("注册成功！")
      //         this.username = ""
      //         this.phone = ""
      //         this.password = ""
      //         this.rePassword = ""
      //         this.code = ""
      //       } else {
      //         ElMessage(res.data.msg)
      //       }
      //     }
      // ).catch(error => {
      //   console.log(error.response)
      // })
      userLogout({
        username: this.username,
        phone: this.phone,
        password: this.password
      }).then(res => {
            if (res.data.code === 1) {
              ElMessage.success("注册成功！")
              this.username = ""
              this.phone = ""
              this.password = ""
              this.rePassword = ""
              this.code = ""
            } else {
              ElMessage(res.data.msg)
            }
          }
      ).catch(error => {
        ElMessage.error(error.message)
      })
    }
  },
  watch: {}
}
</script>

<template>
  <!-- 注册页面专有模块 start -->
  <div class="log_in_page">
    <form class="log_in_box" action="" method="post">
      <div class="input_box_input">
        <input type="text" placeholder="请输入名字" v-model="username" required name="username">
      </div>
      <div class="input_box_input">
        <input type="tel" placeholder="请输入手机号" v-model="phone" required name="tel">
      </div>
      <div class="input_box_input">
        <input type="password" placeholder="设置密码" v-model="password" required name="password">
      </div>
      <div class="input_box_input">
        <input type="password" placeholder="确定密码" v-model="rePassword" required name="repassword">
      </div>
      <div class="input_box_input">
        <div class="code">
          <input type="text" placeholder="请输入验证码" v-model="code" required name="code">
          <span class="get_code style_red" id="get_codes" @click="getCode" name="getcode">获取验证码</span>
        </div>
      </div>
      <div class="input_box">
        <button type="submit" @click="register" name="submit" value="注册">注册</button>
      </div>
      <div class="input_box_am">
        <input type="checkbox" id="agree">我同意狗狗网<a href="#">用户协议</a>和<a href="#">隐私政策</a>
      </div>
      <div class="input_box_else">
        <h3>其他方式登录</h3>
        <span class="qq"><a href="#"></a></span>
        <span class="vx"><a href="#"></a></span>
      </div>
    </form>
  </div>
  <!-- 注册页面专有模块 end -->
</template>

<style scoped>
/* 注册页专有模块 */
.log_in_page {
  position: absolute;
  right: 0;
  margin: 0 auto;
  width: 450px;
  height: 600px;
  padding: 20px 25px;
  background-color: #f1f1f1;
  background-image: url("../../assets/registerBgc.jpg");
  border-radius: 10px;
}

.log_in_box {
  text-align: center;
  margin: 10px auto;
}

input {
  outline: none;
}

.input_box_input input {
  width: 300px;
  height: 60px;
  font-size: 18px;
  margin-top: 10px;
  padding-left: 15px;
  background-color: #eabd4c;
}

.code {
  position: relative;
}

.code .get_code {
  position: absolute;
  display: inline;
  width: 100px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  right: 52px;
  top: 14px;
  background-color: #eabd4c;
  cursor: pointer;
}

.input_box button {
  width: 100px;
  height: 50px;
  margin-top: 30px;
  font-size: 18px;
  background-color: #ecb11b;
  color: #f1f1f1;
}

.input_box_am {
  font-size: 14px;
  margin-top: 20px;
  height: 24px;
  color: black;
}

.input_box_am input {
  width: 15px;
  height: 15px;
}

.input_box_am a {
  margin: 0 3px;
  color: orange;
  text-align: center;
}

.input_box_else {
  margin-top: 10px;
  color: #f1f1f1;
}

.input_box_else span {
  display: inline-block;
  width: 50px;
  height: 50px;
}

.input_box_else .qq a::before {
  font-family: "iconfont";
  content: "\e73e";
}

.input_box_else .vx a::before {
  font-family: "iconfont";
  content: "\e607";
}

.input_box_else .qq a::before,
.input_box_else .vx a::before {
  font-size: 30px;
  color: orange;
}
</style>