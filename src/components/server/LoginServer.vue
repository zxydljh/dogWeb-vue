<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: 'LoginServer',
  data() {
    return {
      token: '',
      loading: false,
      phone: "",
      password: "",
      loginShow: true
    };
  },
  computed: {
    ...mapState(['username']),
  },
  mounted() {
    if (!this.username) {
      this.loginShow = true
    }
  },
  methods: {
    login() {
      if (!this.phone || !this.password) {
        alert("手机号和密码不能为空");
        return;
      }

      if (document.getElementById("agree").checked === false) {
        alert("请勾选用户协议");
        return;
      }

      axios.post('/api/user/login', {
        // 已解决动态绑定数据，安全问题导致页面请求失败
        phone: this.phone,
        password: this.password
      }).then(res => {
            console.log(res.data)
            if (res.data.code === 1) {
              this.$store.commit('setToken', res.data.data.token)
              this.$store.commit('setLoaded', true)  // 用于快捷导航栏，显示用户名称
              this.$store.commit('setPhoneNumber', this.phone)  // 显示电话号
              this.$store.commit('setUsername', res.data.data.name)  // 用于显示名称
              this.$store.commit('setId', res.data.data.id)
              this.$store.commit('setMember', res.data.data.member)
              this.$store.commit('setAvatar',res.data.data.avatar)
              alert("登录成功！")

              if (this.username) {
                this.loginShow = false
              }

            } else {
              this.loading = false
              alert(res.data.msg)
            }
          }
      ).catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>

<template>
  <!-- 登录页面专有模块 start -->
  <div class="log_in_page" v-if="loginShow">
    <!--    <form class="log_in_box" action="" method="post">-->

    <!--    </form>-->
    <div class="log_in_box">
      <div class="input_box_input">
        <input type="tel" v-model="phone" placeholder="手机号" required name="tel">
      </div>
      <div class="input_box_input">
        <input type="password" v-model="password" placeholder="密码" required name="password">
      </div>
      <div class="input_box">
        <button v-if="!loading" name="submit" @click="login">登录</button>
        <button v-else name="submit">登录中...</button>
      </div>
      <div class="input_box_am">
        <input type="checkbox" id="agree">我同意狗狗网<a href="#">用户协议</a>和<a href="javascript:;">隐私政策</a>
      </div>
      <div class="input_box_else">
        <h3>其他方式登录</h3>
        <span class="qq"><a href="javascript:;"></a></span>
        <span class="vx"><a href="javascript:;"></a></span>
      </div>
    </div>
  </div>
  <!-- 登录页面专有模块 end -->
</template>

<style scoped>
/* 登录页专有模块 */
.log_in_page {
  position: absolute;
  right: 0;
  margin: 0 auto;
  width: 450px;
  height: 480px;
  padding: 20px 25px;
  background-color: #f1f1f1;
  background-image: url("../../assets/loginBgc.jpg");
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
  margin-top: 30px;
  padding-left: 15px;
  background-color: #eabd4c;
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
  color: #fff;
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