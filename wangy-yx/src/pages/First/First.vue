<template>
  <div>
    <header class="m-indexHd">
      <div class="line">
        <a href="" class="log"></a>
        <div class="topSearchIpt">
          <i  class="iconfont icon-concou"></i>
          <span class="count_goods" @click="$router.push('/search')">搜索商品,工24191款好货</span>
        </div>
        <div class="loginBtn">
          <span class="m-btn" >登录</span>
        </div>
      </div>
    </header>
    <div class="tabWrap">
      <van-tabs class="tabs" @click="toItemConten" v-if="!isShowList" swipeable ellipsis animated line-height="2" style="width:85%;">
        <van-tab title="推荐"></van-tab>
        <van-tab :title="modulet.name"  v-for="(modulet,index) in modulets" :key="index"></van-tab>
      </van-tabs>
      
      <!-- <span class="tw-show" @click="onShowList"> <van-icon name="arrow-down" size="25px" /> </span> -->
      <van-collapse class="coll" @change="onShowList" v-model="activeNames" accordion>
        <van-collapse-item title="全部频道" name="1">
           <div class="moreCate">
            <div class="cateTag">
              <span>推荐</span>
            </div>
            <div class="cateTag"  v-for="(modulet,index) in modulets" :key="index">
              <span>{{modulet.name}}</span>
            </div>
        </div>
        </van-collapse-item>
      </van-collapse>
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
        <li class="g-item">
          <i class="iconfont icon-wangyi"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li class="g-item">
          <i class="iconfont icon-dui"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="g-item">
          <i class="iconfont icon-qian"></i>
          <span class="text">24小时快速退货</span>
        </li>
      </ul>
    </div>
    <!-- 内容 -->
    <div class="index-content" v-if="!isShowCont">
      <!-- 商品信息 -->
      <KingKong :kingkongs="kingKongList"/>
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
      <Activity :Activitys="indexActivityModule"/>

      <!-- 类目热销榜 -->
      <HotSel :hotSels="categoryHotSellModule"/>
      <!-- 限时购 -->
      <FlashSale :flashSale="flashSaleModule"/>
      <!-- 新品首发 -->
      <NewItemList :newItemList="newItemList"/>
      <!-- 断货补单 -->
      <SceneLigh :sceneLigh="sceneLightShoppingGuideModule"/>
      <!-- 底部 -->

    </div>
    <FirstsItem v-if="isShowCont" :modulet="modulet"/>

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
</template>
<script>
import {mapState} from 'vuex'
import KingKong from '../../components/Firsts/kingKong'
import Activity from '../../components/Firsts/Activity'
import HotSel from '../../components/Firsts/HotSel'
import FlashSale from '../../components/Firsts/FlashSale'
import NewItemList from '../../components/Firsts/NewItemList'
import SceneLigh from '../../components/Firsts/SceneLigh'
import FirstsItem from '../../components/Firsts/FirstsItem'
export default {
  name: "First",
  components: {
    KingKong, //商铺信息
    Activity, //新人专享礼
    HotSel,    //类目热销榜
    FlashSale,  //限时购
    NewItemList,
    SceneLigh,
    FirstsItem
  },
  computed: {
    ...mapState({
      firses:state=>state.firse.firses,
      modulets:state=>state.firse.modulets
    })
  },
  data () {
    return {
      activeName:"1",
      isShowCont:false,
      isShowList:false,
      kingKongList:[],
      indexActivityModule:[],
      categoryHotSellModule:{},
      flashSaleModule:{},
      newItemList:[],
      sceneLightShoppingGuideModule:[],
      modulet:{}
      //  scrolly: 0, //滑动的距离
      //  tops: [], //右侧列表高度范围的数组
    }
  },
  async mounted () {
    await this.$store.dispatch('getFirse')
    const {sceneLightShoppingGuideModule,newItemList,flashSaleModule,kingKongModule,indexActivityModule,categoryHotSellModule} = this.firses
    this.newItemList = newItemList
    this.flashSaleModule = flashSaleModule
    this.categoryHotSellModule = categoryHotSellModule
    this.kingKongList = kingKongModule.kingKongList
    this.indexActivityModule = indexActivityModule
    this.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule

    await this.$store.dispatch('getModulets')
  },
  methods: {
     onShowList(){
      this.isShowList = !this.isShowList
    },
    toItemConten(event){    
      if(event > 0){
        this.isShowCont = true
        this.modulet = this.modulets.find((item,index)=> index === event-1)
      }else{
        this.isShowCont = false
      }
    }
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
    display flex
    justify-content space-between
    align-items center
    z-index 100
    font-size 15px
    // margin-top 25px
    padding-top 25px
    position relative
    // justify-content space-around
    .tabs
      position absolute
      z-index 2
    .coll
      width 100%
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
      height 400px
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
            display flex
            span
              line-height 18px
              border 1px solid red
              border-radius 8px
              color red
              font-size 6px
              display block
              margin-left 10px
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
        // display flex
        // display-wrap wrap
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