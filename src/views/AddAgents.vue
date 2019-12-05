<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-03 01:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member\src\views\UpgradeRecharge.vue
 -->
<template>
  <div class="add-agents-page">
    <header>添加代理</header>
    <section>
      <section>
        <span>选择用户</span>
        <!-- <van-field v-model="value" placeholder="请输入提现金额" /> -->
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
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
.add-agents-page {
  width: px2rem(580);
  height: px2rem(900);
  border-radius: px2rem(10);
}
</style>
