<!--
 * @Author: your name
 * @Date: 2019-12-01 22:32:10
 * @LastEditTime : 2019-12-21 17:54:51
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\src\views\Login.vue
 -->
<template>
  <div class="login-box">
    <div class="login-logo-box">
      <div class="logo-img">
        <img class="logo" src="@/assets/images/app-logo.png" alt="">
      </div>
      <div class="title">{{$route.query.type * 1==1?"会员登录":"代理登录"}}</div>
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
        <van-button :disabled='!loginData.code||!loginData.phoneNumber' class="login-btn" round type="primary" size="large" @click="login">登 录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { login, getPhoneCode, getUserData } from '@/api/user'
import { getOpenId } from '@/api/system'
import { setUserInfo, setUserType, getUserType, setToken, getToken, setOpenId, _getOpenId } from '@/utils/storage'

export default {
  data () {
    return {
      disabled: false,
      countTime: 60,
      waitingTime: 0,
      timmer: '',
      loginData: {
        'code': '',
        'loginType': '',
        'openId': '',
        'phoneNumber': ''
      }
    }
  },
  computed: mapState([
    'token'
  ]),
  created () {
    this.isNeedLogin()
  },
  mounted () {

  },
  methods: {
    ...mapActions(['setUserInfo', 'setUserType', 'setToken']),
    authorization () {
      let url = window.encodeURIComponent(window.location.href)
      // gh_ca7d929dcac2
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd812cd5b3a0f2199&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=WX&connect_redirect=1#wechat_redirect`
    },
    // 判断是否需要登陆
    isNeedLogin () {
      // 登录type不等于localstorage里面的type就重新登录
      if (this.$route.query.type * 1 !== getUserType() * 1) {
        if (!this.$route.query.code) {
          // this.authorization()
        }
        getOpenId({
          code: this.$route.query.code
        }).then(res => {
          this.loginData.openId = res.data
          setOpenId(res.data)
        })
      } else {
        if (getToken() && getToken() !== 'null') {
          getUserData().then(res => {
            setUserInfo(res.data) // 存本地
            this.setUserInfo(res.data) // 存vuex
            if (this.$route.query.type * 1 === 1) {
              this.$router.replace('/home-member')
            } else {
              this.$router.replace('/home-agent')
            }
          })
        }
      }
    },
    login () {
      this.loginData.loginType = this.$route.query.type
      if (!this.loginData.openId) { // 退出再登录去历史openID
        this.loginData.openId = _getOpenId()
      }
      setUserType(this.$route.query.type)// 存本地
      this.setUserType(this.$route.query.type)// vuex
      login(this.loginData).then(res => {
        setUserInfo(res.data) // 存本地
        this.setUserInfo(res.data) // 存vuex
        setToken(res.data.token)
        this.setToken(res.data.token) // 存vuex
        if (this.$route.query.type * 1 === 1) {
          this.$router.replace('/home-member')
        } else {
          this.$router.replace('/home-agent')
        }
      })
    },
    getPhoneCode () {
      if (!this.disabled) {
        this.runTimmer()
        getPhoneCode({
          phoneNumber: this.loginData.phoneNumber
        }).then(res => {
          if (res.status * 1 === 0) {
            this.$toast('发送成功！')
          } else {
            window.clearInterval(this.timmer)
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
        line-height: px2rem(80);
        color: #fff;
      }
    }
  }
}
</style>
