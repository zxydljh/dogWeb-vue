<template>
  <!-- 快捷导航栏 -->
  <ShortcutNavigation @show-popup="showPopup"/>
  <!-- 头部搜索模块 -->
  <DogWebHeader/>
  <!-- 常规导航栏 -->
  <GeneralNavigation/>

  <!-- 页面专有模块 -->
  <transition>
    <keep-alive>
      <router-view class="mainContent" name="mainContent"/>
    </keep-alive>
  </transition>

  <!-- 服务组件窗口 -->
  <div id="shell" v-if="showWindowContent" class="popup">
    <transition name="fade">
      <div id="mark">
        <!-- 点击 关闭弹出层 -->
        <button id="close" @click="closeWindowContent">关闭</button>
        <!-- 弹出层内容根据 currentPopupRoute 动态渲染 -->
        <component :is="currentPopupComponent"/>
      </div>
    </transition>
  </div>

  <!-- 侧边栏功能模块 -->
  <SidebarModule/>
  <!-- 底部模块 -->
  <DogWebFooter/>
</template>

<script>
import '../public/Font/font/iconfont.css'

import DogWebHeader from '@/components/common/DogWebHeader.vue'
import DogWebFooter from '@/components/common/DogWebFooter.vue'
import ShortcutNavigation from '@/components/common/ShortcutNavigation.vue'
import SidebarModule from '@/components/common/SidebarModule.vue'
import GeneralNavigation from '@/components/common/GeneralNavigation.vue'
import ShoppingCar from "@/components/buyDogView/ShoppingCar.vue";

// 服务组件
import OnlineServer from "@/components/server/OnlineServer.vue";
import PhoneServer from "@/components/server/PhoneServer.vue";
import SuggestServer from "@/components/server/SuggestServer.vue";
import AttentionServer from "@/components/server/AttentionServer.vue";
import MemberServer from "@/components/server/MemberServer.vue";
import LoginServer from "@/components/server/LoginServer.vue";
import RegisterServer from "@/components/server/RegisterServer.vue";
import PayServer from "@/components/payView/index.vue";

export default {
  name: 'App',
  components: {
    DogWebHeader,
    DogWebFooter,
    ShortcutNavigation,
    SidebarModule,
    GeneralNavigation,
    ShoppingCar
  },
  data() {
    return {
      showWindowContent: true, // 初始状态为显示登录窗口
      currentPopupComponent: LoginServer,
      popupComponents: { // 弹出层组件映射
        'onlineServer': OnlineServer,
        'phoneServer': PhoneServer,
        'suggest': SuggestServer,
        'attention': AttentionServer,
        'member': MemberServer,
        'login': LoginServer,
        'register': RegisterServer,
        'pay': PayServer
      },
    };
  },
  methods: {
    showPopup(componentKey) {
      this.showWindowContent = true;
      this.currentPopupComponent = this.popupComponents[componentKey];
    },
    closeWindowContent() {
      this.showWindowContent = false;
      this.currentPopupComponent = null;
    },
  },

  watch: {
    // 判断username是否有值，有值则不显示登录窗口
    '$store.state.username'(newUsername) {
      if (newUsername) {
        this.showWindowContent = false;
      }
    },
    '$store.state.price'(newPrice) {
      if (newPrice) {
        this.showWindowContent = true;
        this.currentPopupComponent = PayServer;
      }
    }
  },
}
</script>

<style>
#shell {
  width: 600px;
  height: 550px;
  margin: auto;
  display: flex;
  justify-content: center;
}

.popup {
  /* 弹出层的样式 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#mark {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
}

#mark #close {
  z-index: 20;
  position: absolute;
  right: 0;
  font-size: 0;
  color: white;
  width: 32px;
  height: 32px;
  border: orange 1px solid;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  background-image: url("assets/icon/close.svg");
}
</style>
