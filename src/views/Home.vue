<template>
  <div class="page-container home-page">
    <div class="home-page-top">
      <div class="user-base-info">
        <img class="header-img" src="@/assets/images/qq (1).png" alt="">
        <div class="phone">15928137520</div>
        <div class="level" @click="$router.push('/upgrade')">
          <span><img src="@/assets/images/icon_masonry.svg" alt=""> 初级会员</span>
          <img class="micon-up" src="@/assets/images/icon_masonry.svg" alt="">
        </div>
        <div class="rules">《会员权益和规则》</div>
      </div>
      <div class="user-member-info">
        <div class="item-info" @click="$router.push('/fans-list')">
          <span class="title">粉丝</span>
          <span class="value">335</span>
        </div>
        <div class="item-info">
          <span class="title">余额</span>
          <span class="value">5.2</span>
          <span class="todo" @click="$router.push('/recharge')">充值</span>
        </div>
        <div class="item-info">
          <span class="title">可提现金额</span>
          <span class="value">5.2</span>
          <span class="todo">提现</span>
        </div>
        <div class="item-info">
          <span class="title">话费</span>
          <span class="value">335</span>
        </div>
      </div>
    </div>
    <div class="home-page-bottom">
      <ul>
        <li>
          <img class="left-logo" src="@/assets/images/icon_invite.svg" alt="">
          <div class="right-box">
            <span>代理邀请</span>
            <img class="micon-right" src="@/assets/images/icon_right.svg" alt="">
          </div>
        </li>
        <li>
          <img class="left-logo" src="@/assets/images/icon_add_agent.svg" alt="">
          <div class="right-box">
            <span>添加代理</span>
            <img class="micon-right" src="@/assets/images/icon_right.svg" alt="">
          </div>
        </li>
        <li>
          <img class="left-logo" src="@/assets/images/icon_agent_list.svg" alt="">
          <div class="right-box">
            <span>代理列表</span>
            <img  class="micon-right" src="@/assets/images/icon_right.svg" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  position: relative;
  .home-page-top {
    position: absolute;
    top: px2rem(58);
    text-align: center;
    width: 100%;
    color: $ft--color;
    width: px2rem(674);
    left: 50%;
    margin-left: px2rem(-337);
    .user-base-info{
      border-bottom: 1px solid #ff9266;
      padding-bottom: px2rem(16);
      .header-img{
        width: px2rem(124);
        height: px2rem(124);
        border-radius: 50%;
        overflow: hidden;
      }
      .phone{
        font-size: px2rem(26);
        color: #fff;
        margin-top: px2rem(10);
        letter-spacing: 0.05em;
      }
      .level{
        margin-top: px2rem(20);
        @include flex;
        span{
          @include flex;
          width: px2rem(158);
          height: px2rem(43);
          border-radius: px2rem(18);
          background: url('~@/assets/images/level_bg.png') no-repeat left top;
          background-size: contain;
          font-size: px2rem(20);
          color: #333;
          margin-right: px2rem(10);
          img{
            width: px2rem(30);
            margin-right: px2rem(8);
          }
        }
        .micon-up{
          height: px2rem(40);
          width: px2rem(20);
        }
      }
      .rules{
        color: #1d62a3;
        font-size: px2rem(24);
        margin-top: px2rem(20);
      }
    }
    .user-member-info{
      @include flex(space-around,flex-start);
      .item-info{
        @include flex(center,center,column);
        span{
          margin-top: px2rem(20);
          color: #bf6334;
        }
        .value{
          color: #fff;
          font-size: px2rem(32);
        }
        .todo{
          background: #ffcfb4;
          width: px2rem(80);
          height: px2rem(36);
          border-radius: px2rem(18);
          font-size: px2rem(24);
          color: #bf6334;
          line-height: px2rem(36);
        }
      }
    }
  }
  .home-page-bottom {
    position: absolute;
    top: px2rem(540);
    left: 0;
    width: 100%;
    padding: px2rem(48) px2rem(34) px2rem(20);
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
}
</style>
