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
    <!-- 品牌 -->
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
    <!-- 内容 -->
    <div class="index-content">
      <!-- 商品信息 -->
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
      <!-- 特价 -->
      <div class="m-indexBigPromotionModule">
        <div class="floorTop">
          <a href="" style="background:url(https://yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif?imageView&quality=75);background-size:100% 100%;" class="promItem">
            <div class="promGood">
              <img src="./img/index/ia_100000021.png" alt="">
              <div class="priceWrap">
                <span class="retailPrice">￥788</span>
              </div>
            </div>
          </a>
        </div>
        <div class="floorFirst">
          <a href="">
            <img src="./img/index/First1.webp" alt="">
              </a>
          <a href="">
            <img src="./img/index/First2.webp" alt="">
          </a>
        </div>
        <div class="floor">
          <a class="promItem" href="">
            <div class="title-01">
              <div class="title-count-1">48限时购</div>
              <div class="title-count-2">女王专属</div>
              <img class="promGood-img" src="./img/index/prom-img-2.webp" alt="">
            </div>
          </a>
          <a class="promItem" href="">
             <div class="title-01">
              <div class="title-count-1">女王专属爆款</div>
              <div class="title-count-2">美妆29.9起</div>
              <img class="promGood-img" src="./img/index/prom-img-1.png" alt="">
            </div>
          </a>
          <a class="promItem" href="">
             <div class="title-01">
              <div class="title-count-1">2月春茶上市</div>
              <div class="title-count-2">特价384</div>
              <img class="promGood-img" src="./img/index/prom-img-1.png" alt="">
            </div>
          </a>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <div class="m-freshmanModule">
        <div class="module-title">
          <span class="module-text">
            -新人专享礼-
          </span>
        </div>
        <div class="module-coutner">
          <a class="module-coutner-left" href="">
            <div class="module-coutner-left-name">新人专享礼包</div>
            <div class="module-coutner-left-imgWrap">
              <div class="left-img">
                <img class="m-lazyload" src="./img/index/xinren.png" alt="">
              </div>
              <!-- <div class="animate"></div> -->
            </div>
          </a>
          <div class="module-coutner-right">
            <div class="right-module1">
              <a href="" class="right-activityItem1">
                <div class="picWrap">
                  <div >
                    <img class="picWrap-img-ymj" src="./img/index/ymj.png" alt="">
                  </div>
                  <div class="picWrap-prive">
                    <span>￥7.9</span>
                    <span class="picWrap-prive-text2">￥9.9</span>
                  </div>
                </div>
                <div class="discount">
                  <span class="discount-ft">福利社</span>
                  <span class="discount-tj">今日特价</span>
                </div>
              </a>
            </div>
            <div class="right-module2" >
              <a href="" class="right-activityItem2">
                <div class="cnt">
                  <span class="cnt-t">新人抱团</span>
                  <span class="cnt-b">1元起包邮</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 类目热销榜 -->
      <div class="m-categoryHotSellModule">
          <div class="moduleTitle">
            <div class="moduleTitle-left">
              <span>类目热销榜</span>
            </div>
          </div>
          <div class="L-content">
            <div class="content-line1">
              <a href="" class="item-big item-1" style="background-color:#F9F3E4">
                <div class="data-reactid">
                  <div class="data-reactid-name">
                    <span>热销榜</span>
                  </div>
                </div>
                <div class="imgWrap">
                  <div class="imgWrap-img">
                    <img src="./img/index/reactid-1.webp" alt="">
                  </div>
                </div>
              </a>
              <a href="" class="item-big item-2" style="background-color:#EBEFF6">
                <div class="data-reactid">
                  <div class="data-reactid-name">
                    <span>好评榜</span>
                  </div>
                </div>
                <div class="imgWrap">
                  <div class="imgWrap-img">
                    <img src="./img/index/reactid-2.webp" alt="">
                  </div>
                </div>
              </a>
            </div>
            <div class="content-line2">
              <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-1.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-2.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-3.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-4.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-5.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-6.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-1.webp" alt="">
                </div>
              </a>
             <a href="" class="content-item">
                <div class="name">
                  居家生活榜
                </div>
                <div class="content-img">
                  <img src="./img/index/item-1.webp" alt="">
                </div>
              </a>
             
            </div>
          </div>
      </div>
      <!-- 限时购 -->
      <div class="m-flashSaleModule">
        <div class="flashSale-moduleTitle">
          <div>
            限时购
          </div>
          <div>
            <span>更多</span>
            <i> > </i>
          </div>
        </div>
        <div class="flashSale-cnt">
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
          <a href="" class="m-indexFlashSaleItem">
            <div class="flashSale-img">
              <img src="./img/index/flashSale.webp" alt="">
            </div>
            <div class="flashSale-price">
              <span class="actualPrice">￥199</span>
              <span class="retailPrice">￥299</span>
            </div>
          </a>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="m-newItemModule">
        <div class="newItem-moduleTitle">
          <div>
            新品首发
          </div>
          <div>
            <span>更多</span>
            <i> > </i>
          </div>
        </div>
        <div class="newItem-cnt">
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-1.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>告别桌面沙发尘屑毛发，mini桌面吸尘器</span>
            </div>
            <div class="newItem-price">
              <span>￥59</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-2.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>家庭装大容量，75%酒精消毒液500ml</span>
            </div>
            <div class="newItem-price">
              <span>￥59</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-3.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>家庭装大容量，75%酒精消毒液500ml</span>
            </div>
            <div class="newItem-price">
              <span>￥45</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-4.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>有效杀灭H1N1流感病毒，高达99.999%的除菌率</span>
            </div>
            <div class="newItem-price">
              <span>￥59</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-7.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>私享理发师，儿童理发器 静音款/吸发款</span>
            </div>
            <div class="newItem-price">
              <span>￥79</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
          <a href="" class="m-indexNewItemItem">
            <div class="newItem-img">
              <img src="./img/index/newItem-6.webp" alt="">
            </div>
            <div class="newItem-name">
              <span>复工防护45天，便携空气净化除菌卡</span>
            </div>
            <div class="newItem-price">
              <span>￥79</span>
            </div>
            <div class="newItem-tagWraper">
              <span>新品尝鲜</span>
            </div>
          </a>
        </div>
      </div>
      <!-- 断货补单 -->
      <div class="m-sceneLightShoppingGuideModule">
        <div class="m-styleBanner">
          <a class="m-styleBanner-cnt">
            <div class="m-styleBanner-title">断货补单王</div>
            <div class="m-styleBanner-desc">补单疯抢中</div>
            <div class="m-styleBanner-img">
              <img src="./img/index/scene-6.webp" alt="">
              <img src="./img/index/scene-2.webp" alt="">
            </div>
          </a>
        </div>
        <div class="m-styleBanner">
          <a class="m-styleBanner-cnt">
            <div class="m-styleBanner-title">断货补单王</div>
            <div class="m-styleBanner-desc">补单疯抢中</div>
            <div class="m-styleBanner-img">
              <img src="./img/index/scene-1.webp" alt="">
              <img src="./img/index/scene-2.webp" alt="">
            </div>
          </a>
        </div>
        <div class="m-styleBanner">
          <a class="m-styleBanner-cnt">
            <div class="m-styleBanner-title">断货补单王</div>
            <div class="m-styleBanner-desc">补单疯抢中</div>
            <div class="m-styleBanner-img">
              <img src="./img/index/scene-2.webp" alt="">
              <img src="./img/index/scene-3.webp" alt="">
            </div>
          </a>
        </div>
        <div class="m-styleBanner">
          <a class="m-styleBanner-cnt">
            <div class="m-styleBanner-title">断货补单王</div>
            <div class="m-styleBanner-desc">补单疯抢中</div>
            <div class="m-styleBanner-img">
              <img src="./img/index/scene-4.webp" alt="">
              <img src="./img/index/scene-5.webp" alt="">
            </div>
          </a>  
        </div>
      </div>


      <!-- 底部 -->
      <header class="l-header">
        <div class="l-ft">
          <div class="bd" >
            <a class="bd1" href="">下载APP</a>
            <a class="bd2" href="">电脑版</a>
          </div>
          <p class="copyright">
            <span>网易公司版权所有 © 1997-</span>
            <span>2020</span>
            <br>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </header>

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
    width 100%
    margin-bottom 60px
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
    .m-indexBigPromotionModule
      width 100%
      height 450px
      background-color #cc3256
      background-size 100% 100%
      overflow hidden
      .floorTop
        height 140px
        width 100%
        .promItem
          width 100%
          height 100%
          color #333
          overflow hidden
          background-size 100% 100%
          display inline-block
          position relative
          .promGood
            height 90px
            width 85px
            position absolute
            left 10%
            top 16%
            img
              width 100%
              height 100%
            .priceWrap
              height 16px
              width 75px
              background-color #F48F18
              border-radius 10px
              position absolute
              left 4px
              bottom -3px
              text-align center
              line-height 32px
              opacity .96
              .retailPrice
                font-size 8px
                color #fff
                position absolute
                top -8px
                left 21px
                // display inline-block
      .floorFirst
        display flex
        justify-content space-between
        padding 0 10px 
        padding-top 10px
        img
          width 175px
          height 100px
      .floor
        height 120px
        display flex
        justify-content space-between
        padding 0 10px
        .promItem
          height 100%
          width 115px
          color #ffffff
          background-color #FFF0F5
          border-radius 10px
          .title-01
            width 100%
            height 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            // justify-content center
            .title-count-1
              font-size 15px
              color red
              font-weight 500
            .title-count-2
              font-size 12px
              color red
              font-weight 200
            .promGood-img
              height 85px
              width 80px
            .promGood-img
              width 70px
              height 70px
    // <!-- 新人专享礼 -->
    .m-freshmanModule  
      width 100%
      height 280px
      position relative
      padding-bottom 5px
      border-bottom 10px solid #ccc
      .module-title
        // position absolute
        // left 0
        // right 0
        margin auto
        height 45px
        width 90%
        font-size 20px
        font-weight 300
        text-align center
        line-height 45px
        
      .module-coutner
        display flex
        display flex
        flex-direction row
        justify-content space-between
        padding 0 14px
        // padding 0 10px
        .module-coutner-left
          width 172px
          height 217px
          background-color #F9E9CF
          color black
          .module-coutner-left-name
            font-size 20px
            padding 15px 0 0 15px
          .module-coutner-left-imgWrap
            width 100%
            height 182px
            .left-img
              width 100%
              height 100%
              position relative
              .m-lazyload
                position absolute
                left 0
                right 0
                top 0
                bottom 0
                margin auto
                width 129px
                height 129px
        .module-coutner-right
          width 172px
          height 217px
          display flex
          flex-direction column
          font-size 15px
          .right-module1
            padding 10px 0 0 10px
            background-color #FBE2D3
            border-radius 10px  
            .right-activityItem1
              display flex
              flex-direction row-reverse
              .picWrap
                width 100px
                height 100px
                position relative
                .picWrap-img-ymj
                  width 100%
                  height 100%
                .picWrap-prive
                  width 40px
                  height 40px
                  border-radius 50%
                  background-color #F59524
                  position absolute
                  top 0px
                  right 10px
                  display flex
                  flex-direction column
                  text-align center
                  justify-content center
                  color #fff
                  .picWrap-prive-text2
                    font-size 10px
                    text-decoration line-through
              .discount
                font-size 15px
                display flex
                flex-direction column
                width 80px
                height 100px
                span
                  display inline-block
                .discount-tj
                  font-size 13px
                  margin-top 10px
          .right-module2
            background-color #FFECC2
            height 100px
            padding 10px 0 0 10px
            border-radius 10px
            .right-activityItem2
              .cnt
                span
                  display block
                  color black
                .cnt-b
                  background-color  #CBB693
                  width 60px
                  font-size 12px
                  text-align center
                  border-radius 2px
                  color #fff
    //  <!-- 类目热销榜 -->
    .m-categoryHotSellModule
      padding-bottom 5px
      border-bottom 10px solid #ccc
      width 100%
      height 370px
      // background-color pink
      .moduleTitle
        width 92%
        height 45px
        margin auto
        font-size 17px
        font-weight 300
        line-height 45px
        background-color #fff
      .L-content
        .content-line1
          display flex
          flex-direction row
          justify-content space-between
          padding 0 14px
          .item-big
            height 115px
            width 170px
            font-size 15px
            color black 
            display flex
            align-content center
            border-radius 10px
            .data-reactid
              margin auto
              .data-reactid-name
                span
                  display block
                  width 50px
            .imgWrap
              width 120px
              height 100%
              float right 
              .imgWrap-img
                width 100%
                height 100%
                img
                  width 100%
                  height 100%

        .content-line2
          display flex
          flex-wrap wrap
          font-size 13px
          color black
          align-content center
          justify-content space-between 
          // padding 10px 10px 0 10px
          padding 0 10px
          .content-item
            text-align center
            background-color #F5F5F5
            width 80px
            height 90px
            margin-top 10px
            .content-img
              width 74px
              height 72px
              img
                width 100%
                height 100%
    //  <!-- 限时购 -->           
    .m-flashSaleModule
      // height 380px
      padding-bottom 5px
      border-bottom 10px solid #ccc
      width 100%
      .flashSale-moduleTitle
        width 92%
        height 45px
        margin auto
        font-size 17px
        font-weight 300
        line-height 45px
        background-color #fff
        display flex
        justify-content space-between
      .flashSale-cnt
        display flex
        flex-wrap wrap
        font-size 13px
        color black
        align-content center
        justify-content space-between 
        // padding 10px 10px 0 10px
        padding 0 10px
        .m-indexFlashSaleItem
          width 110px
          height 158px
          text-align center
          .flashSale-img
            width 110px
            height 124px
            background-color #F5F5F5
            img
              width 100%
              height 100%
          .flashSale-price
            margin-top 8px
            .actualPrice
              color red
            .retailPrice
              font-size 9px
              text-decoration line-through
    //  <!-- 新品首发 -->
    .m-newItemModule
      width 100% 
      padding-bottom 5px
      border-bottom 10px solid #ccc
      .newItem-moduleTitle
        
        width 92%
        height 45px
        margin auto
        font-size 17px
        font-weight 300
        line-height 45px
        background-color #fff
        display flex
        justify-content space-between
      .newItem-cnt
        display flex
        flex-wrap wrap
        font-size 13px
        color black
        align-content center
        justify-content space-between 
        // padding 10px 10px 0 10px
        padding 0 10px
        .m-indexNewItemItem
          width 110px
          height 210px
          // text-align center
          .newItem-img
            width 110px
            height 124px
            background-color #F5F5F5
            img
              width 100%
              height 100%
          .newItem-name
            color black
            span
              line-height 18px
              word-break break-all
              text-overflow ellipsis
              overflow hidden
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
          .newItem-price
            line-height 18px
            color red
            span
              font-size 15px
          .newItem-tagWraper
            padding-left 5px
            span
              line-height 18px
              border 1px solid red
              border-radius 10px
              color red
              font-size 8px
    // <!-- 断货补单 -->
    .m-sceneLightShoppingGuideModule
      // width 100% 
      // padding-bottom 
      border-bottom 10px solid #ccc
      display flex
      flex-wrap wrap
      font-size 13px
      color black
      padding 0 10px 15px 10px
      justify-content space-between
      .m-styleBanner
        background-color #F5F5F5
        // padding 10px 0 0 10px
        // margin-bottom 10px
        margin-top 10px
        .m-styleBanner-cnt 
          width 120px
          height 143px
          .m-styleBanner-title
            font-size 15px
            color black
            padding-bottom 5px
          .m-styleBanner-desc
            font-size 12px
          .m-styleBanner-img
            img
              width 85px
              height 85px
    // <!-- 底部 -->
    .l-header
      height 150px
      background-color #414141
      position relative
      font-size 15px
      .l-ft
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        height 90px
        width 80%
        display flex
        flex-direction column 
        justify-content center 
        .bd
          display flex
          justify-content center
          a
            text-align center
            border 1px solid #fff
            width 100px
            height 36px
            line-height 36px
            color #fff
            margin-bottom 10px
            border-radius 20px
          .bd2
            margin-left 15px
          .bd1
            margin-right 15px
        .copyright
          line-height 22px
          text-align center
          display inline-block
          span
            color #fff
</style>