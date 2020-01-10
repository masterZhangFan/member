/*
 * @Author: your name
 * @Date: 2019-12-04 23:18:47
 * @LastEditTime : 2020-01-10 23:05:56
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\api\user.js
 */
import request from '@/utils/request'

export function getPhoneCode (data) {
  return request({
    url: '/login/sendSms',
    method: 'post',
    data
  })
}

export function login (data) {
  return request({
    url: '/login/signIn',
    method: 'post',
    data
  })
}

export function getUserData () {
  return request({
    url: '/user/getUserInfo',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取推荐粉丝
export function getIndirectFanWithUserId (params) {
  return request({
    url: '/user/getIndirectFanWithUserId',
    method: 'get',
    params: params
  })
}

// 获取直属粉丝
export function getDirectlyFanWithUserId (params) {
  return request({
    url: '/user/getDirectlyFanWithUserId',
    method: 'get',
    params: params
  })
}

// 获取裂变粉丝
export function getFissionFanWithUserId (params) {
  return request({
    url: '/user/getFissionFanWithUserId',
    method: 'get',
    params: params
  })
}

// 获取分享信息
export function getShareParams (params) {
  return request({
    url: '/shareTemp/shareInfo',
    method: 'get',
    params: params
  })
}

// 获取分享模板信息
export function getShareTemp (params) {
  return request({
    url: '/shareTemp/shareTemps',
    method: 'get',
    params: params
  })
}
