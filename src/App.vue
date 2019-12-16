<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 12:08:54
 * @LastEditTime: 2019-12-03 01:18:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { getPayConfig } from '@/api/system'
export default {
  created () {
    getPayConfig().then(res => {
      window.wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appid, // 必填，公众号的唯一标识
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '', // 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
      })
    })
  },
  mounted () {

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: px2rem(28);
  position: relative;
  max-width: px2rem(750);
  margin: 0 auto;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
