<template>
  <van-nav-bar
    title="标题"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
export default {
  name: 'RouteLoading',
  props: {
    msg: String
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
