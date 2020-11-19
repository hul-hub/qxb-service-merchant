import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'

//全局样式
import './assets/css/base.css';



import './permission' //权限控制

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
