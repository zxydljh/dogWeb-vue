<template>
  <!-- 快捷导航栏 -->
  <ShortcutNavigation/>
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
        <router-view :key="$route.fullPath" name="windowContent"/> <!-- 使用key确保视图更新 -->
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
      originalRoute: null, // 保存原始路由信息
    };
  },
  watch: {
    // 监听$route的变化，以更新弹出层的显示状态
    '$route.name'(newVal) {
      const shouldShowPopup = ['suggest', 'phoneServer','member','attention','onlineServer'].includes(newVal);
      if (shouldShowPopup) {
        this.showWindowContent = true;
        this.originalRoute = this.$route
      } else {
        this.showWindowContent = false;
        this.originalRoute = null;
      }
    }
  },
  methods: {
    closeWindowContent() {
      this.showWindowContent = false;
      if (this.originalRoute) {
        // 导航回原始路由
        this.$router.push(this.originalRoute.path).catch(err => {
          // 处理导航失败的情况
          console.error('导航回原始路由失败', err);
          this.$router.push('/'); // 备用方案，导航到首页
        });
      } else {
        this.$router.push('/index'); // 如果没有原始路由，导航到首页
      }
    }
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
