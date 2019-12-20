<!--
 * @Author: 尼大人
 * @Date: 2019-12-05 00:54:51
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-21 01:13:34
 -->

<template>
  <div class="rule-content-box">
    <h3 class="title w100">会员权益和规则</h3>
    <div class="content-box w100">
      <div v-html="rules"></div>
    </div>
    <div class="btn-box w100">
      <van-button class="invite-btn" round type="primary" size="large" @click="$router.push('/share')">知道了</van-button>
    </div>
  </div>
</template>

<script>
import { getSysConfig } from '@/api/system'
export default {
  name: 'Rules',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    rules: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  created () {},
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
