<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <!-- <div slot="text">首页</div> -->
    </tab-bar-item>
    <tab-bar-item link="/merchant">
      <img slot="icon" src="~assets/img/tabbar/merchant.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/merchant_active.svg" alt="">
      <!-- <div slot="text">分类</div> -->
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
    import TabBar from 'common/tabbar/TabBar'
    import TabBarItem from 'common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
