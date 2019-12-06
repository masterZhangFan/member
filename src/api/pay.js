/*
 * @Author: your name
 * @Date: 2019-12-04 23:18:47
 * @LastEditTime: 2019-12-07 01:54:41
 * @LastEditors: 尼大人
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

// 提现配置设置
export function setUserCommissionSet () {
  return request({
    url: '/charge/setUserCommissionSet',
    method: 'post'
  })
}
