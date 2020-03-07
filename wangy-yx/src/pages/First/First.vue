<template>
  <div>
    <header class="m-indexHd">
      <div class="line">
        <a href="" class="log"></a>
        <div class="topSearchIpt">
          <i  class="iconfont icon-concou"></i>
          <span class="count_goods">搜索商品,工24191款好货</span>
        </div>
        <div class="loginBtn">
          <span class="m-btn">登录</span>
        </div>
      </div>
    </header>
    <div class="tabWrap">
       <ul class="tw-goods" v-if="!isShowList">
        <li ref="rightUl">
          <span>推荐</span>
        </li>
        
        <li>
          <span>居家生活</span>
        </li>
         <li>
          <span>居家生活</span>
        </li> 
        <li>
          <span>居家生活</span>
        </li> 
        <li>
          <span>居家生活</span>
        </li> 
        <li>
          <span>居家生活</span>
        </li> 
        <li>
          <span>居家生活</span>
        </li> 
        <li>
          <span>居家生活</span>
        </li>
      </ul>
      <div class="tw-tabAlter" v-if="isShowList">
        <span class="tabAlter">全部频道</span>
      </div>
      
      <span class="tw-show" @click="onShowList"> > </span>
    </div>
    <div class="moreCate" v-if="isShowList">
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
          <div class="cateTag">
            <span>推荐</span>
          </div>
      </div>
    <!-- 遮盖层 -->
    <div class="mask" v-if="isShowList"></div>
    <!-- 轮播图 -->
    <nav class="nav-list">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" initial-swipe='3'>
        <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/3c94dee964a791515434c3d13559a82f.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
         <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/3ba8ff890bd557b870733aa78f8d3466.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/291f05d639363a80382fb4e21cb8f123.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/d46d2fd850b9a660eca68028fe974bb0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
           <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/0398d96236e228c33ab82ce09c0d45b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
         <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/795c88b1f6458a554d0b10563a64dfe9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
         <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/3fa2995d5c384d08ae45664562115254.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
         <van-swipe-item>
          <img class="nav-img" src="https://yanxuan.nosdn.127.net/6420135fe97bdf81cb7c12112885fcc9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </van-swipe-item>
      </van-swipe>
    </nav>
    <div class="m-indexServicePolicy">
      <ul class="g-gorw">
        <li class="item">
          <i class="iconfont icon-wangyi"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li class="item">
          <i class="iconfont icon-dui"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-qian"></i>
          <span class="text">24小时快速退货</span>
        </li>
      </ul>
    </div>

    <div class="index-content">
      <div class="m-kingKongModule">
        <div class="m-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
                  <div class="swiper-text">
                    <span>新品首发</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
export default {
  name: "First",
  data () {
    return {
      isShowList:false
      //  scrolly: 0, //滑动的距离
      //  tops: [], //右侧列表高度范围的数组
    }
  },
  mounted () {
    // this._initBscroll(),
    // //初始化滑动距离
    // this._ininTops()
  },
  methods: {
     onShowList(){
      this.isShowList = !this.isShowList
    }
    // _initBscroll(){
    //   new BScroll(".tabWrap", {
    //     click: true,
    //     scrollX:true
    //   });
    // },
    // _ininTops(){
    //   const tops = [];
    //   let top = 0;
    //   tops.push(top);
    //   //获取所有的li标签
    //   const list = this.$refs.rightUl.children;
    //   Array.prototype.slice.call(list).forEach(li => {
    //     //获取li标签的高度
    //     top += li.offsetwidth
    //     //把添加到数组中
    //     tops.push(top);
    //   });
    //   //初始化tops数据
    //   this.tops = tops;
    // }
  }
};
</script>

<style lang="stylus" rel='stylusheet/stylus'>
@import '../../common/stylus/mixins.styl';
  .m-indexHd
    width 100%
    height 30px
    position flex
    z-index 100
    .line
      width 100%
      // margin-top 10px
      padding-top 10px
      display flex
      justify-content center
      align-items center
      .log
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp);
        width 90px
        height 30px
        margin-left 10px
        background-position center 
        display inline-block
        background-size 90px
      .topSearchIpt
        width 220px
        height 30px
        background-color #ededed
        // text-align center
        // line-height 30px
        display flex
        justify-content center
        border-radius 10px
        .iconfont
          font-size 15px
          margin-right 5px
          display inline
          line-height 30px
        .count_goods
          display inline-block
          height 30px
          font-size 15px
          line-height 30px
      .loginBtn
        display flex
        line-height 30px
        border 1px solid red
        border-radius 10px
        width 40px
        justify-content center
        margin-left 5px
        height 30px
        .m-btn
          background-color #ffffff
          color red
          font-size 12px
  .tabWrap
    width 100%
    position flex
    display flex
    z-index 100
    font-size 15px
    // margin-top 25px
    padding-top 25px
    // justify-content space-around
    .tw-goods
      width 80%
      white-space nowrap//禁止换行
      overflow-x auto
      overflow-y hidden
      padding-left 20px
      li
        display inline-block
        // box-sizing border-box
        // width 60px
        padding 0 10px
        // margin-left 10px
    .tw-show
      position fixed
      right 20px
    .tw-tabAlter
      font-size 15px
      margin-left 20px
      // padding 20px
      // position fixed
      // left 20px
    // .tw-zhedang
  .moreCate
    position fixed
    z-index 100
    background-color #ffffff
    width 100%
    height 312
    font-size 15px
    display flex
    flex-wrap wrap
    padding-bottom 15px
    .cateTag
      margin-left 10px
      background-color #FAFAFA
      margin-top 15px
      text-align center
      height 30px
      line-height 30px
      width 80px
      border 1px solid #ccc
      border-radius 2px
      
  .mask
    position fixed
    background rgba(0,0,0,.2)
    z-index 1
    height 100%
    width 100%
  .nav-list
    width 100%
    height 150px
    .my-swipe
      height 150px
      .nav-img
        width 100%
        height 150px
  .m-indexServicePolicy
    background-color #ffffff
    padding 0 20px
    .g-gorw
      width 100%
      height 30px
      // margin  0 20px
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      -webkit-box-align center
      align-items center
      font-size 13px
      vertical-align top 
      zomm 1
  
  .index-content
    .m-kingKongModule
      position relative
      height 205px
      .m-carousel
        position relative
        overflow hidden
        height 205px
        .swiper-container
          margin-left auto
          margin-right auto
          position relative
          overflow hidden
          height 205px
          .swiper-wrapper
            height auto
            .swiper-slide
              position relative
              width 100%
              a
                width 65px
                height 65px
                display block
                border-radius 3px
                float left
                margin 10px 5px
                font-size 13px
                img 
                  width 65px
                  height 60px
                  margin-bottom 5px
                .swiper-text
                  height 20px
                  text-align center
                  
</style>