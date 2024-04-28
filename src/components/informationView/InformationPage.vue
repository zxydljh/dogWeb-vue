<script>
export default {
  name: 'InformationPage'
}
</script>

<template>
  <!-- information页面专有模块 start -->
  <div class="w clearfix">
    <div class="information">
      <!-- 左排行 -->
      <div class="left_list_1">
        <h3>狗狗智商最新排行榜</h3>
        <ol>
          <li>边牧<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bianjingmuyangquan_1.png"
                       alt=""></li>
          <li>德牧犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/deguomuyangquan_1.png"
                         alt=""></li>
          <li>金毛犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jinmao_1.png" alt=""></li>
          <li>杜宾犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/dubinquan_1.png" alt=""></li>
          <li>喜乐蒂犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/xiledi_1.png" alt=""></li>
          <li>拉布拉多<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/labuladuo_1.png" alt="">
          </li>
          <li>蝴蝶犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/hudiequan_1.jpeg" alt="">
          </li>
          <li>罗威纳犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/luoweinaquan_1.png" alt="">
          </li>
          <li>古牧犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/gudaimuyangquan_1.png"
                         alt=""></li>
          <li>英国斗牛犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/yingguodouniuquan_1.png"
                             alt=""></li>
          <li>智商评分综合排序<a href="Javascript:;">更多>></a></li>
        </ol>
      </div>
      <!-- 右排行 -->
      <div class="right_list_1">
        <h3>狗狗人气最新排行榜</h3>
        <ol>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/hashiqi_1.jpeg" alt=""> 哈士奇</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/labuladuo_1.png" alt=""> 拉布拉多
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jinmao_1.png" alt=""> 金毛犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/keji_1.jpeg" alt=""> 威尔士柯基犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bixiongquan_1.jpeg" alt=""> 比熊犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bomeiquan_1.jpeg" alt=""> 博美犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/taidi_1.jpeg" alt=""> 泰迪犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/chaiquan_1.jpeg" alt=""> 柴犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bianjingmuyangquan_1.png" alt="">
            边犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/samoye_1.jpeg" alt=""> 萨摩耶</li>
          <li>查看排名规则<a href="Javascript:;">更多>></a></li>
        </ol>
      </div>

      <div class="new_news">
        <h1>最新狗狗资讯</h1>
        <ul>
          <li><a href="javascript:;">即将新出台的饲养藏獒的...</a></li>
          <li><a href="javascript:;">狗狗被撞死不属于交通事...</a></li>
          <li><a href="javascript:;">宠物犬招惹蜜蜂后的结果...</a></li>
          <li><a href="javascript:;">花费高昂价格买藏獒狗狗...</a></li>
          <li><a href="javascript:;">灵犬失踪数天自己找回来...</a></li>
          <li><a href="javascript:;">孩子该不该养宠物?</a></li>
          <li><a href="javascript:;">宠物店6只名贵宠物狗被...</a></li>
          <li><a href="javascript:;">英国宠物店为狗狗打造制...</a></li>
          <li><a href="javascript:;">某地方聚集柴犬100余只竟...</a></li>
          <li><a href="javascript:;">哈士奇不“撕”家？</a></li>
          <li><a href="javascript:;">长相和性格差异最大的非恶霸犬莫属了吧</a></li>
          <li><a href="javascript:;">探索“狗的智商”科学家称与聪明狗相处更难</a></li>
        </ul>
      </div>

      <!--   萌犬交流坊模块   -->
      <div class="dogJournalism">
        <h1>萌犬新闻社</h1>
        <div>
          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a href="javascript:;">你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a href="javascript:;">你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a href="javascript:;">你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a>你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a>你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a>你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="post-header">
              <img class="post-avatar" src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/右图片.jpeg">
            </div>
            <div class="post-content">
              <div class="post-info">
                <span class="username">用户名</span>
                <span class="post-time">2024.3.27</span>
              </div>
              <a>你家的狗狗登记了吗？截止到8月，再不登记最高将处罚60万元！！</a>
              <div class="post-data">
                <span><img src="../../assets/icon/watch.svg" alt=""> 101</span>
                <span><img src="../../assets/icon/support.svg" alt=""> 34</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 左排行 -->
      <div class="left_list_2">
        <h3>可爱狗狗排行榜</h3>
        <ol>
          <li>柯基<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/keji_1.jpeg" alt=""></li>
          <li>比熊犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bixiongquan_1.jpeg" alt="">
          </li>
          <li>博美犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bomeiquan_1.jpeg" alt="">
          </li>
          <li>泰迪<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/taidi_1.jpeg" alt=""></li>
          <li>柴犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/chaiquan_1.jpeg" alt=""></li>
          <li>雪纳瑞<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/xuenarui_1.jpeg" alt=""></li>
          <li>巴哥犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bagequan_1.jpeg" alt=""></li>
          <li>吉娃娃犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jiwawa_1.jpeg" alt=""></li>
          <li>法斗<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/faguodouniuquan_1.jpeg" alt="">
          </li>
          <li>京巴犬<img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jingba_1.jpeg" alt=""></li>
          <li><a href="javascript:;">更多>></a></li>
        </ol>
      </div>
      <!-- 右排行 -->
      <div class="right_list_2">
        <h3>狗狗伴侣排行榜</h3>
        <ol>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/keji_1.jpeg" alt="">柯基</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bixiongquan_1.jpeg" alt="">比熊犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/chaiquan_1.jpeg" alt="">柴犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bagequan_1.jpeg" alt="">巴哥犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jiwawa_1.jpeg" alt="">吉娃娃犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/faguodouniuquan_1.jpeg" alt="">法斗
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/shapigou_1.png" alt="">沙皮犬</li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/songshiquan_1.png" alt="">松狮犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/yingguodouniuquan_1.png" alt="">英国斗牛犬
          </li>
          <li><img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/deguomuyangquan_1.png" alt="">德牧犬
          </li>
          <li><a href="javascript:;">更多>></a></li>
        </ol>
      </div>
    </div>
  </div>
  <!-- information页面专有模块 end -->
</template>

<style scoped>
/* information页面专有模块 */
/* 左排名 */
.left_list_1 {
  position: absolute;
  left: 0;
  top: 20px;
  transform: translateX(-110px);
}

/* 右排名 */
.right_list_1 {
  position: absolute;
  right: 0;
  top: 20px;
  transform: translateX(110px)
}

.information .left_list_1 img,
.information .right_list_1 img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: left;
}

.information .left_list_1 li {
  text-align: right;
  margin-top: 10px;
}

.information .right_list_1 li {
  text-align: left;
  margin-top: 10px;
}

/* 狗狗资讯主要内容 */
.information {
  position: relative;
  margin: 50px auto 50px;
  font-size: 18px;
  text-align: center;
}

.information h1 {
  color: orange;
}

.information .new_news {
  width: 60%;
  height: 330px;
  margin: 20px auto;
  padding: 20px 20px;
}

.new_news ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.information .new_news ul li {
  float: left;
  width: 260px;
  height: 30px;
  margin-top: 15px;
  line-height: 30px;
  overflow: hidden; /* 溢出隐藏 */
  text-overflow: ellipsis; /* 省略号代替 */
  white-space: nowrap; /* 不换行 */
}

.new_news ul li a {
  font-size: 20px;
  color: rgb(126, 177, 36);
}

.information a:hover {
  color: rgb(231, 139, 19);
}

/* 宠物新闻社模块 */
.dogJournalism {
  width: 800px;
  height: 1200px;
  margin: 80px auto 100px;
}

.dogJournalism h1 {
  margin: 20px auto;
}

.post {
  height: 120px;
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  justify-content: space-around;
}

.post-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.dogJournalism .post-avatar {
  width: 170px;
  height: 100px;
  border-radius: 6px;
}

.post-content {
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.post-content > *:last-child {
  align-self: flex-end;
}

.post-content:hover {
  cursor: default;
}

.post-time {
  font-size: 12px;
  margin-left: 10px;
}

.post-content a {
  height: 46px;
}

.post-data {
  height: 35px;
}

.post-data span {
  width: 50px;
  height: 30px;
  margin-left: 20px;
}

.post-data span img:hover {
  cursor: pointer;
}

/* 左排名 */
.left_list_2 {
  position: absolute;
  left: 0;
  top: 900px;
  transform: translateX(-110px);
}

/* 右排名 */
.right_list_2 {
  position: absolute;
  right: 0;
  top: 900px;
  transform: translateX(110px)
}

.information .left_list_2 img,
.information .right_list_2 img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: left;
}

.information .left_list_2 li {
  text-align: right;
  margin-top: 10px;
}

.information .right_list_2 li {
  text-align: left;
  margin-top: 10px;
}
</style>