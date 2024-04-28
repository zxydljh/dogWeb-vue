<script>
export default {
  name: 'AttentionServer'
}
</script>

<template>
  <div class="attention">
    <div class="content">
      <h1>扫码关注狗狗网官方微信</h1>
      <div class="qr_code">
        <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/assets/commonImages/QrCodeApi.png" alt="">
        <ul class="advantage">
          <li>获取最新资讯</li>
          <li>了解更多狗狗生活</li>
          <li>免费福利发送</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.attention {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background-color: #00000088;
}

.content {
  margin-left: 100px;
  width: 400px;
  height: 200px;
}

.content h1 {
  display: inline-block;
  color: #fff;
  margin: 20px 0;
  margin-left: 80px;
  line-height: 36px;
}

.content .qr_code img {
  float: left;
  margin-top: 20px;
}

.advantage {
  float: right;
  color: #fff;
  margin-left: 50px;
  font-size: 18px;
}

.advantage li {
  margin-top: 40px;
}
</style>