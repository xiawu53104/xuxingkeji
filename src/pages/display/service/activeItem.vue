<template>
  <div class="pages-display-service-avtiveItem">
    <img :src="imgPath" class="img">
    <div class="descript">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores aspernatur tempora
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: String,
  }
}
</script>

<style lang="less" scoped>
.pages-display-service-avtiveItem{
  width: 12.5rem;
  position: relative;
  margin-right: 1.25rem;
  .img{
    width: 100%;
  }
  .descript{
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    font-size: 0.875rem;
    color: #ffffff;
    padding: 0.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5rem;
  }
}
</style>