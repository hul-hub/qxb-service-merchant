import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'

//全局样式
import './assets/css/base.css';
// 阿里矢量图标库
import '@/assets/icon/iconfont.css'

// 主要的ui框架
import 'vant/lib/index.css'
import {
  DatetimePicker,
  Popup,
} from 'vant'
Vue.use(DatetimePicker)
  .use(Popup)


import './permission' //权限控制

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
