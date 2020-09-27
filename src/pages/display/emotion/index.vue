<template>
  <div class="pages-display-emotion">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems" v-bind="item" :key="i"></report-item>
      </div>

      <div class="emotion-wrap clear-mgn" :style="{backgroundImage: `url(${emotionBg})`}">
        <img :src="emotionBg" class="bg">
        <div class="title-wrap">
          <img :src="titleBg" class="title-bg">
          <span class="title">情绪指数分布</span>
        </div>
        <img :src="moreIcon" class="more-icon">
        <div class="radio-wrap">
          <el-radio-group v-model="select">
            <el-radio :label="1">日度</el-radio>
            <el-radio :label="2">月度</el-radio>
            <el-radio :label="3">年度</el-radio>
          </el-radio-group>
        </div>
        <div class="container" ref="container"></div>
      </div>

      <div class="employee-history" :style="{backgroundImage: `url(${historyBg})`}">
        <div class="history-title-wrap" :style="{backgroundImage: `url(${historyTitleBg})`}">
          职工历史心理报告分析
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportItem from './reportItem'
import emotionBg from '@/assets/images/BG _4@2x.png'
import titleBg from '@/assets/images/多边形 1_4@2x.png'
import moreIcon from '@/assets/images/更多@2x.png'
import echarts from 'echarts'
import option from './emotion'
import historyBg from '@/assets/images/BG@2x.png'
import historyTitleBg from '@/assets/images/多边形 1@2x.png'

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
      emotionBg,
      titleBg,
      moreIcon,
      select: 1,
      historyBg,
      historyTitleBg,
    }
  },
  mounted() {
    var myChart = echarts.init(this.$refs.container)
    myChart.setOption(option)
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion{
  width: 100%;
  height: 100%;
  padding: 0 20px 32px 20px;
  display: flex;
  .left{
    width: 588px;
    padding-top: 32px;
  }
  .left-header{
    margin-bottom: 46px;
    .pages-display-emotion-reportItem:not(:last-child){
      margin-right: 22px;
    }
  }
  .emotion-wrap{
    width: 587px;
    height: 353px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bg{
      width: 587px;
      height: 353px;
      position: absolute;
      z-index: 0;
    }
    .title-wrap{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 222px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      .title-bg{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -99;
        top: 0;
        left: 0;
      }
      .title{
        font-size: 24px;
        color: #adfaff;
      }
    }
    .more-icon{
      position: absolute;
      width: 25px;
      height: 23px;
      top: 28px;
      right: 28px;
      cursor: pointer;
    }
    .radio-wrap{
      margin-top: 50px;
      margin-left: 30px;
    }
    .container{
      width: 360px;
      height: 260px;
      margin: 0 auto;
    }
  }
  .employee-history{
    width: 587px;
    height: 417px;
    margin-top: 35px;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .history-title-wrap{
      width: 332px;
      height: 53px;
      line-height: 53px;
      text-align: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ADFAFF;
      font-size: 24px;
    }
  }
}
</style>
