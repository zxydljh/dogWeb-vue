<template>
  <!-- 快捷导航栏 -->
  <ShortcutNavigation></ShortcutNavigation>
  <!-- 头部搜索模块 -->
  <DogWebHeader></DogWebHeader>
  <!-- 常规导航栏 -->
  <GeneralNavigation></GeneralNavigation>

  <!-- 页面专有模块 -->
  <router-view></router-view>

  <!-- 侧边栏功能模块 -->
  <SidebarModule/>
  <!-- 底部模块 -->
  <DogWebFooter></DogWebFooter>
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
    GeneralNavigation
  }
}
</script>

<style>

</style>
