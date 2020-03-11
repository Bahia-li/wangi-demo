<template>
  <!-- 断货补单 -->
<div class="m-sceneLightShoppingGuideModule">
  <div class="m-styleBanner" :key="index" v-for="(scene,index) in sceneLigh">
    <a class="m-styleBanner-cnt" >
      <div class="m-styleBanner-title">{{scene.styleItem.title}}</div>
      <div class="m-styleBanner-desc">{{scene.styleItem.desc}}</div>
      <div class="m-styleBanner-img">
        <i :key="index" v-for="(img,index) in scene.styleItem.picUrlList">
          <img :src="img" alt="">
        </i>
      </div>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name:"SceneLigh",
  props:{
    sceneLigh:Array
  }
}
</script>