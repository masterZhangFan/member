<!--
 * @Author: 尼大人
 * @Date: 2019-12-05 00:54:51
 * @LastEditors: 尼大人
 * @LastEditTime: 2019-12-05 01:20:25
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
      this.$router.back()
    },
    onClickRight () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
