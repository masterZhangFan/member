<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-07 01:33:32
 * @LastEditors: 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="page-container-nobg invite-agents-page">
    <Header title="会员邀请"/>
    <section class="content-box-bottom">
      <div class="invite-type-box">
        <h3>选择模板</h3>
        <div class="type-box">
          <span :class="{'item-type': true, 'item-active': index==0}" :key="index" v-for="(item,index) in 4">200元</span>
        </div>
      </div>
      <div class="invite-btn-box">
        <van-button class="invite-btn" round type="primary" size="large" @click="$router.push('/share')">下一步</van-button>
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
.invite-agents-page {
  .content-box-bottom{
    width: 100%;
    .invite-type-box{
      padding: px2rem(0) px2rem(34);
      h3{
        font-size: px2rem(30);
        padding: px2rem(30) 0;
      }
      .type-box{
        @include flex(space-between);
        flex-wrap: wrap;
        .item-type{
          width: 48%;
          height: px2rem(180);
          text-align: center;
          line-height: px2rem(180);
          border: 1px solid rgb(228,222,219);
          border-radius: px2rem(8);
          margin-bottom: px2rem(20);
          font-size: px2rem(40);
          &.item-active{
            border-color: $ft--color;
            color:  $ft--color;
          }
        }
      }
    }
    .invite-btn-box{
      position: fixed;
      bottom: px2rem(96);
      left: 50%;
      width: px2rem(484);
      margin-left: px2rem(-242);
      .invite-btn{
        height: px2rem(80);
        line-height: px2rem(80);
        color: #fff;
        font-size: px2rem(30);
      }
    }
  }
}
</style>
