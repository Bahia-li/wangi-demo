<template>
<div class="m-kingKongModule">
  <div class="m-carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="jacascript:" v-for="(kingkong,index) in kingkongs" :key="index">
            <img :src="kingkong.picUrl" alt="">
            <div class="swiper-text">
              <span>{{kingkong.text}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name:"KinKong",
    props:{
      kingkongs:Array
    },mounted () {
      console.log("kingkongs主键");
      
      console.log(this.kingkongs);
      
    }
  }
</script>
