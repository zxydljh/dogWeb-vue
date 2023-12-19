<template>
  <ShortcutNavigation></ShortcutNavigation>
  <DogWebHeader></DogWebHeader>
  <GeneralNavigation></GeneralNavigation>
  <IndexProprietaryPage></IndexProprietaryPage>
  <SidebarModule/>
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
