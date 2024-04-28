<template>
  <nav>
    <div class="nav w">
      <ul>
        <li>
          <router-link to="/index" :class="{'active':$route.meta.active === 'index'}">首页</router-link>
        </li>

        <li>
          <router-link to="/variety" :class="{'active':$route.meta.active === 'variety'}">狗狗种类</router-link>
        </li>
        <li>
          <router-link to="/information" :class="{'active':$route.meta.active === 'information'}">狗狗资讯</router-link>
        </li>
        <li>
          <router-link to="/buyDog" :class="{'active':$route.meta.active === 'buyDog'}">购买小狗</router-link>
        </li>
        <li>
          <a href="javascript:;">分类</a>
          <div class="classify_list">
            <div>
              <router-link to="/drugstore" :class="{'active':$route.meta.active === 'drugstore'}">狗狗药店</router-link>
            </div>
            <div>
              <router-link to="/food" :class="{'active':$route.meta.active === 'food'}">狗狗零食</router-link>
            </div>
            <div>
              <router-link to="/toy" :class="{'active':$route.meta.active === 'toy'}">狗狗玩具</router-link>
            </div>
            <div>
              <router-link to="/shoppingCar" :class="{'active':$route.meta.active === 'shoppingCar'}">购物车</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GeneralNavigation',
}

</script>

<style>
/* nav 模块 */
nav {
  border-bottom: 3px solid #f4b005;
}

/* nav模块中 选中样式 */
.active{
  color: #fff;
  background-color: #ecb11b;
}

.nav {
  height: 50px;
  padding: 0 50px;
  line-height: 50px;
}

.nav ul {
  margin-left: 300px;
}

.nav ul li {
  float: left;
  width: 120px;
  height: 50px;
  margin: 0 15px;
}

.nav ul li:hover > a {
  background-color: #ecb11b;
  color: #fff;
}

.nav ul li a {
  display: block;
  text-align: center;
  font-size: 20px;
}

.nav ul li:last-child {
  position: relative;
  /* 使下拉列表位于图片上面 */
  z-index: 100;
}

.nav ul li:last-child > a::after {
  position: absolute;
  font-family: "iconfont";
  content: "\e687";
  font-size: 20px;
  margin-left: 10px;
  transform: rotate(0deg);
  transition: all .4s linear;
}

.classify_list {
  visibility: hidden;
}

.nav ul li:last-child:hover .classify_list {
  visibility: visible;
}

.classify_list div {
  background-color: #ecb11b85;
}

.classify_list div:hover a {
  background-color: #ecb11b;
  color: #fff;
}

/* 鼠标经过 箭头旋转 */
.nav ul li:last-child a:hover::after {
  transform: rotate(180deg);
}
</style>