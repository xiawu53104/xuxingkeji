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
  width: 587px;
  height: 100%;
  .title-width{
    width: 292px;
  }
  .grade-wrap{
    width: 100%;
    height: 484px;
    position: relative;
    margin-top: 31px;
    .grade-bg{
      width: 100%;
      height: 484px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .radio-wrap{
      margin-left: 30px;
      margin-top: 20px;
    }
    .list-title{
      height: 16px;
      font-size: 16px;
      text-align: left;
      color: #ffffff;
      margin: 20px 0 15px 30px;
    }
    .more-img{
      width: 25px;
      height: 23px;
      position: absolute;
      top: 28px;
      right: 28px;
    }
    .list-wrap{
      height: 154px;
      overflow: hidden;
    }
    .chart-title{
      font-size: 16px;
      color: #ffffff;
      margin: 10px 0 15px 30px;
    }
    .chart-wrap{
      height: 200px;
      width: 587px;
    }
  }
  .result-wrap{
    width: 587px;
    height: 417px;
    position: relative;
    margin-top: 38px;
    .result-bg{
      width: 587px;
      height: 417px;
      position: absolute;
      z-index: 0;
    }
    .content-wrap{
      margin-top: 42px;
      padding: 0 22px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
