<!--
 * @Author: your name
 * @Date: 2019-12-02 22:01:56
 * @LastEditTime: 2019-12-03 00:06:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \member\src\components\header\Index.vue
 -->
<template>
  <van-nav-bar
    :title="title"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  name: 'RouteLoading',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {

    },
    onClickRight () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
