/*
 * @Author: your name
 * @Date: 2019-12-04 01:41:31
 * @LastEditTime : 2019-12-19 21:51:50
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \backgroud\src\api\system.js
 */
import request from '@/utils/request'

// 获取系统基本配置
export function getSysConfig (params) {
  return request({
    url: '/setting/getSysConfig',
    method: 'get',
    params
  })
}

// 设置基础设置
export function setSysConfig (data) {
  return request({
    url: '/setting/sysConfig',
    method: 'post',
    data
  })
}

// 获取微信配置参数
export function getPayConfig (params) {
  return request({
    url: '/charge/payConfig',
    method: 'get',
    params
  })
}

// 获取微信openId
export function getOpenId (params) {
  return request({
    url: '/login/wxToken',
    method: 'get',
    params
  })
}
