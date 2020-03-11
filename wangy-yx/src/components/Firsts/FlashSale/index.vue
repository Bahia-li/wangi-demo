<template>
<div class="m-flashSaleModule">
  <div class="flashSale-moduleTitle">
    <div>
      <span>限时购</span>
      <div class="show-item" style="width:150px;heigth:100%">
        <!-- 定时器主键 -->
        <van-count-down :time="time" @change="onChange">
          <span class="item">{{ timeData.hours }}</span>
          <span >:</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span>:</span>
          <span class="item">{{ timeData.seconds }}</span>
        </van-count-down>
      </div>
    </div>
    <div>
      <span>更多</span>
      <i> > </i>
    </div>
  </div>
  <div class="flashSale-cnt">
    <a href="" class="m-indexFlashSaleItem" :key="index" v-for="(item,index) in flashSale.itemList">
      <div class="flashSale-img">
        <img :src="item.picUrl" alt="">
      </div>
      <div class="flashSale-price">
        <span class="actualPrice">￥{{item.activityPrice}}</span>
        <span class="retailPrice">￥{{item.originPrice}}</span>
      </div>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name:"FlashSale",
  data () {
    return {
      //定义时间
      time: 30 * 60 * 60 * 1000,
      timeData: {}
    }
  }, 
  methods: {
    //定时器
    onChange(e) {
      this.timeData = e
    }
  },
  props:{
    flashSale:Object
  }
}
</script>

<style lang="stylus" rel='stylusheet/stylus'>
.show-item
  display inline-block
  margin-left 10px
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #000;
  border-radius: 2px;
  margin-left 10px
}
</style>