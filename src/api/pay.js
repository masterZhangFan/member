/*
 * @Author: your name
 * @Date: 2019-12-04 23:18:47
 * @LastEditTime : 2019-12-21 14:31:29
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\api\user.js
 */
import request from '@/utils/request'

// 充值列表
export function getChargeList (params) {
  return request({
    url: '/charge/chargeList',
    method: 'get',
    params
  })
}

// 提现申请
export function userCommissionApplay (data) {
  return request({
    url: '/charge/userCommissionApplay',
    method: 'post',
    data
  })
}

// 支付配置
export function payConfig (params) {
  return request({
    url: '/charge/payConfig',
    method: 'get',
    params
  })
}

// 提现配置获取
export function getUserCommissionSet () {
  return request({
    url: '/charge/getUserCommissionSet',
    method: 'get'
  })
}
// 提现配置设置
export function setUserCommissionSet (data) {
  return request({
    url: '/charge/setUserCommissionSet',
    method: 'post',
    data
  })
}

// 余额充值下单
export function createOrder (params) {
  return request({
    url: '/charge/orders',
    method: 'get',
    params
  })
}

// 充值后刷新用户数据
export function getPayResult (params) {
  return request({
    url: '/charge/getPayResult',
    method: 'get',
    params
  })
}
