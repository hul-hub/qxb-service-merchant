import axios from 'axios'
import { stringifyParam } from 'util/common'




const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,  // url = base url + request url 只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中
    timeout: 10000,
})

service.interceptors.request.use(
    requestConfig => {

        // no timeout
        if (requestConfig.timeout === 'infinite') {
            requestConfig.time = 0
        }
        requestConfig.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjQxIiwiZXhwIjoxNjA2MTE4NjU4LCJpYXQiOjE2MDYxMTUwNTh9.BOrM-Li-9l7l9r0zgYGtGraYxRlzT1ffVBYGJ8jtC1E'
        // 当不是表单提交时才对数据进行stringifyParam (data/formdata表示是formData)
        if (!['data/formdata', 'data/json'].includes(requestConfig.dataType)) {
            // ----------------------------------------------(4)去api line 24 -------------------------------------------------
            requestConfig.data = stringifyParam(requestConfig.data)
        }

        return requestConfig
    },
    error => {
        return Promise.reject(error)
    }
)
// 接口返回码： 502-网络故障，请重试,   503--服务故障，请稍后重试   

service.interceptors.response.use(
    response => {


        // console.log(response)
        const res = response.data
        // ------------------------------------(5)去api line 38 <=> 39 -------------------------------------------
        if (res.code !== 200) {
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error) // for debug、
        return Promise.reject(error)
    }
)

export default service


