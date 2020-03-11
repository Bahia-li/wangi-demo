<template>
  <div class="g-bd">
    <div class="l-cateList">
      <!-- 头部搜索 -->
      <div class="l-hdWraper">
        <div class="m-itemCateListHd">
          <div class="m-topSearchIpt">
            <i  class="iconfont icon-concou" ></i>
            <span class="placeholder" @click="$router.push('/search')">搜索商品, 共23602款好物</span>
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="m-cateContainer">
        <!-- 右侧导航 -->
        <div class="cate-list" v-if="cateList.length">
          <ul class="list">
            <li v-for="(cate,index) in cateList" 
            :key="index"
            @click="toCate(cate.id)"
            >
            {{cate.name}}</li>
          </ul>
          <!-- <van-sidebar>
            <van-sidebar-item @click="toCate(cate.id)" :title="cate.name" v-for="(cate,index) in cateList" :key="index"/>
          </van-sidebar> -->
        </div>
        <div class="cate-content">
          <!-- 头部图片 -->
          <div class="banner">
            <img src="./img/const-list/hd-1.webp" alt="">
          </div>
          <!-- ConstList主键 -->
          <ConstList :content="content"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import ConstList from '../../components/ConstList/ConstList.vue'
// import { Notify } from 'vant';
export default {
  name:"Sort",
  components: {
    ConstList
  },
  data () {
    return {
      cateList :[],//数据集合
      content :[],
      isCateShow :false//定义选中的状态
    }
  },
  computed: {
    ...mapState({
      cates:state => state.cate.cates
    })
    
  },
  beforeMount (){
    // console.log(111);
  },
  methods: {  
    toCate(cateid){
      
      const data = this.cateList.filter(cate => cate.id === cateid)
      
      if(data[0].categoryList){
        this.content = data[0].categoryList
      }else{
         this.content = data[0].subCateList
      }
      // this.content = data[0]
      this.isCateShow = !this.isCateShow

      // this.currentIndex(cateid)
    }
  },
  async mounted () {
    // console.log(222);
    
    // //页面加载完成之后调用数据数据
    await this.$store.dispatch('getCates')
    
    // //筛选数据
    // const result = this.cates.filter(cate => {
    //   //判断categoryTyp是否存在
    //   if(cate.categoryType === 0){
    //     return cate
    //   }
    // })

    //获取数据
    this.cateList = this.cates
    //初始化显示第一个信息
    if(this.cateList[0].categoryList){
        this.content = this.cateList[0].categoryList
    }else{
      this.content = this.cateList[0].subCateList
    }
  }
}
</script>
<style lang="stylus" rel='stylusheet/stylus'>
.l-hdWraper
  height 50px
  width 100%
  font-size 15px
  display flex
  justify-content center
  position fixed
  background-color #fff
  border-bottom .5px solid #ccc
  top 0
  left 0
  z-index 1
  .m-itemCateListHd
    width 90%
    height 100%
    display flex
    align-items center
    .m-topSearchIpt
      width 100%
      height 30px
      background-color #ededed
      text-align center
      line-height 30px
      border-radius 15px
      .iconfont
        margin-right 5px
.m-cateContainer
  // display flex
  width 100%
  font-size 15px
  margin-top 60px
  position relative
  .cate-list
    width 95px
    text-align center
    position fixed
    left 0
    top 60px
    .list
      li
        height 20px
        line-height 20px
        margin-top 20px
        &.on
          background-color #ccc
  .cate-content
    float right 
    width 262px
    margin-top 10px
    padding-bottom 53px
    .banner
      height 120px
      width 100%
      margin-bottom 20px
      img 
        height 100%
        width 100%
    
</style>