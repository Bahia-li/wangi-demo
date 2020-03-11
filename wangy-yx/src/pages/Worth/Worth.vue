<template>
  <div class="worth">
    <div class="worth-hearth">
      <van-nav-bar title="值得买"  left-arrow >
        <van-icon name="wap-home-o" slot="left" size="28px" color="black"/>
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
              <div class="con-img"><img :src="cate.imgUl" alt=""></div>
              <div class="con-text">
                <span class="price">{{cate.price}}</span>
                <span class="text">{{cate.persent}}</span>
              </div>
            </a>
          </van-swipe-item>
        </van-swipe>
      </div>
      
    </div>
    <div>
        <img src="./img/l-con-0.png" alt="">
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
      console.log(cateState);
      
      // 定义大数组
      const bigArr = []
      // 定义小数组
      let smallArr = []
      
      cateState.forEach(cate =>{
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
    console.log(this.cateState);
    
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
  .worth
    width 100%
    font-size 15px
    .worth-hearth
      width 100%
    .m-swiperTab
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
        background-color #ccc
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
                .price
                  display inline-block
                  font-weight 600
                .text
                  display inline-block
                  font-size 12px
                  color #ccc

</style>