<script>
export default {
  name: 'OnlineServer'
}
</script>

<template>
  <div class="chatContainer">
    <div class="title">
      <h1>客服热线</h1>
    </div>
    <div class="chatBox-info">
      <!--   商家消息   -->
      <div class="infoBox">
        <div class="localTime">2002.12.20 12:31:12</div>
        <div class="messageBox merchant">
          <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/assets/uploadImages/bianjingmuyangquan_1.png"
               alt="" id="headPortrait">
          <span>您好，有什么可以为您服务吗？</span>
        </div>
      </div>
      <!--   用户消息   -->
      <div class="infoBox">
        <div class="localTime">2002.12.20 12:32:52</div>
        <div class="messageBox user">
          <span>请问这里有关于猫咪的页面或者图片吗？</span>
          <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/assets/uploadImages/yingguodouniuquan_1.png"
               alt="" id="headPortrait">
        </div>
      </div>
      <div class="send">
        <input type="text" class="inputBox">
        <button>发送</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chatContainer {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(241, 168, 11);
  background-color: #f1f1f1;
}

.title {
  display: flex;
  flex-direction: column;
}

.title h1 {
  display: inline-block;
  line-height: 60px;
  height: 57px;
  color: orange;
  bottom: 0;
  text-align: center;
}

.chatBox-info {
  position: relative;
  width: 100%;
  height: 495px;
  background: #fff;
  text-align: left;
  left: 0;
}

.infoBox {
  margin-top: 20px;
  color: black;
  height: 70px;
}

.localTime {
  text-align: center;
}

.messageBox {
  height: 50px;
}

.user {
  float: right;
}

.user span {
  margin-right: 10px;
}

/*商家和用户消息框专有样式*/
.merchant span {
  margin-left: 10px;
}

.messageBox img {
  height: 100%;
  width: 50px;
  border-radius: 25px;
}

.messageBox span {
  display: inline-block;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  line-height: 50px;
  border: 1px solid rgb(241, 168, 11);
  border-radius: 20px;
}

.send {
  position: absolute;
  border-top: #a47a0c 1px solid;
  bottom: 0;
  font-size: 18px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.send .inputBox {
  border: #f1a80b 1px solid;
  border-radius: 5px;
  display: inline-block;
  height: 90%;
  width: 70%;
}

.send button {
  color: white;
  background-color: rgb(241, 168, 11);
  width: 50px;
  font-size: 22px;
  margin-left: 20px;
  border-radius: 5px;
}
</style>