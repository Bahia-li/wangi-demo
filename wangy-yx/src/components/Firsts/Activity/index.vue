<template>
<!-- 新人专享礼 -->
<div class="m-freshmanModule">
  <div class="module-title">
    <span class="module-text">
      -新人专享礼-
    </span>
  </div>
  <div class="module-coutner">
    <a class="module-coutner-left" href="">
      <div class="module-coutner-left-name">新人专享礼包</div>
      <div class="module-coutner-left-imgWrap">
        <div class="left-img">
          <img class="m-lazyload" src="./img/index/xinren.png" alt="">
        </div>
        <!-- <div class="animate"></div> -->
      </div>
    </a>
    <div class="module-coutner-right">
      <div class="right-module1">
        <a href="" class="right-activityItem1">
          <div class="picWrap">
            <div >
              <img class="picWrap-img-ymj" :src="Activitys[0].picUrl" alt="">
            </div>
            <div class="picWrap-prive">
              <span>{{Activitys[0].activityPrice}}</span>
              <span class="picWrap-prive-text2">{{Activitys[0].originPrice}}</span>
            </div>
          </div>
          <div class="discount">
            <span class="discount-ft">{{Activitys[0].subTitle}}</span>
            <span class="discount-tj">{{Activitys[0].title}}</span>
          </div>
        </a>
      </div>
      <div class="right-module2" >
        <a href="" class="right-activityItem2">
          <div class="cnt">
            <span class="cnt-t">{{Activitys[1].title}}</span>
            <span class="cnt-b">{{Activitys[1].tag}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:"Activity",
  props: {
    Activitys:Array
  },
  mounted () {
    
  }
}
</script>