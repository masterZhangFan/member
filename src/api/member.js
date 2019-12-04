/*
 * @Author: your name
 * @Date: 2019-12-03 21:43:26
 * @LastEditTime: 2019-12-03 21:57:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \backgroud\src\api\member.js
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/member/memberInfos',
    method: 'get',
    params
  })
}
