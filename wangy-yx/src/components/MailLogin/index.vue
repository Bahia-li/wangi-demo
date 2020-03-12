<template>
<div class="mailLogin">
  <div class="m-login-img">
    <img src="./img/login-1.png" alt="">
  </div>
  <div class="mail-con">
    <van-cell-group>
      <van-field placeholder="邮箱账号" />
      <van-field placeholder="密码" />
    </van-cell-group>
    <van-row type="flex" class="text" justify="space-between">
      <van-col >注册账号</van-col>
      <van-col >忘记密码</van-col>
    </van-row>
    <div>
      <van-button type="danger" size="large">警告按钮</van-button>
    </div>

    <div class="other">
      <span @click="Eat">其他登录方式</span>
      <van-icon class="other-icon" size="15" name="arrow" />
    </div>
  </div>
</div>
</template>
<script>
export default {
  name:"MailLogin",
  methods: {
    Eat(){
      this.$EventBus.$emit('Eat',0)
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