<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime : 2019-12-21 14:28:21
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-bg recharge-page">
    <Header title="账户提现"/>
    <section class="content-box-top">
      <div class="top-box">￥<span class="current-level">{{userInfo.cash}}</span></div>
      <div class="money-tip">每月25号后可提现上月内确认收货的订单佣金</div>
    </section>
    <section class="content-box-bottom">
      <div class="recharge-page-bottom">
        <ul>
          <li>
            <span class="left-title">提现金额</span>
            <div class="right-box">
              <van-field v-model="value" type='number' @input="inputValue" placeholder="请输入提现金额" />
            </div>
          </li>
          <li>
            <span class="left-title">提现到账</span>
            <div class="right-box">
              <span class="right-box-left"><img class="micon-right" src="@/assets/images/pay-alipay.png" alt="">支付宝</span>
              <span class="right-box-right" @click="$router.push('/setting-count')">设置</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="recharge-btn-box">
        <van-button class="recharge-btn" round type="primary" size="large" :disabled='!value' @click="userCommissionApplay">提 交 申 请</van-button>
      </div>

    </section>
  </div>
</template>

<script>
import { userCommissionApplay, getUserCommissionSet } from '@/api/pay'
import { getUserInfo } from '@/utils/storage'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      value: '',
      userInfo: {},
      alipayData: {
        alipayRealname: '',
        alipayAccount: '',
        amount: ''
      }
    }
  },
  created () {
    this.userInfo = getUserInfo() || {}
    getUserCommissionSet().then(res => {
      if (res.data) {
        this.userCommissionData = res.data
        this.alipayData.alipayRealname = res.data.alipayRealname
        this.alipayData.alipayAccount = res.data.alipayAccount
      } else {
        this.$toast('请选设置提现账户')
      }
    })
  },
  methods: {
    userCommissionApplay () {
      this.alipayData.amount = this.value * 1
      userCommissionApplay(this.alipayData).then(res => {

      })
    },
    inputValue () {
      let regStr = /^[1-9]\d*$/
      if (regStr.test(this.value)) {
        if (this.value * 1 > this.userInfo.cash * 1) {
          this.value = this.userInfo.cash
          this.$toast('提现金额不能大于可取金额')
        }
      } else {
        this.$toast('请输入大于0数字')
        this.value = ''
      }
    }
  }
}
</script>
<style lang="scss">
.recharge-page {
  .content-box-top{
    padding-top: px2rem(90);
    color: rgb(254,227,216);
    text-align: center;
    .top-box{
      .current-level{
        font-size: px2rem(48);
        margin-left: px2rem(4);
      }
    }
    .money-tip{
      margin-top: px2rem(20);
      font-size: px2rem(24);
    }
  }
  .content-box-bottom{
    position: absolute;
    top: px2rem(340);
    left: 0;
    width: 100%;
    .recharge-page-bottom {
      width: 100%;
      padding: px2rem(60) px2rem(34) px2rem(20);
      ul {
        li {
          @include flex(flex-start, center);
          margin-bottom: px2rem(40);
          .left-title{
            width: px2rem(120);
            line-height: px2rem(60);
            font-size: px2rem(28);
          }
          .right-box{
            @include flex(space-between, center);
            flex: 1;
            position: relative;
            margin-left: px2rem(18);
            font-size: px2rem(24);
            .van-cell{
              padding: 0;
              line-height: px2rem(60);
            }
            .right-box-left{
              @include flex(flex-start, center);
              font-size: px2rem(30);
              color: #3e3e3e;
              .micon-right{
                width: px2rem(40);
                height: px2rem(40);
                margin-right: px2rem(10);
              }
            }
            .right-box-right{
              height: px2rem(28);
              color: rgb(44,141,222);
              font-size: px2rem(28);
            }
          }
        }
      }
    }
    .recharge-btn-box{
      width: px2rem(484);
      margin: 0 auto;
      .recharge-btn{
        height: px2rem(80);
        line-height: px2rem(80);
        color: #fff;
        font-size: px2rem(30);
      }
    }

  }
}
</style>
