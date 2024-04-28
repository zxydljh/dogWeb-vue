<script>
export default {
  name: 'RegisterServer'
}
// var content = document.querySelector('.get_code');
// document.getElementById('get_codes').onclick = function () {
//   let codes = Math.floor((Math.random() * (10000 - 1001)) + 1000);
//   // alert('您的验证码为：' + codes);
//   let n = content.innerHTML = codes;
//   // console.log(n);
// }
</script>

<template>
  <!-- 注册页面专有模块 start -->
  <div class="log_in_page">
    <form class="log_in_box" action="http://localhost:3000/html/register.html" method="post">
      <div class="input_box_input">
        <input type="tel" placeholder="请输入手机号" required name="tel">
      </div>
      <div class="input_box_input">
        <input type="password" placeholder="设置密码" required name="password">
      </div>
      <div class="input_box_input">
        <input type="password" placeholder="确定密码" required name="repassword">
      </div>
      <div class="input_box_input">
        <div class="code">
          <input type="text" placeholder="请输入验证码" required name="code">
          <span class="get_code style_red" id="get_codes" name="getcode">获取验证码</span>
        </div>
      </div>
      <div class="input_box">
        <button type="submit" name="submit" value="注册">注册</button>
      </div>
      <div class="input_box_am">
        <input type="checkbox">我同意狗狗网<a href="#">用户协议</a>和<a href="#">隐私政策</a>
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
  margin-top: 30px;
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
  top: 34px;
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