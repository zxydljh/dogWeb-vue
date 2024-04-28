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
        <label for="name">姓 名:</label>
        <input type="text" id="name">
      </div>
      <div>
        <label for="phone">联系电话:</label>
        <input type="tel" id="phone">
      </div>
      <div>
        <label for="theme">反馈主题:</label>
        <select type="text" id="theme">
          <datalist>
            <option>----------请选择----------</option>
            <option>人工服务差</option>
            <option>页面不美观</option>
            <option>内容质量差</option>
            <option>其他</option>
          </datalist>
        </select>
      </div>
      <div class="description">
        <label for="description">详细描述:</label>
        <textarea name="extra[feed-content]" id="description" cols="30" rows="8"></textarea>
      </div>
      <button type="submit">提交</button>
      <button type="reset">重写</button>
    </form>
  </div>
  <!-- suggest页专有模块 end -->
</template>

<style scoped>
/* suggest页专有模块 */
.suggest {
  position: absolute;
  right: 0;
  width: 90%;
  height: 90%;
  background-color: rgba(227, 158, 11, 0.3);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.title h1 {
  text-align: center;
  color: orange;
}

.suggest form {
  margin: 10px auto 0;

}

.suggest form div {
  margin-top: 25px;
}

.suggest form label {
  display: inline-block;
  width: 100px;
  height: 25px;
  margin-left: 20px;
  font-size: 20px;
  text-align: center;
  line-height: 25px;
}

.suggest form input {
  width: 200px;
  height: 25px;
}

#theme {
  width: 200px;
  font-size: 16px;
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
  float: right;
  width: 60px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  margin: 30px 10px 0 0;
  background-color: orange;
  border-radius: 10px;
}
</style>