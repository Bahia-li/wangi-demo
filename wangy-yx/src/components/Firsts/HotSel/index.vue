<template>
  <!-- 类目热销榜 -->
<div class="m-categoryHotSellModule">
    <div class="moduleTitle">
      <div class="moduleTitle-left">
        <span>{{hotSels.title}}</span>
      </div>
    </div>
    <div class="L-content">
      <div class="content-line1">
        <a href="" v-for="(hot,index) in arr1" :key="index" class="item-big item-1" style="background-color:#F9F3E4">
          <div class="data-reactid">
            <div class="data-reactid-name">
              <span>{{hot.categoryName}}</span>
            </div>
          </div>
          <div class="imgWrap">
            <div class="imgWrap-img">
              <img :src="hot.picUrl" alt="">
            </div>
          </div>
        </a>
        <!-- <a href="" class="item-big item-2" style="background-color:#EBEFF6">
          <div class="data-reactid">
            <div class="data-reactid-name">
              <span>好评榜</span>
            </div>
          </div>
          <div class="imgWrap">
            <div class="imgWrap-img">
              <img src="./img/index/reactid-2.webp" alt="">
            </div>
          </div>
        </a> -->
      </div>
      <div class="content-line2">
        <a href="" class="content-item"  v-for="(hot2,index) in arr2" :key="index">
          <div class="name">
            {{hot2.categoryName}}
          </div>
          <div class="content-img">
            <img :src="hot2.picUrl" alt="">
          </div>
        </a>
      </div>
    </div>
</div>
<!-- <div>{{hotSels.title}}</div> -->
</template>
<script>
export default {
  name:"HotSel",
  props:{
    hotSels:Object
  },
  data () {
    return {
      arr1:[],
      arr2:[]
    }
  },
  watch:{
    hotSels(newValue){
      this.arr1 =  newValue.categoryList.filter((item,index)=>{
        if(index === 0 || index === 1){
          return item
        }
      })
      this.arr2 = newValue.categoryList.filter((item,index)=>{
        if(index != 0 && index != 1){
          return item
        }
      })
    }
  },
  mounted () {
  }
}
</script>