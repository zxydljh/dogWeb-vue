<script>
export default {
  name: 'MemberServer',
  methods: {
    buyMember() {
      this.$store.commit('setPrice', '328')
      this.$store.commit('setPayType', 'member')
    }
  }
}
</script>

<template>
  <!-- member页专有模块 start-->
  <div class="member">
    <div class="vip">
      <div class="vip_question">
        <h1>为什么成为VIP</h1>
      </div>
      <div class="vip_answer">
        <ul>
          <li>单独的VIP电话客服服务</li>
          <li>凡在本网站购买的狗狗，享受一年的免费资讯狗狗居家生活常识和健康资讯</li>
          <li>在狗狗网购买狗狗的生活用品一律 <strong class="discount">8</strong> 折</li>
        </ul>
      </div>
      <div class="cost">
        <div class="price">
          <span>328￥/年<i>1220￥/年</i></span>
        </div>
        <div class="buy"><a @click="buyMember">点击购买</a></div>
      </div>
    </div>
  </div>
  <!-- member页专有模块 end-->
</template>

<style scoped>
/* member页专有模块 */
.member {
  width: 600px;
  height: 400px;
  border-radius: 200px;
  background-color: rgb(40, 38, 38);
  color: #fff;
  font-size: 16px;
  margin: 10px auto 0;
}

.member:hover {
  cursor: default;
}

.vip {
  width: 100%;
  height: 100%;
  text-align: center;
}

.vip_question {
  transform: translateY(20px);
}

.vip .vip_answer ul {
  margin-top: 70px;
}

.vip .vip_answer li {
  margin-top: 20px;
}

.cost {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.discount {
  font-size: 24px;
  color: orange;
}

.cost div {
  display: inline-block;
  background-color: red;
  width: 100px;
  height: 40px;
  line-height: 40px;
}

.cost .price {
  width: 200px;
  height: 40px;
  font-size: 18px;
  margin-right: 10px;
}

.cost .price i {
  font-size: 14px;
  margin-left: 10px;
  color: #f1f1f1;
  text-decoration: line-through;
}

.cost .buy a {
  color: #fff;
  font-weight: 700;
}

.buy a:hover {
  cursor: pointer;
}
</style>