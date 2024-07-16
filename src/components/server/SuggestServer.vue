<script>
import {submitFeedback} from "@/api/feedback";
import {ElMessage} from "element-plus";

export default {
  name: 'SuggestServer',
  data() {
    return {
      userId: '',
      userName: '',
      userPhone: '',
      feedbackTopic: '',
      feedbackInfo: ''
    }
  },
  methods: {
    submit() {
      if (!this.feedbackTopic) {
        ElMessage.warning("请选中反馈主题!");
        return;
      }
      if (!this.feedbackInfo) {
        ElMessage.warning("请输入您的详细意见!");
        return;
      }
      const data = {
        userId: this.userId,
        userName: this.userName,
        userPhone: this.userPhone,
        feedbackTopic: this.feedbackTopic,
        feedbackInfo: this.feedbackInfo
      }
      submitFeedback(data)
          .then((res) => {
            if (res.data.code === 1) {
              ElMessage.success("提交成功,感谢您的宝贵意见!");
            }
          })
          .catch(error => {
            ElMessage.error(error.message || "提交失败,请稍后重试!");
          });
    }
  },
  created() {
    this.userId = this.$store.state.id;
    this.userName = this.$store.state.username;
    this.userPhone = this.$store.state.phoneNumber;
  }
}
</script>

<template>
  <!-- suggest页专有模块 start -->
  <div class="suggest">
    <div class="title">
      <h1>留言/建议</h1>
    </div>
    <form @submit.prevent="submit">
      <div>
        <label for="name">姓 名:</label>
        <input type="text" id="name" v-model="userName">
      </div>
      <div>
        <label for="phone">联系电话:</label>
        <input type="tel" id="phone" v-model="userPhone">
      </div>
      <div>
        <label for="theme">反馈主题:</label>
        <select id="theme" v-model="feedbackTopic">
          <option value="" disabled>----------请选择----------</option>
          <option>人工服务差</option>
          <option>页面不美观</option>
          <option>内容质量差</option>
          <option>其他</option>
        </select>
      </div>
      <div class="description">
        <label for="description">详细描述:</label>
        <textarea id="description" cols="30" rows="8" placeholder="请输入您的详细意见..."
                  v-model="feedbackInfo"></textarea>
      </div>
      <button type="reset">重写</button>
      <button type="submit" class="feedback-submit">提交</button>
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

.feedback-submit {
  background-color: rgba(11, 227, 177, 0.94) !important;
}
</style>