<!--
 * @Author: your name
 * @Date: 2019-12-02 23:54:53
 * @LastEditTime: 2019-12-07 01:45:29
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
        <MySelected :dataList='memberNotAgentList' type='1' @setValue='setValue' dataKey='userId' mypalceholder='请选着用户' />
      </section>
      <section class="item-box">
        <span class="left">代理类别</span>
        <MySelected :dataList='agentTypeList' type='1' @setValue='setValue' dataKey='delegateTypeId' mypalceholder='请选着代理类别' />
      </section>
      <section class="item-box">
        <span class="left">返现金额</span>
        <div class="right">
          <van-field v-model="addAgentInfoData.cashBackAmount" placeholder="请输入返现金额" />
        </div>
      </section>
      <section class="item-box">
        <span class="left">身份证正面</span>
        <MySelected type='2' @setValue='setValue' dataKey='idCardFrontPic' mypalceholder='请上传身份证正面' />
      </section>
      <section class="item-box">
        <span class="left">身份证反面</span>
        <MySelected type='2' @setValue='setValue' dataKey='idCardBackPic' mypalceholder='请上传身份证反面' />
      </section>
      <section class="item-box">
        <span class="left">营业执照</span>
        <MySelected type='2' @setValue='setValue' dataKey='businessLicensePic' mypalceholder='请上传营业执照' />
      </section>
      <section class="item-box">
        <span class="left">状　　态</span>
        <MySelected :dataList='statusArr' type='1' @setValue='setValue' dataKey='delegateEnbale' mypalceholder='请选着状态' />
      </section>
    </section>
    <section class='bottom-box'>
      <van-button class="bottom-btn-cancel my-btn" round type="primary" @click="$emit('setShow',false)">取 消</van-button>
      <van-button class="bottom-btn-confirm my-btn" round type="primary"  @click="submitAddAgent">确认</van-button>
    </section>
  </div>
</template>

<script>
import { setAgentInfo, getAgentTypeList } from '@/api/agent'
import { getMemberInfoNotIncludeDelegate } from '@/api/member'
import MySelected from '@/components/home/MySelected.vue'
export default {
  components: {
    MySelected
  },
  data () {
    return {
      memberNotAgentList: [],
      agentTypeList: [],
      statusArr: [{
        _label: '启用',
        _value: true
      }, {
        _label: '停用',
        _value: false
      }],
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      value: '123',
      addAgentInfoData: {
        userId: '',
        delegateTypeId: '',
        cashBackAmount: '',
        idCardFrontPic: '',
        idCardBackPic: '',
        businessLicensePic: '',
        delegateEnbale: ''
      }
    }
  },
  created () {
    this.getParamsList()
  },
  methods: {
    getParamsList () {
      getMemberInfoNotIncludeDelegate().then(res => {
        if (res.data.length) {
          this.memberNotAgentList = res.data.map(item => {
            item._label = item.nickname
            item._value = item.userId
            return item
          })
        } else {
          this.memberNotAgentList = []
        }
      })
      getAgentTypeList().then(res => {
        if (res.data.length) {
          this.agentTypeList = res.data.map(item => {
            item._label = item.delegateTypeName
            item._value = item.delegateTypeId
            return item
          })
        } else {
          this.agentTypeList = []
        }
      })
    },
    login () {},
    submitAddAgent () {
      setAgentInfo(this.addAgentInfoData).then(res => {
        if (res.status * 1 === 0) {
          this.$emit('setShow', false)
        }
      })
    },
    setValue (key, value) {
      this.addAgentInfoData[key] = value
    }
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
