<script>
export default {
  name: 'PhoneServer'
}
</script>

<template>
  <div class="ser_online_box">
      <div class="title">
        <h1>客服热线</h1>
      </div>
      <div class="phone">
        <div class="phone_after_sale">
          <div class="box">
            <h2>售后服务热线</h2>
            <h3>
              <a href="#">123-123-8888</a>
            </h3>
            <p>服务时间： 18：00 - 20：00</p>
          </div>
        </div>
        <div class="phone_help">
          <div class="box">
            <h2>帮助服务热线</h2>
            <h3>
              <a href="#">123-123-6666</a>
            </h3>
            <p>服务时间： 18：00 - 20：00</p>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
/* 头部标题 */
.ser_online_box {
  width: 100%;
  height: 90%;
  border: 1px solid rgb(241, 168, 11);
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.title h1 {
  display: inline-block;
  line-height: 60px;
  height: 57px;
  color: orange;
  margin-top: 20px;
}

/* 电话盒子 */
.phone {
  margin: auto;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-around;
}

.phone div {
  overflow: hidden;
}

.phone_after_sale,
.phone_help {
  overflow: hidden;
  float: left;
  width: 260px;
  height: 260px;
  background-color: #eedeb4;
  text-align: center;
  border: 1px solid rgb(241, 168, 11);
  color: black;
}

.box {
  transition: all .4s ease-in-out;
}

.phone_after_sale:hover .box,
.phone_help:hover .box {
  transform: scale(1.1);
}

.phone h2 {
  margin-top: 80px;
  font-size: 20px;
}

.phone h3 {
  margin: 10px 0;
}

.phone a {
  color: black;
}
</style>