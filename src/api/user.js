/*
 * @Author: your name
 * @Date: 2019-12-04 23:18:47
 * @LastEditTime: 2019-12-13 01:00:54
 * @LastEditors: 尼大人
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

export function getInfo () {
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
