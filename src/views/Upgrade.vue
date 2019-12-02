<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-03 01:06:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-bg recharge-page">
    <Header title="会员升级"/>
    <section class="content-box-top">
      <div class="top-box">
        <span class="current-level">当前等级</span>
        <span class="level">
          <img src="@/assets/images/icon_masonry.svg" alt="">
          初级会员
        </span>
      </div>
      <div class="money-tip">升级到高级会员仅需￥<span class="money-number">299</span></div>
    </section>
    <section class="content-box-bottom">
      <div class="recharge-page-bottom">
        <ul>
          <li>
            <img class="left-logo" src="@/assets/images/pay-wechat.png" alt="">
            <div class="right-box">
              <span>微信支付</span>
              <img class="micon-right" src="@/assets/images/icon_selected.png" alt="">
            </div>
          </li>
          <li>
            <img class="left-logo" src="@/assets/images/pay-alipay.png" alt="">
            <div class="right-box">
              <span>支付宝</span>
              <img class="micon-right" src="@/assets/images/icon_unselected.png" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="recharge-btn-box">
        <van-button class="recharge-btn" round type="primary" size="large" @click="login">立 即 充 值</van-button>
        <div class="rules">《高级会员权益》</div>
      </div>

    </section>
  </div>
</template>

<script>
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {

    }
  },
  methods: {
    onClick (name, title) {
      this.$toast(title)
    }
  }
}
</script>
<style lang="scss">
.recharge-page {
  .content-box-top{
    padding-top: px2rem(80);
    color: rgb(254,227,216);
    font-size: px2rem(28);
    .top-box{
      @include flex();
        .current-level{
          margin-right: px2rem(10);
        }
        .level{
          @include flex;
          width: px2rem(158);
          height: px2rem(43);
          border-radius: px2rem(18);
          background: url('~@/assets/images/level_bg.png') no-repeat left top;
          background-size: contain;
          font-size: px2rem(20);
          color: #333;
          margin-right: px2rem(10);
          color: #b4b4b4;
          img{
            width: px2rem(30);
            margin-right: px2rem(8);
          }
        }
    }
    .money-tip{
      text-align: center;
      margin-top: px2rem(20);
      .money-number{
        font-size: px2rem(48);
      }
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
          margin-bottom: px2rem(66);
          .left-logo{
            width: px2rem(36);
            height: px2rem(36);
          }
          .right-box{
            @include flex(space-between, center);
            flex: 1;
            position: relative;
            margin-left: px2rem(18);
            &::after{
              content: "";
              display: block;
              position: absolute;
              width: 100%;
              height: 1px;
              background: #f6f3f1;
              bottom: px2rem(-20);
            }
            span{
              font-size: px2rem(30);
              color: #3e3e3e;
            }
            .micon-right{
              height: px2rem(28);
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
        color: #fff;
        font-size: px2rem(30);
      }
      .rules{
          color: #2d7be5;
          font-size: px2rem(24);
          margin-top: px2rem(20);
          text-align: center;
          padding: px2rem(20) 0;
        }
    }

  }
}
</style>
