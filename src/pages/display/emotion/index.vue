<template>
  <div class="pages-display-emotion">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems" v-bind="item" :key="i"></report-item>
      </div>
    </div>
  </div>
</template>

<script>
import ReportItem from './reportItem'

export default {
  components: {
    ReportItem,
  },
  data() {
    return {
      reportItems: [
        {
          count: { text: 10392, color: '#C6FCFF' },
          title: { text: '企业总人数', color: '#BFE0FF' },
          backgroundImage: 'linear-gradient(#71BEFF, #284FB7)'
        },
        {
          count: { text: 2873, color: '#D4FFF2' },
          title: { text: '历史情绪识别', color: '#BDFFEB' },
          backgroundImage: 'linear-gradient(#71FFCF, #18967A)'
        },
        {
          count: { text: 17215, color: '#FFFFFF' },
          title: { text: '预警人次', color: '#FFF2BF' },
          backgroundImage: 'linear-gradient(#FFED71, #C56202)'
        },
      ],
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion{
  width: 100%;
  height: 100%;
  padding: 0 20px 32px 20px;
  .left{
    width: 588px;
    padding-top: 32px;
  }
  .pages-display-emotion-reportItem:not(:last-child){
    margin-right: 22px;
  }
}
</style>
