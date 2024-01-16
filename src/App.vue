<template>
  <!-- 快捷导航栏 -->
  <ShortcutNavigation></ShortcutNavigation>
  <!-- 头部搜索模块 -->
  <DogWebHeader></DogWebHeader>
  <!-- 常规导航栏 -->
  <GeneralNavigation></GeneralNavigation>
  <!-- 页面主要内容区域 -->
  <IndexProprietaryPage></IndexProprietaryPage>
  <!-- 侧边栏功能模块 -->
  <SidebarModule/>
  <!-- 底部模块 -->
  <DogWebFooter></DogWebFooter>
</template>

<script>
import DogWebHeader from './components/DogWebHeader.vue'
import DogWebFooter from './components/DogWebFooter.vue'
import ShortcutNavigation from './components/ShortcutNavigation.vue'
import SidebarModule from './components/SidebarModule.vue'
import GeneralNavigation from './components/GeneralNavigation.vue'
import IndexProprietaryPage from './components/IndexProprietaryPage'
export default {
  name: 'App',
  components: {
    DogWebHeader,
    DogWebFooter,
    ShortcutNavigation,
    SidebarModule,
    GeneralNavigation,
    IndexProprietaryPage
  }
}
</script>

<style>

</style>
