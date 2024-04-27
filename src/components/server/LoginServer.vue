<script>
export default {
  name:'LoginServer'
}
</script>

<template>
  <!-- 登录页面专有模块 start -->
  <div class="w">
    <div class="log_in_page">
      <form class="log_in_box" action="http://localhost:3000/html/login.html" method="post">
        <div class="input_box_input">
          <input type="tel" placeholder="手机号" required name="tel">
        </div>
        <div class="input_box_input">
          <input type="password" placeholder="密码" required name="password">
        </div>
        <div class="input_box">
          <button name="submit">登录</button>
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
  </div>
  <!-- 登录页面专有模块 end -->
</template>

<style scoped>
/* 登录页专有模块 */
.log_in_page {
  margin: 50px auto 0;
  width: 450px;
  height: 480px;
  padding: 20px 25px;
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