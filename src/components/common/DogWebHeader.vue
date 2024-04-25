<template>
<div class="header w">
  <div class="logo">
      <h1>
          <a href="index.html" title="狗狗网">狗狗网</a>
      </h1>
  </div>
  <!-- search 搜索模块 -->
  <div class="search">
      <input type="search" name="" id="" placeholder="热门品种">
      <button>搜索</button>
  </div>
</div>  
</template>

<script>
export default {
    name:'DogWebHeader'
}
</script>

<style>
/* header 头部模块 */
.header {
    height: 105px;
    margin-bottom: 20px;
    position: relative;
}

.logo {
    top: 25px;
    left: 0;
    width: 190px;
    height: 114px;
}

.logo a {
    display: block;
    width: 190px;
    height: 114px;
    background: url(https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/assets/commonImages/logo_03.png) no-repeat;
    /* 让文字隐藏 */
    font-size: 0;
}

.search {
    position: absolute;
    left: 400px;
    top: 50px;
    width: 600px;
    height: 60px;
}

.search input {
    width: 500px;
    height: 42px;
    margin-top: 12px;
    padding-left: 10px;
    border: 2px solid #ecb11b;
}

.search button {
    float: right;
    width: 88px;
    height: 42px;
    font-size: 18px;
    color: #fff;
    background-color: #ecb11b;
    margin-top: 12px;
}
</style>