/*
 * @Author: your name
 * @Date: 2019-12-04 01:41:31
 * @LastEditTime: 2019-12-04 01:47:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \backgroud\src\api\system.js
 */
import request from '@/utils/request'

// 获取系统基本配置
export function getSysConfig(params) {
  return request({
    url: '/SettingService/getSysConfig',
    method: 'get',
    params
  })
}

// 设置基础设置
export function setSysConfig(data) {
  return request({
    url: '/SettingService/sysConfig',
    method: 'post',
    data
  })
}
