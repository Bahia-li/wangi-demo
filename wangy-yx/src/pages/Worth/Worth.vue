<template>
  <div class="worth">
    <div class="worth-hearth">
      <van-nav-bar title="值得买"  left-arrow >
        <van-icon @click="$router.push('/')" name="wap-home-o" slot="left" size="28px" color="black"/>
        <van-icon name="search" slot="right" size="28px" color="black"/>
        <van-icon name="shopping-cart-o" slot="right" size="28px" color="black"/>
      </van-nav-bar>  
    </div>
    <div class="m-swiperTab">
      <div class="m-swiperTab-title">
        <img class="u-title" src="./img/mai/log.png" alt="">
        <div class="u-texy">严选好物 用心生活</div>
        <img class="u-bg" src="./img/mai/bag.png" alt="">
      </div>
      <div class="m-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
          <van-swipe-item class="swipe-feng" :key="index" v-for="(cates,index) in categorysArr">
            <a href="" class="con" v-for="(cate,index) in cates" :key="index">
              <div class="con-img"><img :src="cate.picUrl" alt=""></div>
              <div class="con-text">
                <span class="price">{{cate.mainTitle}}</span>
                <span class="text">{{cate.viceTitle}}</span>
              </div>
            </a>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="w-con">
        <!-- 两端对齐 -->
      <van-row class="row" type="flex" justify="space-around">
        <van-col class="col-left">
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/17b1f75f167c06763a550486f197d852.jpg?imageView&thumbnail=345y345&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/4cffd1f457aeb8c8561ef06ce817d933.jpg?imageView&thumbnail=345y345&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/e5d3847f962ada3d311af1dbb9caa3c5.jpg?imageView&thumbnail=345y345&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/7b0bd099eb65001f35566fe69a50146b.jpg?imageView&thumbnail=345y258.75&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
           <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/bd73f05a5b8492eaeabca2eafdc3dc4a.jpg?imageView&thumbnail=345y345&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
        </van-col>
        <van-col class="col-right">
          <img class="right-img" src="https://yanxuan.nosdn.127.net/87f3077c32a6946ae644f6a6a8205fc1.png?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/b1cda4e6e4b3d22c97c0390ef3ffa360.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="https://yanxuan.nosdn.127.net/2eedeecc0140b72e68dfe349f7683e44.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
          <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/5b2e1993394e8aefe43f554a2a23a1b7.jpg?imageView&thumbnail=345y345&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="https://yanxuan.nosdn.127.net/2eedeecc0140b72e68dfe349f7683e44.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
           <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/723b06e9a0489485294e434f8309653a.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="https://yanxuan.nosdn.127.net/2eedeecc0140b72e68dfe349f7683e44.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
         <div class="con">
            <div class="col-left-img">
              <img src="https://yanxuan.nosdn.127.net/1f80c1ff8c41b127e1c83229b02b2092.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
            </div>
            <div class="col-left-text"><span>严选4周年经典品榜</span></div>
            <div class="col-bottom-con">
              <div class="col-left-geren">
                <img src="https://yanxuan.nosdn.127.net/2eedeecc0140b72e68dfe349f7683e44.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt="">
                <span>选妹</span>
              </div>
              <div class="clo-left-renqi">
                <i><van-icon name="flower-o" /></i>
                <span>3510</span>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:"Worth",
  computed: {
    ...mapState({
      cateState:state=>state.firse.cateState
    }),
    categorysArr(){
      // 获取当前获取当前categorys
      const { cateState } = this
      
      // 定义大数组
      const bigArr = []
      // 定义小数组
      let smallArr = []
      
      cateState[0].data.navList.forEach(cate =>{
        //判断小数组是否为空
        if(smallArr.length === 0){
          bigArr.push(smallArr)
        }
        smallArr.push(cate)
        if(smallArr.length === 8){
          smallArr = []
        }
      })
      return bigArr
    }
  },
  async mounted () {
    await this.$store.dispatch('getCateState')
    console.log(this.cateState[0].data.navList);
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
  .worth
    width 100%
    font-size 15px
    position relative
    .worth-hearth
      width 100%
      position fixed
      top 0
      z-index 10
    .m-swiperTab
      margin-top 45px
      position relative
      padding-bottom 70px
      .m-swiperTab-title
        z-index 1
        position relative
        .u-title
          height 34px
          width 65px
          z-index 2
          display inline-block
          position absolute
          top 30px
          left 10px
        .u-texy
          color #fff
          display inline-block
          position absolute
          top 40px
          left 80px
        .u-bg
          width 100%
          height auto
      .m-swiper
        z-index 2
        width 90%
        height 260px
        margin auto
        background-color	#FFE4E1
        border-radius 20px
        position absolute
        top 70px
        left 0
        right  0
        .my-swipe
          height 100%
          .swipe-feng
            display flex
            flex-wrap wrap
            justify-content space-between
            .con
              height 100px
              width 80px
              color black
              display flex
              flex-direction column
              align-items center
              justify-content space-between
              .con-img
                width 60px
                height 60px
                img 
                  width 100%
                  height 100%
              .con-text
                text-align center
                overflow hidden
                .price
                  display inline-block
                  font-weight 600
                .text
                  display inline-block
                  font-size 12px
                  color #ccc
                  overflow hidden 
                  white-space nowrap
                  text-overflow ellipsis
                  
  .w-con
    width 95%
    margin auto
    .row
      width 100%
      padding-bottom 60px
      .col-left
        .con
          width 172px
          height 250px
          display flex
          flex-direction column
          border-radius 10px
          background-color #FFFAF0  
          justify-content space-around
          margin-top 10px
          .col-left-img
            border-radius 10px
            img 
              border-radius 10px
              width 172px
              height 172px
          // .col-left-text 
          .col-bottom-con
            display flex
            justify-content space-between
            align-items center
            text-align center
            font-size 12px
            color #FF8C00
            .col-left-geren
              img 
                width 24px
                height 24px
                border-radius 50%
            .clo-left-renqi
              text-align center
          
      .col-right
        width 172px
        display flex
        flex-direction column
        margin-top 10px
        .right-img
          border-radius 10px
          width 100%
          height 100px
        .con
          width 172px
          height 180px
          display flex
          flex-direction column
          border-radius 10px
          background-color #FFFAF0
          justify-content space-around
          margin-top 10px
          .col-left-img
            border-radius 10px
            img 
              border-radius 10px
              width 172px
              height 95px
          // .col-left-text 
          .col-bottom-con
            display flex
            justify-content space-between
            align-items center
            text-align center
            font-size 12px
            color #FF8C00
            .col-left-geren
              img 
                width 24px
                height 24px
                border-radius 50%
            .clo-left-renqi
              text-align center
</style>