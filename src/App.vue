<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 12:08:54
 * @LastEditTime : 2019-12-31 23:29:23
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
import { getUserInfo, getUserType } from '@/utils/storage'
export default {
  created () {
    if (getUserInfo()) {
      this.setUserInfo(getUserInfo())
      this.setUserType(getUserType())
    }
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
