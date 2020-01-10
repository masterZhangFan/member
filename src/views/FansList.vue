<template>
  <div class="page-container-nobg fans-list-page">
    <Header title="粉丝列表"/>
    <section>
      <van-tabs @click="onClick">
        <van-tab title="直属粉丝">
          <div class="item-fans-box" v-for="(item,index) in directlyFansList" :key="index">
            <img class="header-img" :src="imgBaseUrl+item.icon" alt="">
            <div class="content-info">
              <div class="top">
                <span class="phone">{{item.nickname}}</span>
                <span class="level">
                  <img src="@/assets/images/icon_masonry.svg" alt="">
                  {{getLevelName(item.typeOfMembership)}}
                </span>
              </div>
              <div class="bottom">收益：{{item.memberCashBack}}</div>
            </div>
          </div>
          <div class="no-data-tips" v-if="!directlyFansList.length">无直属粉丝...</div>
        </van-tab>
        <van-tab title="推荐粉丝">
          <div class="item-fans-box" v-for="(item,index) in indirectFansList" :key="index">
            <img class="header-img" :src="imgBaseUrl+item.icon" alt="">
            <div class="content-info">
              <div class="top">
                <span class="phone">{{item.nickname}}</span>
                <span class="level">
                  <img src="@/assets/images/icon_masonry.svg" alt="">
                  {{getLevelName(item.typeOfMembership)}}
                </span>
              </div>
              <div class="bottom">收益：{{item.memberCashBack}}</div>
            </div>
          </div>
          <div class="no-data-tips" v-if="!directlyFansList.length">无推荐粉丝...</div>
        </van-tab>
        <van-tab title="裂变粉丝">
          <div class="item-fans-box" v-for="(item,index) in fissionFanList" :key="index">
            <img class="header-img" :src="imgBaseUrl+item.icon" alt="">
            <div class="content-info">
              <div class="top">
                <span class="phone">{{item.nickname}}</span>
                <span class="level">
                  <img src="@/assets/images/icon_masonry.svg" alt="">
                  {{getLevelName(item.typeOfMembership)}}
                </span>
              </div>
              <div class="bottom">收益：{{item.memberCashBack}}</div>
            </div>
          </div>
          <div class="no-data-tips" v-if="!fissionFanList.length">无裂变粉丝...</div>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import { getIndirectFanWithUserId, getDirectlyFanWithUserId, getFissionFanWithUserId } from '@/api/user'
import Header from '@/components/header/Index.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      indirectFansList: [],
      directlyFansList: [],
      fissionFanList: [],
      imgBaseUrl: process.env.VUE_APP_IMG_API
    }
  },
  created () {
    this.getIndirectFanWithUserId()
    this.getDirectlyFanWithUserId()
    this.getFissionFanWithUserId()
  },
  methods: {
    onClick (name, title) {

    },
    getIndirectFanWithUserId () {
      getIndirectFanWithUserId().then(res => {
        this.indirectFansList = res.data
      })
    },
    getDirectlyFanWithUserId () {
      getDirectlyFanWithUserId().then(res => {
        this.directlyFansList = res.data
      })
    },
    getFissionFanWithUserId () {
      getFissionFanWithUserId().then(res => {
        this.fissionFanList = res.data
      })
    }
  }
}
</script>
<style lang="scss">
.fans-list-page {
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
          width: px2rem(158);
          height: px2rem(43);
          border-radius: px2rem(18);
          background: url('~@/assets/images/level_bg.png') no-repeat left top;
          background-size: contain;
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
