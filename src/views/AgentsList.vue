<template>
  <div class="page-container-nobg fans-list-page">
    <Header title="代理列表"/>
    <section>
      <div class="item-fans-box" v-for="(item,index) in agentList" :key="index">
        <img class="header-img" :src="imgBaseUrl+item.icon" alt="">
        <div class="content-info">
          <div class="top">
            <span class="phone">{{item.phone}}</span>
            <span class="level">
              <img src="@/assets/images/icon_masonry.svg" alt="">
              {{item.delegateTypeName}}
            </span>
          </div>
          <div class="bottom">
            <!-- <span>返现金额：{{item.cashBackAmount}}</span> -->
            <span class="mr10">收益：{{item.moneyTotal}}</span>
            <span>粉丝数：{{item.fans}}</span>
          </div>
        </div>
      </div>
      <div class="no-data-tips" v-if="!agentList.length">无代理数据，赶快去邀请把...</div>
    </section>
  </div>
</template>

<script>
import { getAgentList } from '@/api/agent'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      agentList: [],
      imgBaseUrl: process.env.VUE_APP_IMG_API
    }
  },
  created () {
    this.getAgentList()
  },
  methods: {
    onClick (name, title) {
      this.$toast(title)
    },
    getAgentList () {
      getAgentList().then(res => {
        this.agentList = res.data
      })
    }
  }
}
</script>
<style lang="scss">
.fans-list-page {
  .mr10{
    margin-right: px2rem(20);
  }
  .van-tabs__wrap{
    height: px2rem(80);
    position: sticky;
    top: px2rem(92);
    .van-tab{
      padding: 0 px2rem(10);
      color: #818181;
      font-size: px2rem(28);
      line-height: px2rem(80);
    }
    .van-tabs__nav{
      background: #faf4ef;
      .van-tab--active{
        color: #ff8939;
      }
    }
    .van-tabs__line{
      width: px2rem(40)!important;
      height: px2rem(4)!important;
      background-color: #ff8939;
    }
  }
  .item-fans-box{
    @include flex(flex-start,flex-end);
    height: px2rem(122);
    padding: 0 px2rem(40);
    .header-img{
      width: px2rem(88);
      border-radius: 50%;
    }
    .content-info{
      @include flex(center,flex-start,column);
      height: px2rem(80);
      border-bottom: 1px solid rgb(247,244,242);
      flex: 1;
      padding-bottom: px2rem(15);
      margin-left: px2rem(12);
      .top{
        @include flex(flex-start,center);
        .phone{
          margin-right: px2rem(10);
        }
        .level{
          @include flex;
          width: px2rem(198);
          height: px2rem(48);
          border-radius: px2rem(18);
          background: url('~@/assets/images/level_bg.png') no-repeat left top;
          background-size: 100% 100%;
          font-size: px2rem(20);
          color: #333;
          margin-right: px2rem(10);
          color: #b4b4b4;
          img{
            width: px2rem(30);
            margin-right: px2rem(8);
          }
        }
      }
      .bottom{
        margin-top: px2rem(13);
        font-size: px2rem(24);
        color: #b4b4b4;
      }
    }
  }
}
</style>
