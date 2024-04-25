<script>
export default {
  name:'BuyDogPage'
}
// var buy_dog = document.querySelector('.buy_dog')
// var expenditurs = document.getElementsByClassName('.expenditur')
// var abs = buy_dog.querySelectorAll('a')
// var car = document.querySelector('.car')
// var sum = document.getElementById('sum')
// for (let i = 0; i < abs.length; i++) {
//   abs[i].setAttribute('index', i);
//   abs[i].onclick = (function () {
//     sum.innerHTML++;
//     sum.style.display = 'block';
//   })
// }
</script>

<template>
  <!-- buy_dog页面专有模块 start -->
  <div class="buy_dog w">
    <div class="buy_dog_content">
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/chaiquan_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售日本纯种健康柴犬支持上门自提/全国送货</a></h2>
          <p>犬种：柴犬 母（MM） 有血统证书</p>
          <p>地点：常德市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2500￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bagequan_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;">出售纯种健康八哥犬支持上门自提/全国送货</a></h2>
          <p>犬种：八哥犬 公（DD） 有血统证书</p>
          <p>地点：合肥市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/hashiqi_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[同城]</i> 出售纯种健康哈士奇支持上门自提/全国送货</a></h2>
          <p>犬种：哈士奇 公（DD） 有血统证书</p>
          <p>地点：邵阳市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2500￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/zangao_1.png" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[极品]</i>出售纯种健康藏獒支持上门自提/全国送货</a></h2>
          <p>犬种：藏獒 公（DD） 有血统证书</p>
          <p>地点：长沙市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>3000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>

      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/faguodouniuquan_1.jpeg" alt=""></a>
        </div>
        <div class="character">
          <h2><a href="javascript:;"><i></i>出售健康法国斗牛犬支持上门自提/全国送货</a></h2>
          <p>犬种：法国斗牛犬 母（MM） 有血统证书</p>
          <p>地点：娄底市</p>
          <p>疫苗：已接种2针</p>
        </div>
        <div class="expenditure">
          <span>2000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/samoye_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[评价高]</i>出售纯种健康萨摩耶支持上门自提/全国送货</a></h2>
          <p>犬种：萨摩耶 母（MM） 有血统证书</p>
          <p>地点：常德市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/labuladuo_1.png" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i></i>出售纯种健康拉布拉多支持上门自提/全国送货</a></h2>
          <p>犬种：拉布拉多犬 公（DD） 有血统证书</p>
          <p>地点：永州市</p>
          <p>疫苗：已接种2针</p>
        </div>
        <div class="expenditure">
          <span>2000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/keji_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售纯种健康柯基支持上门自提/全国送货</a></h2>
          <p>犬种：柯基 母（MM） 有血统证书</p>
          <p>地点：长沙市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2400￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/jinmao_1.png" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售纯种健康金毛支持上门自提/全国送货</a></h2>
          <p>犬种：金毛 公（DD） 有血统证书</p>
          <p>地点：怀化市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2200￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bianjingmuyangquan_1.png" alt=""></a>
        </div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售纯种健康哈士奇支持上门自提/全国送货</a></h2>
          <p>犬种：边境牧羊犬 母（MM） 有血统证书</p>
          <p>地点：金昌市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2300￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/luoweinaquan_1.png" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售纯种健康罗威纳犬支持上门自提/全国送货</a></h2>
          <p>犬种：罗威纳犬 公（DD） 有血统证书</p>
          <p>地点：武汉市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2700￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/afuhangliequan_1.png" alt=""></a>
        </div>
        <div class="character">
          <h2><a href="javascript:;"><i>[热销]</i>出售纯种健康阿富汗猎犬支持上门自提/全国送货</a></h2>
          <p>犬种：阿富汗猎犬 母（MM） 有血统证书</p>
          <p>地点：北京市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2600￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/xiaoluquan_1.png" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i></i>出售健康小鹿犬支持上门自提/全国送货</a></h2>
          <p>犬种：小鹿犬 母（MM） 有血统证书</p>
          <p>地点：唐山市</p>
          <p>疫苗：已接种1针</p>
        </div>
        <div class="expenditure">
          <span>1500￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/zhonghuatianyuanquan_1.png"
            alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i>[同城]</i>出售健康中华田园犬支持上门自提/全国送货</a></h2>
          <p>犬种：中华田园犬 公（DD） 有血统证书</p>
          <p>地点：邵阳市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>2000￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
      <div class="store">
        <div class="srore_img"><a href="javascript:;"><img
            src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/yuekexia_1.jpeg" alt=""></a></div>
        <div class="character">
          <h2><a href="javascript:;"><i></i>出售纯种健康约克夏支持上门自提/全国送货</a></h2>
          <p>犬种：约克夏 母（MM） 有血统证书</p>
          <p>地点：衡水市</p>
          <p>疫苗：已接种3针</p>
        </div>
        <div class="expenditure">
          <span>1800￥</span>
          <a href="javascript:;">购买</a>
        </div>
      </div>
    </div>
  </div>
  <!-- buy_dog页面专有模块 end -->
</template>

<style scoped>
/* buy_dog页面专有模块 */
.buy_dog {
  margin: 20px auto 150px;
}

.buy_dog a:hover {
  color: #666;
}

.buy_dog_content {
  text-align: center;
  font-size: 18px;
  margin-left: 30px;
}

.buy_dog_content .store {
  position: relative;
  width: 900px;
  height: 220px;
  margin-top: 20px;
  padding: 10px;
  background-color: beige;
  border: 1px solid beige;
}

.buy_dog_content .store:hover {
  border: 1px solid orange;
}

.buy_dog_content .store img {
  float: right;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;
}

.buy_dog_content .store .character {
  float: left;
  text-align: center;
  margin-left: 20px;
  margin-top: 5px;
}

.character h2 {
  margin-bottom: 20px;
}

.character h2 i {
  color: rgb(212, 18, 18);
}

.character p {
  margin-bottom: 20px;
}

.store .expenditure {
  position: absolute;
  font-size: 20px;
  height: 40px;
  width: 150px;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 40px;
  bottom: 10px;
  left: 470px;
  border-radius: 10px;
}

.store .expenditure a {
  color: #fff;
  margin-left: 20px;
}
</style>