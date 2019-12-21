/*
 * @Author: your name
 * @Date: 2019-11-30 14:53:29
 * @LastEditTime : 2019-12-21 18:00:25
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-manage\src\utils\request.js
 */
import axios from 'axios'
// import { getToken } from '@/utils/auth'

import { Toast } from 'vant'
import { getToken } from '@/utils/storage'

// create an axios instance
console.log(process.env.VUE_APP_BASE_API)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.url.indexOf('/charge/getPayResult') !== -1) {
      Toast.loading({
        message: '充值中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
    } else {
      Toast.loading({
        forbidClick: true,
        duration: 0
      })
    }
    if (getToken()) {
      config.headers['token'] = getToken() || null
    }
    return config
  },
  error => {
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status * 1 !== 0) {
      Toast(res.msg)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
