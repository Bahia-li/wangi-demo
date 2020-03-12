<template>
  <div class="cart">
    <div class="cart-header">
      <van-nav-bar >
        <van-icon slot="right" size="15px" color="black">
          领劵
        </van-icon>
          <van-icon slot="left" size="15px" color="black">
          购物车
        </van-icon>
      </van-nav-bar>
      <van-row class="cart-nav" align="center" justify="space-around">
        <van-col span="8"><van-icon name="circle" size="3px"/>30天无忧退货</van-col>
        <van-col span="8"><van-icon name="circle" size="3px"/>小时快熟退货</van-col>
        <van-col span="8"><van-icon name="circle" size="3px"/>瞒88免邮费</van-col>
      </van-row>  
    </div>
    <div class="container">
      <div class="img">
      </div>
      <div class="cart-text">去添加点什么吧</div>
      <div class="cart-btn">
        <van-button type="danger" size="large">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
// import SearchCon from '../../components/SearchCon/SearchCon.vue'
export default {
  name:"MyCart"
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.cart
  position relative
  .cart-nav
    font-size 13px
    background-color	#F5F5F5
    height 30px
    line-height 30px
    text-align center
  .container
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    margin-top 50%
    width 100%
    font-size 15px
    .img
      width 120px
      height 120px
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp")
      background-size 100%
      margin auto
    .cart-text
      text-align center
    .cart-btn
      width 60%
      margin auto
</style>