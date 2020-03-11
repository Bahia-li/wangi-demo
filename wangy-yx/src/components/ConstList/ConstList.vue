<template>
<div class="constList">
  <div class="hd"></div>
  <ul class="list">
    <li class="cate-item" v-for="(sub,index) in content" :key="index">
      <div class="cateImgWrapper">
        <div class="cate-img">
          <img :src="sub.wapBannerUrl" alt="">
        </div>
        <div class="cate-rx">{{sub.name}}</div>
      </div>
    </li>
  </ul> 
</div>
</template>
<script>
export default {
  props: {
    content:Array
  },
  name:"ConstList",
  mounted () {
    console.log(this.content);
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.constList
    width 100%
    padding-bottom 10px
    .hd
      font-weight 600
      padding-bottom 10px
      border-bottom .5px solid #cccccc
    .list
      display flex
      flex-wrap wrap
      justify-content space-between
      .cate-item
        margin-top 10px
        .cateImgWrapper
          height 100px
          width 80px
          .cate-img
            height 85px
            width 100%
            img 
              height 100%
              width 100%
          .cate-rx
            padding-top 4px
            text-align center
            font-size 14px
</style>