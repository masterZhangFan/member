<!--
 * @Author: your name
 * @Date: 2019-12-01 22:32:10
 * @LastEditTime: 2019-12-05 00:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\src\views\Login.vue
 -->
<template>
  <div class="login-box">
    <div class="login-logo-box">
      <div class="logo-img">
        <img class="logo" src="@/assets/images/qq (1).png" alt="">
      </div>
      <div class="title">会员登录</div>
    </div>
    <div class="login-in-box">
      <div class="phone">
        <img src="@/assets/images/phone.svg" alt="">
        <input v-model="loginData.phoneNumber" type="text" placeholder="请输入手机号">
      </div>
      <div class="code">
        <img src="@/assets/images/phone.svg" alt="">
        <input v-model="loginData.code" type="text" placeholder="请输入验证码">
        <span :class="{'get-code': true, 'disabled': disabled}" @click="getPhoneCode">{{disabled?waitingTime:'获取验证码'}}</span>
      </div>
      <div class="login-btn-box">
        <van-button class="login-btn" round type="primary" size="large" @click="login">登 录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { login, getPhoneCode } from '@/api/user'

export default {
  data () {
    return {
      disabled: false,
      countTime: 60,
      waitingTime: 0,
      timmer: '',
      loginData: {
        'code': '1234',
        'loginType': 0,
        'openId': '11111',
        'phoneNumber': '15928137520'
      }
    }
  },
  methods: {
    login () {
      login(this.loginData).then(res => {
        this.$router.push('/home')
      })
      this.$router.push('/home')
    },
    getPhoneCode () {
      if (!this.disabled) {
        this.runTimmer()
        getPhoneCode({
          phoneNumber: '15928137520'
        }).then(res => {
          this.disabled = false
          window.clearInterval(this.timmer)
          if (res.status * 1 === 0) {

          }
        })
      }
    },
    runTimmer () {
      this.waitingTime = this.countTime * 1
      this.disabled = true
      if (this.timmer) {
        window.clearInterval(this.timmer)
      }
      this.timmer = setInterval(() => {
        this.waitingTime--
        if (this.waitingTime === 0) {
          window.clearInterval(this.timmer)
          this.disabled = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/login_bg.png") no-repeat;
  background-size: cover;
  background-position: top center;
  .login-logo-box {
    position: absolute;
    top: px2rem(320);
    text-align: center;
    width: 100%;
    color: $ft--color;
    .logo-img {
      line-height: 0;
      .logo {
        width: px2rem(152);
        height: px2rem(152);
      }
    }
    .title {
      letter-spacing: 0.1em;
      margin-top: px2rem(26);
      font-size: px2rem(30);
    }
  }
  .login-in-box {
    width: px2rem(484);
    position: absolute;
    top: px2rem(600);
    left: 50%;
    margin-left: px2rem(-242);
    .phone,
    .code {
      @include flex(flex-start);
      width: 100%;
      padding-bottom: px2rem(12);
      border-bottom: 2px solid $ft--color;
      img {
        width: px2rem(30);
      }
      input {
        outline: none;
        border: none;
        font-size: px2rem(28);
        margin-left: px2rem(20);
        // background: yellow;
        &::placeholder {
          color: #2f2e41;
          font-size: px2rem(28);
          color: $cp;
          line-height: px2rem(40);
        }
      }
      &.code {
        width: px2rem(320);
        position: relative;
        margin-top: px2rem(96);
        .get-code {
          position: absolute;
          bottom: px2rem(0);
          right: px2rem(-164);
          width: px2rem(152);
          border-radius: px2rem(20);
          line-height: px2rem(60);
          text-align: center;
          background: $ft--color;
          font-size: px2rem(24);
          color: #fff;
          &.disabled{
            opacity: 0.4;
          }
        }
      }
    }
    .login-btn-box{
      margin-top: px2rem(130);
      .login-btn{
        height: px2rem(80);
        color: #fff;
      }
    }
  }
}
</style>
