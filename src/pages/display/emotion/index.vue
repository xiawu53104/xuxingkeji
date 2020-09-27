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
        { count: 10392, title: '企业总人数', colorType: 'bule' },
        { count: 2873, title: '历史情绪识别', colorType: 'green' },
        { count: 17215, title: '预警人次', colorType: 'yellow' },
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
