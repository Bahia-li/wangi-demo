<template>
  <div class="search">
    <div class="l-searchr">
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt">
          <i  class="iconfont icon-concou" ></i>
          <input class="inp" type="search" placeholder="9.9元超值专区">
        </div>
      </div>
      <div class="wraper-text" @click="$router.back()"> 
        <span>取消</span>
      </div>
    </div>
    <div class="m-searchSuggestionsViews">
      <div class="m-searchSuggestions">
        <header class="hd">
          <h3 class="tit">热门搜索</h3>
        </header>
        <nav class="list">
          <a :class="{on:isShow}" href="javascript:" @click="searchShow">停课不停学</a>
          <a href="">复工防护包</a>
          <a href="" 
          :key="index" 
          v-for="(category,index) in categoryList"
          @click="toSearchCon(index)"
          >
          {{category.categoryName}}</a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:"Search",
  computed: {
     ...mapState({
      firses:state=>state.firse.firses
    })
  },
  data () {
    return {
      isShow:false,
      categoryList:[]
    }
  },
  methods: {
    searchShow(){
      this.isShow = !this.isShow
    },
    toSearchCon(index){
      // console.log(index);
      
      //路由跳转
      this.$router.push(`/searchcon?index=${index}`)
    }
  },
  async mounted () {
    await this.$store.dispatch('getFirse')
    //获取数据
    const {categoryHotSellModule} = this.firses
    this.categoryList = categoryHotSellModule.categoryList
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.search
  width 100%
  .l-searchr
    height 50px
    width 100%
    font-size 15px
    display flex
    justify-content space-around
    background-color #fff
    border-bottom .5px solid #ccc
    .m-itemCateListHd
      width 80%
      height 100%
      display flex
      align-items center
      .m-topSearchIpt
        padding-left 10px
        width 100%
        height 30px
        background-color #ededed
        // text-align center
        line-height 30px
        border-radius 15px
        .iconfont
          margin-right 5px
        .inp
          background-color #ededed
    .wraper-text
      display flex
      align-items center
  .m-searchSuggestionsViews
    height 200px
    width 100%
    // background-color #ccc
    .m-searchSuggestions
      width 92%
      height 100%
      margin auto
      font-size 15px
      .hd
        height 50px
        line-height 50px
      .list
        display flex
        flex-wrap wrap
        a
          height 25px
          border 1px solid  #ccc
          display inline-block
          padding 0 8px
          line-height 25px
          margin 0 15px 15px 0
          border-radius 5px
          &.on
            border-color red
</style>