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
  width: 16.625rem;
  height: 21.75rem;
  background: rgba(255,255,255,0.1);
  border-radius: 0.3125rem;
  display: inline-block;
  .title{
    height: 2.75rem;
    background: rgba(173,250,255,0.1);
    line-height: 2.75rem;
    padding-left: 1.25rem;
    color: #fff;
    font-size: 1rem;
  }
}
</style>
