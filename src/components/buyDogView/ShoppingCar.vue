<script>
import {getListByUserId,incrementItemNumber,decrementItemNumber,deleteItem,deleteSelectedItem} from "@/api/shoppingcart";
import {ElMessage} from "element-plus";
import router from "@/router/router";

export default {
  name: 'ShoppingCar',
  data() {
    return {
      userId: null,
      shoppingCartList: [],
      selectedItems: []
    }
  },
  created() {
    this.userId = this.$store.state.id;
  },
  mounted() {
    if (this.userId) {
      getListByUserId(this.userId).then(response => {
        this.shoppingCartList = response.data.data;
        // console.log(this.shoppingCartList);
      }).catch(() => {
        ElMessage.error("获取购物车数据失败！")
      });
    } else {
      ElMessage.error("请先登录！");
    }
  },
  methods: {
    increment(item) {
      if (item.number < 99){
        item.number++;
      } else {
        ElMessage.warning("一次下单商品数量不能超过99！");
      }
      incrementItemNumber(this.userId,item.id).then(() => {
        ElMessage.success("数量增加成功！");
      }).catch(() => {
        ElMessage.error("数量增加失败！");
      });
    },
    decrement(item) {
      if (item.number > 1) {
        item.number--;
      }
      decrementItemNumber(this.userId,item.id).then(() => {
        ElMessage.success("数量减少成功！");
      }).catch(() => {
        ElMessage.error("数量减少失败！");
      });
    },
    deleteItem(item) {
      deleteItem(this.userId,item.id).then(() => {
        this.shoppingCartList = this.shoppingCartList.filter(cartItem => cartItem.id !== item.id);
        ElMessage.success("删除成功！");
      }).catch(() => {
        ElMessage.error("删除失败！");
      });
    },
    toggleSelect(item) {
      // 如果商品包含在选中列表中，则从选中列表中移除
      if (this.selectedItems.includes(item)) {
        this.selectedItems = this.selectedItems.filter(selected => selected.id !== item.id);
      } else {
        // 将商品添加到选中列表中
        this.selectedItems.push(item);
      }
    },
    selectAll() {
      if (this.selectedItems.length === this.shoppingCartList.length) {
        this.selectedItems = [];
      } else {
        this.selectedItems = [...this.shoppingCartList];
      }
    },
    deleteSelected() {
      if (this.selectedItems.length === 0) {
        ElMessage.warning("请选择要删除的商品！");
        return;
      }
      // 获取选中的商品id列表
      const itemIds = this.selectedItems.map(item => item.id);
      console.log(itemIds)
      deleteSelectedItem(this.userId,itemIds).then(() => {
        this.shoppingCartList = this.shoppingCartList.filter(cartItem => !this.selectedItems.includes(cartItem));
        this.selectedItems = [];
        ElMessage.success("删除成功！");
      }).catch(() => {
        ElMessage.error("删除失败！");
      });
    },
    payOrder() {
      if (this.selectedItems.length === 0) {
        ElMessage.warning("请选择要购买的商品！");
        return;
      }
      this.$store.commit('setPrice', this.totalPrice);
      this.$store.commit('setPayType', 'shoppingCart');
      router.push('/pay')
    }
  },
  computed: {
    totalPrice() {
      return this.shoppingCartList.reduce((total, item) => {
        if (this.selectedItems.includes(item)) {
          return total + item.price * item.number;
        }
        return total;
      }, 0);
    }
  }
}
</script>

<template>
  <!-- shoppingcar页面专有模块 -->
  <div class="w">
    <div class="cart-warp">
      <div class="cart-thead">
        <div class="t-checkbox">
          <input type="checkbox" @change="selectAll" :checked="selectedItems.length === shoppingCartList.length"> 全选
        </div>
        <div class="t-goods">心动宠物</div>
        <div class="t-price">价格</div>
        <div class="t-num">数量</div>
        <div class="t-sum">小计</div>
        <div class="t-action">操作</div>
      </div>

      <div class="cart-item-list">
        <div v-for="item in shoppingCartList" :key="item.id" class="cart-item" :class="{ 'check-cart-item': selectedItems.includes(item) }">
          <div class="p-checkbox">
            <input type="checkbox" @change="toggleSelect(item)" :checked="selectedItems.includes(item)">
          </div>
          <div class="p-goods">
            <div class="p-img">
              <img :src="item.image || 'https://dog-dog-website.oss-cn-guangzhou.aliyuncs.com/upload/2639911832-5dc22641c4113_fix732.png'" alt="">
            </div>
            <div class="p-msg">{{ item.description }}</div>
          </div>
          <div class="p-price">￥{{ item.price }}</div>
          <div class="p-num">
            <div class="number-form">
              <a href="javascript:;" @click="decrement(item)" class="decrement">-</a>
              <input type="text" class="itxt" v-model.number="item.number" readonly>
              <a href="javascript:;" @click="increment(item)" class="increment">+</a>
            </div>
          </div>
          <div class="p-sum">￥{{ item.price * item.number }}</div>
          <div class="p-action"><a href="javascript:;" @click="deleteItem(item)">删除</a></div>
        </div>
      </div>

      <div class="cart-floatbar">
        <div class="select-all">
          <input type="checkbox" @change="selectAll" :checked="selectedItems.length === shoppingCartList.length"> 全选
        </div>
        <div class="operation">
          <a href="javascript:;" @click="deleteSelected" class="remove-batch"> 删除选中的商品</a>
        </div>
        <div class="toolbar-right">
          <div class="amount-sum">已经选 <em>{{ selectedItems.length }}</em> 件商品</div>
          <div class="price-sum">总价： <em>￥{{ totalPrice }}</em></div>
          <a href="javascript:;" class="btn-area" @click="payOrder()">去结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  height: 160px;
  margin: 0 10px;
  padding-top: 30px;
  font-size: 20px;
}

.p-price {
  width: 110px;
  padding-top: 70px;
}

.number-form {
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
  padding-top: 70px;
}

.p-action {
  padding-top: 70px;
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