<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-07 02:03:03
 * @LastEditors: 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-nobg binding-page">
    <Header title="绑定支付宝"/>
    <section class="content-box-bottom">
      <div class="recharge-page-bottom">
        <ul>
          <li>
            <span class="left-title">姓名</span>
            <div class="right-box">
              <van-field v-model="value" placeholder="请输入姓名"/>
            </div>
          </li>
          <li>
            <span class="left-title">支付宝账号</span>
            <div class="right-box">
              <van-field v-model="value" placeholder="请输入支付宝账号"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="recharge-btn-box">
        <van-button class="recharge-btn" type="primary" size="large" @click="submitApply">提 交</van-button>
      </div>

    </section>
  </div>
</template>

<script>
import { setUserCommissionSet } from '@/api/pay'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    submitApply () {
      setUserCommissionSet({
        alipayRealname: '',
        alipayAccount: ''
      }).then(res => {

      })
    }
  }
}
</script>
<style lang="scss">
.binding-page {
  .content-box-bottom{
    width: 100%;
    .recharge-page-bottom {
      width: 100%;
      padding: px2rem(60) px2rem(35) px2rem(20);
      ul {
        li {
          @include flex(flex-start, center);
          margin-bottom: px2rem(40);
          .left-title{
            width: px2rem(170);
            line-height: px2rem(60);
            font-size: px2rem(28);
          }
          .right-box{
            @include flex(space-between, center);
            flex: 1;
            position: relative;
            margin-left: px2rem(18);
            font-size: px2rem(24);
          }
        }
      }
    }
    .recharge-btn-box{
      width: px2rem(680);
      margin: 0 auto;
      .recharge-btn{
        height: px2rem(80);
        line-height: px2rem(80);
        color: #fff;
        font-size: px2rem(30);
        border-radius: px2rem(8);
      }
    }

  }
}
</style>
