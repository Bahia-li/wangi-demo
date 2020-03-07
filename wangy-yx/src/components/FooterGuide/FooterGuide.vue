<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;"
    class="guide_item"
    @click="goto('/first')"
    :class="{on:$route.path==='/first'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;"
    class="guide_item"
     @click="goto('/sort')"
     :class="{on:$route.path==='/sort'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;"
    class="guide_item"
      @click="goto('/worth')"
      :class="{on:$route.path==='/worth'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-dianpu"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;"
    class="guide_item"
    @click="goto('/mycarth')"
    :class="{on:$route.path==='/mycarth'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-gouwu"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;"
    class="guide_item"
     @click="goto('/personal')"
     :class="{on:$route.path==='/personal'}"
    >
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name:'FooterGuide',
  methods: {
    goto(path){
      //判断当前跳转的界面是否在同一个界面
      console.log(this.$route.path);
      if(this.$route.path !== path){
        this.$router.replace(path)
      }
    }
  }
}

</script>

<style lang="stylus" rel='stylusheet/stylus'>
@import '../../common/stylus/mixins.styl';
.footer_guide
  too-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #ffffff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 3px
    color #999999
    &.on
      color red
    span 
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 20px
</style>