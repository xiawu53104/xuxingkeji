<template>
  <div class="pages-result-item">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="less" scoped>
.pages-result-item{
  width: 266px;
  height: 348px;
  background: rgba(255,255,255,0.1);
  border-radius: 5px;
  display: inline-block;
  .title{
    height: 44px;
    background: rgba(173,250,255,0.1);
    line-height: 44px;
    padding-left: 20px;
    color: #fff;
    font-size: 16px;
  }
}
</style>
