<script>
export default {
  name:'ShoppingCar'
}
</script>

<template>
  <!-- shoppingcar页面专有模块 -->
  <div class="c-container">
    <div class="w">
      <div class="cart-filter-bar">
        <em>我的订单</em>
      </div>
      <!-- 购物车主要核心区域 -->
      <div class="cart-warp">
        <!-- 头部全选模块 -->
        <div class="cart-thead">
          <div class="t-checkbox">
            <input type="checkbox" name="" id="" class="checkall"> 全选
          </div>
          <div class="t-goods">心动宠物</div>
          <div class="t-price">价格</div>
          <div class="t-num">数量</div>
          <div class="t-sum">小计</div>
          <div class="t-action">操作</div>
        </div>
        <!-- 商品详细模块 -->
        <div class="cart-item-list">
          <div class="cart-item check-cart-item">
            <div class="p-checkbox">
              <input type="checkbox" name="" id="" checked class="j-checkbox">
            </div>
            <div class="p-goods">
              <div class="p-img">
                <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/chaiquan_1.jpeg" alt="">
              </div>
              <div class="p-msg">日本纯种健康柴犬</div>
            </div>
            <div class="p-price">￥2500</div>
            <div class="p-num">
              <div class="quantity-form">
                <a href="javascript:;" class="decrement">-</a>
                <input type="text" class="itxt" value="1">
                <a href="javascript:;" class="increment">+</a>
              </div>
            </div>
            <div class="p-sum">￥2500</div>
            <div class="p-action"><a href="javascript:;">删除</a></div>
          </div>
          <div class="cart-item">
            <div class="p-checkbox">
              <input type="checkbox" name="" id="" class="j-checkbox">
            </div>
            <div class="p-goods">
              <div class="p-img">
                <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/bagequan_1.jpeg" alt="">
              </div>
              <div class="p-msg">纯种健康八哥犬</div>
            </div>
            <div class="p-price">￥2000</div>
            <div class="p-num">
              <div class="quantity-form">
                <a href="javascript:;" class="decrement">-</a>
                <input type="text" class="itxt" value="1">
                <a href="javascript:;" class="increment">+</a>
              </div>
            </div>
            <div class="p-sum">￥2000</div>
            <div class="p-action"><a href="javascript:;">删除</a></div>
          </div>
          <div class="cart-item">
            <div class="p-checkbox">
              <input type="checkbox" name="" id="" class="j-checkbox">
            </div>
            <div class="p-goods">
              <div class="p-img">
                <img src="https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/hashiqi_1.jpeg" alt="">
              </div>
              <div class="p-msg">纯种健康哈士奇</div>
            </div>
            <div class="p-price">￥2500</div>
            <div class="p-num">
              <div class="quantity-form">
                <a href="javascript:;" class="decrement">-</a>
                <input type="text" class="itxt" value="1">
                <a href="javascript:;" class="increment">+</a>
              </div>
            </div>
            <div class="p-sum">￥2500</div>
            <div class="p-action"><a href="javascript:;">删除</a></div>
          </div>
        </div>

        <!-- 结算模块 -->
        <div class="cart-floatbar">
          <div class="select-all">
            <input type="checkbox" name="" id="" class="checkall">全选
          </div>
          <div class="operation">
            <a href="javascript:;" class="remove-batch"> 删除选中的商品</a>
            <a href="javascript:;" class="clear-all">清理购物车</a>
          </div>
          <div class="toolbar-right">
            <div class="amount-sum">已经选<em>1</em>件商品</div>
            <div class="price-sum">总价： <em>￥12.60</em></div>
            <a href="javascript:;" class="btn-area">去结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-filter-bar {
  position: relative;
  text-align: center;
  font-size: 36px;
  color: #E2231A;
  font-weight: 700;
}

.cart-filter-bar em {
  position: absolute;
  top: -90px;
  padding: 5px;
}

.cart-thead {
  font-size: 16px;
  height: 32px;
  line-height: 24px;
  margin: 5px 0 10px;
  padding: 5px 0;
  background: #ffaa08;
  border: 1px solid #e9e9e9;
  border-top: 0;
  position: relative;
  color: #fff;
}

.cart-thead > div,
.cart-item > div {
  float: left;
}

.t-checkbox,
.p-checkbox {
  height: 18px;
  line-height: 18px;
  padding-top: 7px;
  width: 122px;
  padding-left: 11px;
}

.t-goods {
  width: 400px;
}

.t-price {
  width: 120px;
  padding-right: 40px;
  text-align: right;
}

.t-num {
  width: 150px;
  text-align: center;
}

.t-sum {
  width: 100px;
  text-align: right;
}

.t-action {
  width: 130px;
  text-align: right;
}

.cart-item {
  height: 200px;
  border-style: solid;
  border-width: 2px 1px 1px;
  border-color: #aaa #f1f1f1 #f1f1f1;
  background: #fff;
  padding-top: 14px;
  margin: 15px 0;
  font-size: 16px;
  line-height: 160px;
}

.check-cart-item {
  background: #fff4e8;
}

.p-checkbox {
  width: 50px;
}

.p-goods {
  margin-top: 8px;
  width: 565px;
}

.p-img {
  float: left;
  padding: 5px;

}

.p-img img {
  width: 150px;
  height: 150px;
}

.p-msg {
  float: left;
  width: 210px;
  margin: 0 10px;
  font-size: 20px;
}

.p-price {
  width: 110px;
}

.quantity-form {
  width: 80px;
  height: 23px;
}

.p-num {
  transform: translate(10px, 73px);
  width: 170px;
  height: 20px;
}

.decrement,
.increment {
  float: left;
  border: 1px solid #cacbcb;
  height: 18px;
  line-height: 18px;
  padding: 1px 0;
  width: 16px;
  text-align: center;
  color: #666;
  margin: 0;
  background: #fff;
  margin-left: -1px;
}

.itxt {
  float: left;
  border: 1px solid #cacbcb;
  width: 42px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  padding: 1px;
  margin: 0;
  margin-left: -1px;
  font-size: 12px;
  font-family: verdana;
  color: #333;
  -webkit-appearance: none;
}

.p-sum {
  font-weight: 700;
  width: 145px;
}


/* 结算模块 */
.cart-floatbar {
  height: 50px;
  border: 1px solid #f0f0f0;
  background: #ffaa08;
  position: relative;
  margin-bottom: 50px;
  line-height: 50px;
}

.select-all {
  float: left;
  height: 18px;
  line-height: 18px;
  padding: 16px 0 16px 9px;
  white-space: nowrap;
}

.select-all input {
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
}

.operation {
  float: left;
  width: 200px;
  margin-left: 40px;
}

.clear-all {
  font-weight: 700;
  margin: 0 20px;
}

.toolbar-right {
  float: right;
}

.amount-sum {
  float: left;
}

.amount-sum em {
  font-weight: 700;
  color: #E2231A;
  padding: 0 3px;
}

.price-sum {
  float: left;
  margin: 0 15px;
}

.price-sum em {
  font-size: 16px;
  color: #E2231A;
  font-weight: 700;
}

.btn-area {
  display: block;
  font-weight: 700;
  width: 94px;
  height: 48px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e54346;
  overflow: hidden;
}
</style>