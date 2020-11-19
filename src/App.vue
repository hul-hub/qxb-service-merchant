<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
}
</script>

<style>
#app {
  height: 100%;
}
</style>
