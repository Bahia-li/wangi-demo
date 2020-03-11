<template>
<div class="g-db">
  <div class="height">
    <div class="height-top">
      <van-icon @click="$router.push('/')" name="wap-home-o" size="30px" class="icon"/>
      <van-search
        placeholder="复工防护包"
        use-action-slot
        bind:change="onChange"
        bind:search="onSearch"
        right-icon="cross"
        class="inp"
        @click="$router.back()"
      >
      </van-search>
    </div>
    <div class="height-nav">
      <van-tabs bind:change="onChange">
        <van-tab title="综合"></van-tab>
        <van-tab title="价格"></van-tab>
        <van-tab title="分类"></van-tab>
      </van-tabs>
    </div>
  </div>
  <div class="g-img">
    <van-grid column-num="2">
       <van-grid-item :key="index" v-for="(category,index) in category.itemPicBeanList">
          <img :src="category.picUrl" style="width: 100%; height: 175px" alt="">
          <div class="l-con-text">
             <span class="l-text">你与深夜食堂，只差一口锅</span>
          </div>
          <div class="name">
            <span>煮面煮粥热得快 日本制造雪平锅</span>
          </div>
          <div class="c-price">
            <span>￥129</span>
            <span class="price-hei">￥149</span>
          </div>
          <div class="newItem-tagWraper">
            <span>满88顺丰包邮</span>
             <span>新人特价</span>
          </div>
      </van-grid-item>
    </van-grid>
  </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:"SearchCon",
  data () {
    return {
      category:{}
    }
  },
  computed: {
    ...mapState({
      firses:state=>state.firse.firses
    })
  },
  async mounted () {
     await this.$store.dispatch('getFirse')
    //获取数据
    const i =this.$route.query.index
    
    const {categoryHotSellModule} = this.firses
    const categoryList = categoryHotSellModule.categoryList
    
    const category = categoryList.find((item,index)=> index == i)
    this.category = category
    
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.height
  width 100%
  .height-top
    display flex
    justify-content space-between
    align-items center
    .icon
      display inline-block
      margin-left 10px
    .inp
      width 85%
.g-img
  font-size 15px
  .l-con-text
    background-color #F1ECE2
    font-size 12px
    height 25px
    width 100%
    line-height 25px
    .l-text
      padding-left 10px
  .name
    font-size 14px
    width 100%
    height 30px
    padding 10px
  .c-price
    width 100%
    color red
    float left
    .price-hei
      color #ccc
      font-size 12px
      text-decoration:line-through
  .newItem-tagWraper
    width 100%
    padding-left 5px
    span
      line-height 18px
      border 1px solid red
      border-radius 10px
      color red
      font-size 8px
      margin-right 10px
</style>