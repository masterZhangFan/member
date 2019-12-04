/*
 * @Author: your name
 * @Date: 2019-12-03 22:17:37
 * @LastEditTime: 2019-12-04 23:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \backgroud\src\api\agent.js
 */
import request from '@/utils/request'

// 代理类型列表
export function getAgentTypeList (params) {
  return request({
    url: '/delegate/getDelegateTypes',
    method: 'get',
    params
  })
}

// 代理列表
export function getAgentList (params) {
  return request({
    url: '/delegate/delegateList',
    method: 'get',
    params
  })
}

// 代理详情
export function getAgentInfo (params) {
  return request({
    url: '/delegate/delegateInfo',
    method: 'get',
    params
  })
}

// 编辑代理
export function setAgentInfo (data) {
  return request({
    url: '/delegate/setDelegate',
    method: 'post',
    data
  })
}
