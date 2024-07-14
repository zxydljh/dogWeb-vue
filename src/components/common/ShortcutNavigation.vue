<template>
  <section class="shortcut" id="top">
    <div class="w">
      <div class="fl">
        <ul>
          <li>狗狗网欢迎您！</li>
          <li v-if="!loaded">请&nbsp;&nbsp;<a href="#" @click.prevent="showPopup('login')"
                                              class="style_black"><strong>登录</strong></a> &nbsp;
            <a href="#" @click.prevent="showPopup('register')" class="style_red">免费注册</a>
          </li>
          <!--    渲染电话号或名称      -->
          <!-- <li v-else class="username">{{ phoneNumber }}</li> -->
          <li v-else class="username">
            {{ username }}
            <a href="javascript:;" @click="logout">&nbsp;&nbsp;退出</a>
          </li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li>
            <a href="javascript:;" class="service">客户服务</a>
            <div class="small_list">
              <div>
                <a href="#" @click.prevent="showPopup('onlineServer')"> 在线客服</a>
              </div>
              <div>
                <a href="#" @click.prevent="showPopup('phoneServer')">电话客服</a>
              </div>
            </div>
          </li>
          <li></li>
          <li>
            <a href="#" @click.prevent="showPopup('member')">狗狗网会员</a>
          </li>
          <li></li>
          <li>
            <router-link to="shoppingCar">购物车</router-link>
          </li>
          <li></li>
          <li>
            <a href="#" @click.prevent="showPopup('attention')">关注我们</a>
          </li>
          <li></li>
          <li>
            <a href="#" @click.prevent="showPopup('suggest')">留言/建议</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'ShortcutNavigation',
  methods: {
    showPopup(componentKey) {
      this.$emit('show-popup', componentKey);
    },
    logout() {
      this.$store.commit('setToken', '');
      this.$store.commit('setLoaded', false);
      this.$store.commit('setPhoneNumber', '');
      this.$store.commit('setUsername', '');
      this.$store.commit('setId', '');
      this.$store.commit('setMember', '');
      this.$store.commit('setAvatar', '');
      this.$router.push('/login');
    }
  },
  computed: {
    ...mapState(['loaded']),
    phoneNumber() {
      return this.$store.state.phoneNumber;  // 从 Vuex 中获取电话号码
    },
    username() {
      return this.$store.state.username;
    }
  }
}
</script>

<style>
/* 快捷导航模块 */
.shortcut {
  height: 31px;
  line-height: 31px;
  background-color: #f1f1f1;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.username {
  color: #ecb11b;
  font-size: 16px;
}

.shortcut ul li {
  float: left;
}

.shortcut .fr ul li:nth-child(even) {
  width: 1px;
  height: 12px;
  background-color: #666;
  margin: 9px 15px 0;
}

.fr ul > li {
  position: relative;
  height: 100px;
}

.service::after {
  font-family: "iconfont";
  content: "\e687";
}

.small_list {
  position: absolute;
  visibility: hidden;
}

.fr ul > li:hover .small_list {
  visibility: visible;
  z-index: 15;
}
</style>