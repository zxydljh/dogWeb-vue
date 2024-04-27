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

  <div id="shell" v-if="showWindowContent" class="popup">
    <!-- 服务组件窗口 -->
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

// 服务组件
import OnlineServer from "@/components/server/OnlineServer.vue";
import PhoneServer from "@/components/server/PhoneServer.vue";
import SuggestServer from "@/components/server/SuggestServer.vue";
import AttentionServer from "@/components/server/AttentionServer.vue";
import MemberServer from "@/components/server/MemberServer.vue";

export default {
  name: 'App',
  components: {
    DogWebHeader,
    DogWebFooter,
    ShortcutNavigation,
    SidebarModule,
    GeneralNavigation,
  },
  data() {
    return {
      showWindowContent: false, // 初始状态为隐藏
      currentPopupComponent: null,
      popupComponents: { // 弹出层组件映射
        'onlineServer': OnlineServer,
        'phoneServer': PhoneServer,
        'suggest': SuggestServer,
        'attention': AttentionServer,
        'member': MemberServer
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
  }
}
</script>

<style>
#shell {
  width: 700px;
  height: 600px;
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
  position: absolute;
  right: 0;
  font-size: 20px;
  color: white;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
}
</style>
