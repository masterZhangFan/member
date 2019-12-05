<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-06 02:13:19
 * @LastEditors: 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="add-agents-page">
    <header class="header">添加代理</header>
    <section class="content-box">
      <section class="item-box">
        <span class="left">选择用户</span>
        <MySelected type='user' />
      </section>
      <section class="item-box">
        <span class="left">代理类别</span>
        <MySelected type='user' />
      </section>
      <section class="item-box">
        <span class="left">返现金额</span>
        <div class="right">
          <van-field v-model="value" placeholder="请输入提现金额" />
        </div>
      </section>
      <section class="item-box">
        <span class="left">身份证正面</span>
        <MySelected type='user' />
      </section>
      <section class="item-box">
        <span class="left">身份证反面</span>
        <MySelected type='user' />
      </section>
      <section class="item-box">
        <span class="left">营业执照</span>
        <MySelected type='user' />
      </section>
      <section class="item-box">
        <span class="left">状　　态</span>
        <MySelected type='user' />
      </section>
    </section>
    <section class='bottom-box'>
      <van-button class="bottom-btn-cancel my-btn" round type="primary" @click="login">取 消</van-button>
      <van-button class="bottom-btn-confirm my-btn" round type="primary"  @click="login">确认</van-button>
    </section>
  </div>
</template>

<script>
import MySelected from '@/components/home/MySelected.vue'
export default {
  components: {
    MySelected
  },
  data () {
    return {
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      value: '123'
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.van-field.van-cell{
  padding: 0;
  overflow: hidden;
  color: #323233;
  font-size: px2rem(28);
  height: px2rem(60);
  line-height: px2rem(60);
  padding: 0 px2rem(50) 0 px2rem(20);
}
.add-agents-page {
  width: px2rem(580);
  height: px2rem(900);
  border-radius: px2rem(10);
  .header{
    width: 100%;
    height: px2rem(80);
    font-size: px2rem(30);
    background: $ft--color;
    text-align: center;
    line-height: px2rem(80);
    color: #fff;
  }
  .content-box{
    .item-box{
      @include flex(flex-start,center);
      line-height: px2rem(60);
      height: px2rem(60);
      margin-top: px2rem(30);
      .left{
      padding-left: px2rem(40);
        width: px2rem(186);
        text-align: left;
        margin-right: px2rem(24);
      }
      .right {
        border: 1px solid #ddd;
        width: px2rem(320);
        border-radius: px2rem(8);
        .van-field.van-cell{
          padding: 0;
          overflow: hidden;
          color: #323233;
          font-size: px2rem(28);
          height: px2rem(60);
          line-height: px2rem(60);
          padding: 0 px2rem(50) 0 px2rem(20);
        }
      }
    }
  }
  .bottom-box{
    @include flex;
    padding-top: px2rem(46);
    .my-btn{
      width: px2rem(180);
      height: px2rem(62);
      line-height: px2rem(62);
      &.bottom-btn-cancel{
        margin-right: px2rem(80);
      }
    }
  }
}
</style>
