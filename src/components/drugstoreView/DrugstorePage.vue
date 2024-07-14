<script>
import {pageQuery} from "@/api/drugstore";
import {saveToShoppingCart} from "@/api/shoppingcart";
import {ElMessage} from "element-plus";
import router from "@/router/router";

export default {
  name:'DrugstorePage',
  data(){
    return {
      drugstoreList:[],
      total:0,
      pageNum:1,
      pageSize:12,
      name: ''
    }
  },
  created(){
    this.drugstorePageQuery();
  },
  methods:{
    drugstorePageQuery(){
      pageQuery({
        page: this.pageNum,
        pageSize: this.pageSize,
        name: this.name
      }).then(response => {
        this.drugstoreList = response.data.data.records;
        this.total = response.data.data.total;
      })
    },
    onChange(page) {
      this.pageNum = page;
      this.drugstorePageQuery();
    },
    onSearch() {
      this.pageNum = 1;
      this.drugstorePageQuery();
    },
    purchase(row) {
      // 判断用户是否登录
      if (this.$store.state.id === '') {
        ElMessage('请先登录')
        router.push('/login');
        return
      }
      // 添加到购物车
      saveToShoppingCart({
        userId: this.$store.state.id,
        drugstoreId: row.id,
        image: row.image,
        price: row.price,
        description: row.description
      }).then(() => {
        ElMessage.success('添加成功')
      }).catch((err) => {
        ElMessage.error('添加失败' + err)
      })
    }
  }
}
</script>

<template>
  <!-- drugstore页面专有模块 start -->
  <div class="w">
    <div class="search-bar">
      <input type="text" v-model="name" placeholder="搜索玩具" />
      <button @click="onSearch">搜索</button>
    </div>
    <div class="drugstore">
      <ul class="clearfix">
        <li v-for="drugstore in drugstoreList" :key="drugstore.id">
          <a href="javascript:;"><img :src="drugstore.image" :alt="drugstore.name" :title="drugstore.description"></a>
          <p :title="drugstore.name">{{ drugstore.name }}</p>
          <div class="cost">
            <div>￥{{ drugstore.price }}<i v-show="drugstore.originalPrice">￥{{ drugstore.originalPrice }}</i></div>
            <div><a href="javascript:;" @click="purchase(drugstore)">点击购买</a></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页组件 -->
    <div class="search_page">
      <a-pagination :total="total" @change="onChange" :page-size="pageSize"/>
    </div>
  </div>
  <!-- drugstore页面专有模块 end -->
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-bar input {
  padding: 5px;
  width: 200px;
}

.search-bar button {
  padding: 5px 10px;
}
/* 分类下拉列表 颜色样式变化 */
.nav ul li:last-child:hover .one a {
  background-color: #ecb11b;
  color: #fff;
}

/* drugstore页面专有样式 */
.drugstore ul {
  text-align: center;
  margin-top: 30px;
  margin-left: 25px;
}

.drugstore ul li {
  float: left;
  width: 260px;
  height: 380px;
  margin-right: 30px;
  margin-bottom: 20px;
}

.drugstore ul li:nth-child(4n) {
  margin-right: 0;
}

.drugstore ul li img {
  width: 250px;
  height: 260px;
  margin-bottom: 10px;
}

/* 溢出的文字省略号显示 */
.drugstore ul li p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #767676;
}

.cost div:nth-child(1) {
  font-size: 18px;
  margin-top: 5px;
  color: red;
}

.cost div:nth-child(1) i {
  font-size: 14px;
  text-decoration: line-through;
  color: #666;
}

.cost div:nth-child(2) {
  font-size: 20px;
  font-weight: 700;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-left: 78px;
  color: red;
  background-color: #f1f1f1;
}

.cost div:nth-child(2) a {
  color: red;
}

.cost div:nth-child(2):hover a {
  color: red;
}

/* 搜索页模块 */
.search_page {
  height: 50px;
  font-size: 14px;
  text-align: center;
  margin: 30px auto 70px;
  display: flex;
  justify-content: center;
}
</style>