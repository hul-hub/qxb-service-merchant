import router from './router'
import { getToken } from "util/auth"

import NProgress from 'nprogress' // Add nprogress.js and nprogress.css to your project.
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']


router.beforeEach((to, from, next) => {
    NProgress.start()
    const token = getToken()

    if (token) {
        if (to.path === '/login') {
            // 如果已登录，重定向到首页
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next(`/login`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})