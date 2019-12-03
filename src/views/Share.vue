<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-03 01:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-nobg share-page">
    <Header title="会员邀请"/>
    <section class="content-box">
      <div class="share-img-box">
        <img class="share-img" src="@/assets/images/login_bg.png" alt="">
      </div>
      <div class="invite-btn-box">
        <h3>分享图片至</h3>
        <div class="share-type-box">
          <img src="@/assets/images/qq (1).png" alt="">
          <img src="@/assets/images/wechat.png" alt="">
          <img src="@/assets/images/circle_friends.png" alt="">
        </div>
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
    recharge (name, title) {
      this.$toast(title)
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
      .share-img{
        width: 100%;
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
        img{
          width: px2rem(80);
          height: px2rem(80);
          margin-right: px2rem(44);
        }
      }
    }
  }
}
</style>
