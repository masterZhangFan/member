<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-13 00:54:46
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
            <div class="right-box">
              <van-field
                v-model="userCommissionData.alipayRealname"
                required
                clearable
                label="姓名"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
              />
            </div>
          </li>
          <li>
            <div class="right-box">
              <van-field
                  v-model="userCommissionData.alipayAccount"
                  required
                  clearable
                  label="支付宝账号"
                  placeholder="请输入支付宝账号"
                  @click-right-icon="$toast('question')"
                />
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
import { setUserCommissionSet, getUserCommissionSet } from '@/api/pay'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      userCommissionData: {
        alipayRealname: '',
        alipayAccount: ''
      }
    }
  },
  created () {
    getUserCommissionSet().then(res => {
      if (!res.data) {
        this.$toast('支付宝信息为空，请先设置账号信息')
      } else {
        this.userCommissionData = res.data
      }
    })
  },
  methods: {
    submitApply () {
      setUserCommissionSet(this.userCommissionData).then(res => {
        this.$toast('设置成功')
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
