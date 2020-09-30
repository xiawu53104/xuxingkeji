<template>
  <div class="pages-display-emotion-reportItem" @click="$emit('click')"
    :style="{backgroundImage: colors.backgroundImage}">
    <div class="number" :style="{color: colors.countColor}">{{count}}</div>
    <div class="title" :style="{color: colors.titleColor}">{{title}}</div>
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
  width: 11rem;
  height: 5.375rem;
  border-radius: 0.375rem;
  text-align: center;
  cursor: pointer;
  .number{
    font-size: 1.875rem;
    margin-top: 0.625rem;
  }
  .title{
    font-size: 0.875rem;
    margin-top: 0.3125rem;
  }
}
</style>
