<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 12:08:54
 * @LastEditTime : 2019-12-21 17:39:35
 * @LastEditors  : 尼大人
 -->
<template>
  <div id="app">
    <transition name="slide-left">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getPayConfig } from '@/api/system'
import { getUserInfo, getUserType } from '@/utils/storage'
export default {
  created () {
    if (getUserInfo()) {
      this.setUserInfo(getUserInfo())
      this.setUserType(getUserType())
    }
    getPayConfig({
      // url: 'http://mp.scxcyb.cn/login?type=2'
      url: window.location.href
    }).then(res => {
      window.wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appid, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
      })
    })
  },
  mounted () {

  },
  methods: {
    ...mapActions(['setUserInfo', 'setUserType']),
    loginOut () {
      console.log(123)
    }
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
