/*
 * @Author: your name
 * @Date: 2019-11-30 14:53:29
 * @LastEditTime: 2019-12-10 23:56:40
 * @LastEditors: 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-manage\src\utils\request.js
 */
import axios from 'axios'
import store from '@/store'
// import { getToken } from '@/utils/auth'

import { Toast } from 'vant'
import { getUserInfo } from '@/utils/storage'

// create an axios instance
console.log(process.env.VUE_APP_BASE_API)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    Toast.loading({
      forbidClick: true,
      duration: 0
    })
    if (getUserInfo()) {
      config.headers['token'] = getUserInfo().token
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
