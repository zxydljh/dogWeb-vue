<template>
<footer  class="w"> 
  <div class="w care_box"></div>
  <div class="bottom">
      <div class="mod_service">
          <ul>
              <li><a href="javascript:;">网站介绍</a></li>
              <li><a href="javascript:;">隐私政策</a></li>
              <li><a href="javascript:;">广告服务</a></li>
              <li><a href="javascript:;">合作媒体</a></li>
              <li><a href="javascript:;">投稿指南</a></li>
              <li><a href="javascript:;">使用条款</a></li>
              <li><a href="javascript:;">用户体验提升计划</a></li>
              <li><a href="javascript:;">淘狗网指数</a></li>
              <li><a href="javascript:;">网站地图</a></li>
              <li><a href="javascript:;">淘狗培训</a></li>
          </ul>
      </div><br>
      <p class="copyright">Copyright 狗狗网（ <a href="index.html">dogdog.com</a> ）</p>
      <p>【免责声明：狗狗网上所有宠物狗交易信息内容系用户自行发布，其真实性、合法性由发布人负责，狗狗网不提供任何保证，亦不承担任何法律责任！】</p>
      <p class="copyright">本站的文章和资源来自互联网或者站长的原创，如果有侵犯版权的资源请尽快联系站长，我们会在24h内删除有争议的资源。</p>
  </div>
</footer> 
</template>

<script>
export default {
    name:'DogWebFooter'
}
</script>

<style>
/* footer 底部模块 */
.care_box {
    background: url(../assets/commonImages/宣传画_01.png) no-repeat;
    width: 1200px;
    height: 300px;
}

.bottom {
    margin-top: 200px;
    height: 300px;
    margin: 50px auto;
    text-align: center;
    padding: 20px;
}

.bottom a:hover {
    color: #ecb11b;
}

.mod_service {
    margin-left: 70px;
    height: 60px;
}

.mod_service ul li {
    display: block;
    float: left;
}

.mod_service ul li::after {
    content: "|";
    margin: 0 20px;
}

.mod_service ul li:last-child::after {
    content: "";
}

.mod_service ul li a {
    display: block;
    float: left;
    font-size: 14px;
}

.copyright {
    margin-bottom: 50px;
    font-size: 18px;
}
</style>