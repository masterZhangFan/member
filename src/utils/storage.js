/*
 * @Author: 尼大人
 * @Date: 2019-12-10 23:37:26
 * @LastEditors: 尼大人
 * @LastEditTime: 2019-12-12 22:28:40
 */
const USER_INFO = 'userInfo'
const USER_TYPE = 'userType'
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

/************************************************************************************
 * 关于路由SessionStorage储存
 */

/**
 * 获取路由SessionStorage储存
 * @returns {string}
 */
export const getSessionStorage = () => {
  return sessionStorage.getItem(CURRENT_ROUTER)
}

/**
 * 设置路由SessionStorage储存
 * @param {string}
 */
export const setSessionStorage = (routeUrl) => {
  sessionStorage.setItem(CURRENT_ROUTER, routeUrl)
}
