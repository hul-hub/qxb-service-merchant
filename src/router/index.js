import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home')

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
        component: Home,
        meta: {
            keepAlive: false // 不需要缓存
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