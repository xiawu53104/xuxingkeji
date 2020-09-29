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
          <el-radio-group v-model="select1">
            <el-radio :label="1">日度</el-radio>
            <el-radio :label="2">月度</el-radio>
            <el-radio :label="3">年度</el-radio>
          </el-radio-group>
        </div>
        <div class="container" ref="container1"></div>
      </div>

      <div class="employee-history clear-mgn" :style="{backgroundImage: `url(${historyBg})`}">
        <div class="history-title-wrap" :style="{backgroundImage: `url(${historyTitleBg})`}">
          职工历史心理报告分析
        </div>
        <div class="radio-wrap">
          <el-radio-group v-model="select2">
            <el-radio :label="1">日度</el-radio>
            <el-radio :label="2">月度</el-radio>
            <el-radio :label="3">年度</el-radio>
          </el-radio-group>
          <div class="data-wrap" ref="container2"></div>
        </div>
      </div>
    </div>

    <center-content></center-content>
    <right-content></right-content>
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
import CenterContent from './centerContent'
import historyOption from './employeeHsitory'
import RightContent from './rightContent'

export default {
  components: {
    ReportItem,
    CenterContent,
    RightContent,
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
      select1: 1,
      select2: 1,
      historyBg,
      historyTitleBg,
    }
  },
  mounted() {
    var myChart = echarts.init(this.$refs.container1)
    myChart.setOption(option)
    var myChart1 = echarts.init(this.$refs.container2)
    myChart1.setOption(historyOption)
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion{
  width: 100%;
  height: 100%;
  padding: 0 1.25rem 2rem 1.25rem;
  display: flex;
  justify-content: space-around;
  .radio-wrap{
    margin-top: 3.125rem;
    margin-left: 1.875rem;
  }
  .left{
    width: 36.75rem;
    padding-top: 2rem;
  }
  .left-header{
    margin-bottom: 2.875rem;
    .pages-display-emotion-reportItem:not(:last-child){
      margin-right: 1.375rem;
    }
  }
  .emotion-wrap{
    width: 100%;
    height: 22.0625rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .bg{
      width: 36.6875rem;
      height: 22.0625rem;
      position: absolute;
      z-index: 0;
    }
    .title-wrap{
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 13.875rem;
      height: 3.3125rem;
      line-height: 3.3125rem;
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
        font-size: 1.5rem;
        color: #adfaff;
      }
    }
    .more-icon{
      position: absolute;
      width: 1.5625rem;
      height: 1.4375rem;
      top: 1.75rem;
      right: 1.75rem;
      cursor: pointer;
    }
    .container{
      width: 22.5rem;
      height: 16.25rem;
      margin: 0 auto;
    }
  }
  .employee-history{
    width: 36.6875rem;
    height: 26.0625rem;
    margin-top: 2.1875rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .history-title-wrap{
      width: 20.75rem;
      height: 3.3125rem;
      line-height: 3.3125rem;
      text-align: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ADFAFF;
      font-size: 1.5rem;
    }
    .data-wrap{
      width: 35rem;
      height: 18.75rem;
      margin-top: 2.625rem;
    }
  }
}
</style>
