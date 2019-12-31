<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime : 2019-12-21 22:59:22
 * @LastEditors  : 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-nobg share-page">
    <Header :title="userType*1===1?'会员邀请':'代理邀请'"/>
    <section class="content-box">
      <div class="share-img-box">
        <img class="share-img" :src="configShareData.imgUrl" alt="分享图片为空">
      </div>
      <div class="invite-btn-box">
        <h3>分享图片至</h3>
        <div class="share-type-box" @click="toShare">
          <img src="@/assets/images/qq (1).png" alt="">
          <img src="@/assets/images/wechat.png" alt="">
          <img src="@/assets/images/circle_friends.png" alt="">
        </div>
      </div>
    </section>
    <div class="guidance-box" v-if="showGuidance" @click="showGuidance=false">
      <img src="@/assets/images/sherr_bg_promt.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getShareParams } from '@/api/user'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      showGuidance: false,
      configShareData: {},
      isConfig: false
    }
  },
  computed: mapState([
    'userType'
  ]),
  mounted () {
    getShareParams({
      shareTempId: this.$route.query.tempId
    }).then(res => {
      this.configShareData = res.data
      this.setConfigShareData(res.data)
    })
  },
  methods: {
    recharge (name, title) {
      this.$toast(title)
    },
    // 配置分享信息
    setConfigShareData (shareData) {
      let _this = this
      window.wx.ready(function () { // 需在用户可能点击分享按钮前就先调用
        window.wx.updateAppMessageShareData({
          title: shareData.title, // 分享标题
          desc: shareData.desc, // 分享描述
          link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
            // 设置成功
            _this.showGuidance = false
          }
        })
        window.wx.updateTimelineShareData({
          title: shareData.title, // 分享标题
          link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
            // 设置成功
            _this.showGuidance = false
          }
        })
        window.wx.onMenuShareTimeline({
          title: shareData.title, // 分享标题
          link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
          // 用户点击了分享后执行的回调函数
          }
        })
        window.wx.onMenuShareAppMessage({
          title: shareData.title, // 分享标题
          desc: shareData.desc, // 分享描述
          link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareData.imgUrl, // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户点击了分享后执行的回调函数
          }
        })
      })
    },
    toShare () {
      this.showGuidance = true
    }
  }
}
</script>
<style lang="scss">
.share-page {
  .content-box{
    padding: px2rem(34);
    width: 100%;
    .share-img-box{
      text-align: center;
      .share-img{
        height: px2rem(712);
      }
    }
    .invite-btn-box{
      margin-top: px2rem(40);
      h3{
        font-size: px2rem(30);
      }
      .share-type-box{
        padding-top: px2rem(40);
        width: px2rem(372);
        img{
          width: px2rem(80);
          height: px2rem(80);
          margin-right: px2rem(44);
        }
      }
    }
  }
  .guidance-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000000;
    background: rgba(100,100,100,0.6);
    img{
      width: 100%;
    }
  }
}
</style>
