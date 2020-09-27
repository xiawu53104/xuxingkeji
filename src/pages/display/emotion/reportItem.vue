<template>
  <div class="pages-display-emotion-reportItem" :style="{backgroundImage: backgroundImage}">
    <div class="number" :style="{color: count.color}">10,392</div>
    <div class="title" :style="{color: title.color}">企业总人数</div>
  </div>
</template>

<script>
export default {
  props: {
    count: Object,
    title: Object,
    backgroundImage: String,
  },
  computed: {
    countText() {
      const numbers = this.count.text.toString().split('').reverse()
      const segs = []
      while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
      return segs.join(',').split('').reverse().join('')
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion-reportItem{
  display: inline-block;
  width: 176px;
  height: 86px;
  // background-image: linear-gradient(#71BEFF, #284FB7);
  border-radius: 6px;
  text-align: center;
  .number{
    // color: #C6FCFF;
    font-size: 30px;
    margin-top: 10px;
  }
  .title{
    // color: #BFE0FF;
    font-size: 14px;
    margin-top: 5px;
  }
}
</style>
