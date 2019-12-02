<!--
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-01 11:19:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\src\views\About.vue
 -->
<template>
  <div class="box">
    <img src="http://temp.im/640x260/444/fff" class="img-responsive">
    <ul style="font-size:0.3rem; padding: 0.2rem">
      <li style="font-size:0.4rem"><a href="http://www.jianshu.com/p/985d26b40199">rem布局（进阶版）的一些说明</a></li>
      <li>1，大家先把这个页面在不同设备模式下浏览下，感受下。</li>
      <li>2，一般来说我们的手机端效果图是640px或750px。</li>
      <li>3，对于上图这类需要等屏宽的图片，只需让其宽度设为 100% 即可。</li>
      <li>4，该布局方案要求凡是涉及尺寸的，单位都是rem，比如，height width margin paddint top border-radius 等等。你只需要按照效果图上标注的尺寸布局即可。</li>
    </ul>
    <div class="navRoot">
      <a href="#" class="navLink active">
        <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
        <span class="navLinkText">首页</span>
      </a>
      <a href="#" class="navLink">
        <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
        <span class="navLinkText">好店</span>
      </a>
      <a href="#" class="navLink">
        <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
        <span class="navLinkText">简单</span>
      </a>
      <a href="#" class="navLink">
        <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
        <span class="navLinkText">复杂</span>
      </a>
      <a href="#" class="navLink">
        <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
        <span class="navLinkText">异步</span>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.navRoot {
  position: fixed;
  z-index: 50;
  bottom: 0;
  left:0;
  width: 100%;
  height: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 0.01rem solid #ccc;
  background:#f2f2f2;
}

.navLink {
  font-size: 0.42rem;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
    color: #666;
}
.navLink.active {
  color: #1abc9c
}
.navLinkIco {
  display: block;
  margin-bottom: 0.1rem;
}

.navLinkText {
  display: block;
  line-height: 1;
  font-size: 0.24rem;
}

.img-responsive {
  width: 100%;
}
</style>
