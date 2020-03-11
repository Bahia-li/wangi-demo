<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>
</style>
