<!--
 * @Author: 尼大人
 * @Date: 2019-12-05 00:54:51
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-21 18:04:58
 -->

<template>
  <img @click="loginOut" class="login-out" src="@/assets/images/loginout.svg" alt="">
</template>

<script>
import { clearData, getUserType } from '@/utils/storage'
export default {
  name: 'LoginOut',
  props: {

  },
  data () {
    return {

    }
  },
  created () {},
  methods: {
    loginOut () {
      clearData()
      this.$router.replace(`/login?type=${getUserType()}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .w100{
    width: 100%;
  }
  .rule-content-box{
    width: 100%;
    height: 100%;
    @include flex(flex-start,flex-start,column);
    .title{
      text-align: center;
      font-size: px2rem(28);
      font-weight: bold;
      padding: px2rem(30) 0;
    }
    .content-box{
      padding: px2rem(0) px2rem(40);
      flex: 1;
      overflow: scroll;
    }
    .btn-box{
      height: px2rem(164);
      text-align: center;
      line-height: px2rem(164);
      .invite-btn{
        width: px2rem(484);
        height: px2rem(80);
        line-height: px2rem(80);
        color: #fff;
        font-size: px2rem(30);
      }
    }
  }
</style>
