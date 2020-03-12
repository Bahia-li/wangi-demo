<template>
<div class="login">
  <div class="worth-hearth">
    <van-nav-bar title="网易严选"  left-arrow >
      <van-icon @click="$router.push('/')" name="wap-home-o" slot="left" size="28px" color="black"/>
      <van-icon name="search" slot="right" size="28px" color="black"/>
      <van-icon name="shopping-cart-o" slot="right" size="28px" color="black"/>
    </van-nav-bar>  
  </div>
  <div v-if="status === 0">
    <div class="login-img">
      <img src="./img/login-1.png" alt="">
    </div>
    <div class="cart-btn">
      <div class="cart-btn-log">
        <van-button type="danger" size="large" @click="goPhone">
          <van-icon name="newspaper-o"/>
          手机号快捷登录
          </van-button>
      </div>
      <div class="cart-btn-post">
        <van-button plain hairline type="info" size="large" color="red" @click="goMail">
          <van-icon name="credit-pay"/>
          邮箱账号登录
          </van-button>
      </div>
    </div>
  </div>
  <MailLogin v-if="status === 1" />
  <PhoneLogin v-if="status === 2"/>
</div>
</template>
<script>
import MailLogin from '../../components/MailLogin'
import PhoneLogin from '../../components/PhoneLogin'
export default {
  name:"Personal",
  data () {
    return {
     status : 0
    }
  },
  components: {
    MailLogin,
    PhoneLogin
  },methods: {
    goMail(){
      this.status = 1
    },
    goPhone(){
     this.status = 2
    }
  },mounted () {
     this.$EventBus.$on("Eat",(msg) =>{
       this.status = msg
     })
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.login
  .login-img
    width 100%
    padding 100px 0
    display flex
    justify-content center
    img 
      width 134px
      height 45px
      margin auto
      display inline-block
  .cart-btn
    width 100%
    .cart-btn-log
      width 100%
    .cart-btn-post
      width 100%
</style>