<template>
  <!-- 新品首发 -->
<div class="m-newItemModule">
  <div class="newItem-moduleTitle">
    <div>
      新品首发
    </div>
    <div>
      <span>更多</span>
      <i> > </i>
    </div>
  </div>
  <div class="newItem-cnt">
    <a href="" class="m-indexNewItemItem" :key="index" v-for="(item,index) in newItemList">
      <div class="newItem-img">
        <img :src="item.listPicUrl" alt="">
      </div>
      <div class="newItem-name">
        <span>{{item.name}}</span>
      </div>
      <div class="newItem-price">
        <span>￥59</span>
      </div>
      <div class="newItem-tagWraper" >
        <span :key="index" v-for="(tag,index) in item.itemTagList">{{tag.name}}</span>
      </div>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name:"NewItemList",
  props:{
    newItemList:Array
  }
}
</script>
