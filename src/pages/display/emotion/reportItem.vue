<template>
  <div class="pages-display-emotion-reportItem" :style="{backgroundImage: colors.backgroundImage}">
    <div class="number" :style="{color: colors.countColor}">10,392</div>
    <div class="title" :style="{color: colors.titleColor}">企业总人数</div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    title: String,
    colorType: String,
  },
  data() {
    return {
      colorTypeMaps: {
        bule: {
          countColor: '#C6FCFF',
          titleColor: '#BFE0FF',
          backgroundImage: 'linear-gradient(#71BEFF, #284FB7)'
        },
        green: {
          countColor: '#D4FFF2',
          titleColor: '#BDFFEB',
          backgroundImage: 'linear-gradient(#71FFCF, #18967A)'
        },
        yellow: {
          countColor: '#FFFFFF',
          titleColor: '#FFF2BF',
          backgroundImage: 'linear-gradient(#FFED71, #C56202)'
        },
      }
    }
  },
  computed: {
    countText() {
      const numbers = this.count.toString().split('').reverse()
      const segs = []
      while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
      return segs.join(',').split('').reverse().join('')
    },
    colors() {
      return this.colorTypeMaps[this.colorType];
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
