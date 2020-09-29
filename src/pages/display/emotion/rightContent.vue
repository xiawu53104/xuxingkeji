<template>
  <div class="pages-display-emotion-right">
    <div class="grade-wrap clear-mgn">
      <img :src="gradeBg" class="grade-bg">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        心理测评成绩分析
      </div>
      <div class="radio-wrap">
        <el-radio-group v-model="select">
          <el-radio :label="2">月度</el-radio>
          <el-radio :label="3">年度</el-radio>
        </el-radio-group>
      </div>
      <div class="list-title">测评排行榜</div>
      <img :src="moreImg" class="more-img">
      <div class="list-wrap">
        <scroll-list></scroll-list>
      </div>
      <div class="chart-title">测评成绩趋势图</div>
      <div ref="container" class="chart-wrap"></div>
    </div>

    <div class="result-wrap clear-mgn">
      <img :src="resultBg" class="result-bg">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        心理测评结果分析
      </div>
      <div class="content-wrap">
        <result-item title="情绪识别分析"></result-item>
        <result-item title="测评分析报告"></result-item>
      </div>
    </div>
  </div>
</template>

<script>
import gradeBg from '@/assets/images/BG _2@2x.png'
import titleBg from '@/assets/images/多边形 1_2@2x.png'
import ScrollList from '@/components/scrollList/index'
import moreImg from '@/assets/images/更多@2x.png'
import echarts from 'echarts'
import gradeOption from './grade'
import resultBg from '@/assets/images/BG@2x.png'
import ResultItem from './resultItem'

export default {
  components: {
    ScrollList,
    ResultItem
  },
  data() {
    return {
      gradeBg,
      titleBg,
      select: 2,
      moreImg,
      resultBg,
    }
  },
  mounted() {
    const chart = echarts.init(this.$refs.container)
    chart.setOption(gradeOption)
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion-right{
  width: 36.6875rem;
  height: 100%;
  .title-width{
    width: 18.25rem;
  }
  .grade-wrap{
    width: 100%;
    height: 30.25rem;
    position: relative;
    margin-top: 1.9375rem;
    .grade-bg{
      width: 100%;
      height: 30.25rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .radio-wrap{
      margin-left: 1.875rem;
      margin-top: 1.25rem;
    }
    .list-title{
      height: 1rem;
      font-size: 1rem;
      text-align: left;
      color: #ffffff;
      margin: 1.25rem 0 0.9375rem 1.875rem;
    }
    .more-img{
      width: 1.5625rem;
      height: 1.4375rem;
      position: absolute;
      top: 1.75rem;
      right: 1.75rem;
    }
    .list-wrap{
      height: 9.625rem;
      overflow: hidden;
      padding-right: 0.5rem;
    }
    .chart-title{
      font-size: 1rem;
      color: #ffffff;
      margin: 0.625rem 0 0.9375rem 1.875rem;
    }
    .chart-wrap{
      height: 12.5rem;
      width: 36.6875rem;
    }
  }
  .result-wrap{
    width: 36.6875rem;
    height: 26.0625rem;
    position: relative;
    margin-top: 2.375rem;
    .result-bg{
      width: 36.6875rem;
      height: 26.0625rem;
      position: absolute;
      z-index: 0;
    }
    .content-wrap{
      margin-top: 2.625rem;
      padding: 0 1.375rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
