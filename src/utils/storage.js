/*
 * @Author: 尼大人
 * @Date: 2019-12-10 23:37:26
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-21 17:59:35
 */
import Cookies from 'js-cookie'

const USER_INFO = 'userInfo'
const USER_TYPE = 'userType'
const TOKEN = 'my_token'
const OPENID = 'zxb_openId'
const CURRENT_ROUTER = 'currentRouter'

// 设置登录类型： 会员1 or 代理2
export const setUserType = (userType) => {
  localStorage.setItem(USER_TYPE, userType)
}

// 获取登录类型： 会员1 or 代理2
export const getUserType = () => {
  return localStorage.getItem(USER_TYPE)
}

/**
 * 获取用户信息
 * @returns {string}
 */
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USER_INFO))
}

/**
 * 设置用户登录的信息
 * @param {object} userInfo
 */
export const setUserInfo = (userInfo) => {
  return localStorage.setItem(USER_INFO, JSON.stringify(userInfo))
}

/**
 * 删除用户登录的信息
 */
export const deleteUserInfo = () => {
  return localStorage.removeItem(USER_INFO)
}

/**
 * 设置TOKEN
 * @param {object} TOKEN
 */
export const setToken = (token) => {
  return Cookies.set(TOKEN, token)
}

/**
 * 获取TOKEN
 */
export const getToken = () => {
  return Cookies.get(TOKEN)
}

/**
 * 设置OPENID
 * @param {object} TOKEN
 */
export const setOpenId = (openId) => {
  return Cookies.set(OPENID, openId)
}

/**
 * 获取TOKEN
 */
export const _getOpenId = () => {
  return Cookies.get(OPENID)
}

/**
 * 退出登录时清空出了openID以外的所以数据
 */
export const clearData = () => {
  Cookies.remove(TOKEN)
  localStorage.removeItem(USER_INFO)
}
