<script>
export default {
  name: 'SuggestServer'
}
</script>

<template>
  <!-- suggest页专有模块 start -->
  <div class="suggest">
    <div class="title">
      <h1>留言/建议</h1>
    </div>
    <form action="">
      <div>
        <label for="name">姓名</label>
        <input type="text" id="name">
      </div>
      <div>
        <label for="phone">联系电话</label>
        <input type="tel" id="phone">
      </div>
      <div>
        <label for="theme">反馈主题</label>
        <input type="text" id="theme">
      </div>
      <div class="description">
        <label for="description">详细描述</label>
        <textarea name="extra[feed-content]" id="description" cols="30" rows="8"></textarea>
      </div>
      <button>提交</button>
    </form>
  </div>
  <!-- suggest页专有模块 end -->
</template>

<style scoped>
/* suggest页专有模块 */
.suggest {
  margin: auto;
  width: 80%;
  height: 80%;
  margin-top: 60px;
  background-color: #e8d67b;
  color: #000;
}

.title h1 {
  text-align: center;

}

.suggest form {
  margin-top: 10px;
}

.suggest form div {
  margin-top: 25px;
}

.suggest form label {
  display: inline-block;
  width: 80px;
  height: 25px;
  margin-left: 20px;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
}

.suggest form input {
  width: 200px;
  height: 25px;
}

.suggest form textarea {
  outline: none;
  resize: none;
  border: none;
  margin-left: 5px;
  font-size: 14px;
}

.suggest form .description label {
  float: left;
}

.suggest form button {
  width: 60px;
  height: 30px;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 220px;
  background-color: rgb(255, 255, 255);
}
</style>