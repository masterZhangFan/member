<!--
 * @Author: 尼大人
 * @Date: 2019-12-05 00:54:51
 * @LastEditors: 尼大人
 * @LastEditTime: 2019-12-07 01:46:36
 -->

<template>
  <div class="selected-wrap">
    <template v-if="type*1==1">
      <van-field @click='setShowUserTrue' :readonly='readonly' v-model="value" :placeholder="mypalceholder"/>
      <div v-show="showUser" class="selecte-item-box">
        <span @click="selectedThis(item)" v-for="(item,index) in filterDataList" :key="index">{{item._label}}</span>
        <span v-if="!dataList.length" @click="selectedThis">暂无数据...</span>
      </div>
    </template>
    <van-uploader v-else :after-read="afterRead">
      <van-field @click='setShowUserTrue' readonly v-model="value" :placeholder="mypalceholder"/>
    </van-uploader>
  </div>
</template>

<script>
import Bus from '@/utils/bus'
import { fileUpload } from '@/api/agent'
export default {
  name: 'MySelected',
  props: {
    mypalceholder: {
      type: String,
      default: ''
    },
    dataKey: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '1'
    },
    dataList: {
      type: Array,
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    filterDataList: function (params) {
      return this.dataList.filter(item => {
        return item._label.indexOf(this.value) !== -1
      })
    }
  },
  data () {
    return {
      showUser: false,
      value: '',
      rightType: false
    }
  },
  mounted () {
    let _this = this
    Bus.$on('setShowUserFalase', (flag, dataKey) => {
      // console.log(flag)
      if (dataKey !== this.dataKey) {
        _this.showUser = flag
      }
    })
  },
  methods: {
    setShowUserTrue () {
      this.showUser = !this.showUser
      if (this.showUser) {
        Bus.$emit('setShowUserFalase', false, this.dataKey)
      }
    },
    onClickRight () {},
    afterRead (file) {
      var formData = new FormData()
      formData.append('key1', file.file)
      fileUpload(formData).then(res => {
        this.value = res.data[0].name
        this.$emit('setValue', this.dataKey, res.data[0].path)
      })
    },
    selectedThis (obj) {
      this.value = obj._label
      this.$emit('setValue', this.dataKey, obj._value)
      this.showUser = false
    }
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
.selected-wrap {
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
  .van-uploader{
    width: 100%;
    height: px2rem(60);
    line-height: px2rem(60);
    .van-uploader__input{
      height: px2rem(60);
    }
  }
}
</style>
