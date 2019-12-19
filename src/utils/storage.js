/*
 * @Author: 尼大人
 * @Date: 2019-12-10 23:37:26
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-19 21:38:03
 */
const USER_INFO = 'userInfo'
const USER_TYPE = 'userType'
const WX_CODE = 'wxCode'
const WX_CONFIG = 'wxConfig'
const CURRENT_ROUTER = 'currentRouter'

// 设置登录类型： 会员1 or 代理2
export const setUserType = (userType) => {
  sessionStorage.setItem(USER_TYPE, userType)
}

// 获取登录类型： 会员1 or 代理2
export const getUserType = () => {
  return sessionStorage.getItem(USER_TYPE)
}

/**
 * 获取用户信息
 * @returns {string}
 */
export const getUserInfo = () => {
  return JSON.parse(sessionStorage.getItem(USER_INFO))
}

/**
 * 设置用户登录的信息
 * @param {object} userInfo
 */
export const setUserInfo = (userInfo) => {
  return sessionStorage.setItem(USER_INFO, JSON.stringify(userInfo))
}

/**
 * 删除用户登录的信息
 */
export const deleteUserInfo = () => {
  return sessionStorage.removeItem(USER_INFO)
}

/**
 * 设置微信code
 * @param {object} userInfo
 */
export const setWxCode = (code) => {
  return sessionStorage.setItem(WX_CODE, code)
}

/**
 * 获取微信code
 */
export const getWxCode = () => {
  return sessionStorage.getItem(WX_CODE)
}

/**
 * 设置微信code
 * @param {object} userInfo
 */
export const setWxConfig = (configData) => {
  console.log(configData)
  sessionStorage.setItem(WX_CONFIG, JSON.stringify(configData))
}

/**
 * 获取微信code
 */
export const getWxConfig = () => {
  return JSON.parse(sessionStorage.getItem(WX_CONFIG))
}
