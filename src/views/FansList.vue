<template>
  <div class="page-container-nobg fans-list-page pt">
    <Header/>
    <section>
      <van-tabs @click="onClick">
        <van-tab title="直属粉丝">
          <div class="item-fans-box">
            <img class="header-img" src="@/assets/images/qq (1).png" alt="">
            <div class="content-info">
              <div class="top">
                <span class="phone">15928137520</span>
                <span class="level">
                  <img src="@/assets/images/icon_masonry.svg" alt="">
                  初级会员
                </span>
              </div>
              <div class="bottom">返现金额：100</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐粉丝">推荐粉丝</van-tab>
      </van-tabs>
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
    onClick (name, title) {
      this.$toast(title)
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
    @include flex(flex-start);
    padding: px2rem(40);
    .header-img{
      width: px2rem(88);
      border-radius: 50%;
    }
    .content-info{
      @include flex(space-around,flex-start,column);
      height: px2rem(80);
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

      }
    }
  }
}
</style>
