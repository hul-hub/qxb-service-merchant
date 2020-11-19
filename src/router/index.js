import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        // () => 按需加载
        component: () => import('views/home'),
        meta: {
            keepAlive: true, // 不需要缓存
            title: '首页'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('views/login'),
        meta: {
            keepAlive: false, // 不需要缓存
            title: '登录'
        }
    },
]

// 3.创建路由对象
const router = new VueRouter({
    // mode: 'history', // 不携带#
    mode: 'hash', // 携带#
    routes
})

// 4.导出
export default router