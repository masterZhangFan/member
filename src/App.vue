<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 12:08:54
 * @LastEditTime: 2019-12-01 22:52:11
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
export default {
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
  position: relative;;
  max-width: 1200px;
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
