<template>
<div class="mailLogin">
  <div class="m-login-img">
    <img src="./img/login-1.png" alt="">
  </div>
  <div class="mail-con">
    <van-cell-group>
      <van-field placeholder="输入手机号码" />
      <van-field placeholder="请输入短信验证码" >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-row type="flex" class="text" justify="space-between">
      <van-col >遇到问题</van-col>
      <van-col @click="isMailShow">使用密码验证登录</van-col>
    </van-row>
    <div>
      <van-button type="danger" size="large">登录</van-button>
    </div>

    <div class="other">
      <span @click="EatPhone">其他登录方式</span>
      <van-icon class="other-icon" size="15" name="arrow" />
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"MailLogin",
  methods: {
    EatPhone(){
      this.$EventBus.$emit("Eat",0)
    },
    isMailShow(){
      this.$EventBus.$emit("Eat",1)
    }
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.mailLogin
  .m-login-img
    width 100%
    padding 30px 0 100px 0
    display flex
    justify-content center
    img 
      width 134px
      height 45px
      margin auto
      display inline-block
  .mail-con
    width 90%
    margin auto

    .text
      font-size 15px
      color #ccc
      margin 20px 0
  .other
    width 100%
    text-align center
    font-size 15px
    margin-top 50px
</style>