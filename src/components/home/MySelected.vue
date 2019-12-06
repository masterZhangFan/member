<!--
 * @Author: 尼大人
 * @Date: 2019-12-05 00:54:51
 * @LastEditors: 尼大人
 * @LastEditTime: 2019-12-06 02:14:49
 -->

<template>
  <div class="right">
    <van-field @click='showSelect' readonly v-model="value" placeholder="请输入提现金额"/>
    <div v-show="showUser" class="selecte-item-box">
      <span v-for="(item,index) in 2" :key="index" @click="showUser=false">12356</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelected',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showUser: false,
      value: '1'
    }
  },
  methods: {
    showSelect (flag) {
      this.showUser = flag
    },
    onClickRight () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.van-field.van-cell{
  padding: 0;
  overflow: hidden;
  color: #323233;
  font-size: px2rem(28);
  height: px2rem(60);
  line-height: px2rem(60);
  padding: 0 px2rem(50) 0 px2rem(20);
}
.right {
  border: 1px solid #ddd;
  width: px2rem(320);
  border-radius: px2rem(8);
  position: relative;
  &::after {
    position: absolute;
    top: 50%;
    right: px2rem(16);
    margin-top: px2rem(-5);
    border: 3px solid;
    border-color: transparent transparent currentColor currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: 0.8;
    content: "";
  }
  .selecte-item-box {
    @include flex(flex-start, flex-start, column);
    position: absolute;
    top: px2rem(61);
    z-index: 100000;
    background: #efefef;
    left: -1px;
    right: -1px;
    padding: 0 px2rem(20);
    max-height: px2rem(400);
    overflow: auto;
    span {
      width: 100%;
    }
  }
}
</style>
