<template>
  <div class="pages-display-emotion-right">
    <div class="grade-wrap clear-mgn">
      <img :src="gradeBg" class="grade-bg">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        心理测评成绩分析
      </div>
      <div class="radio-wrap">
        <el-radio-group v-model="select" @change="gradeChange">
          <el-radio :label="2">本月</el-radio>
          <el-radio :label="3">本年</el-radio>
        </el-radio-group>
      </div>
      <div class="list-title">测评排行榜</div>
      <img :src="moreImg" class="more-img">
      <div class="list-wrap">
        <scroll-list :data="users">
          <template v-slot:default="{data: {i, item}}">
            <span class="list-item">{{`TOP${i}`}}</span>
            <span class="list-item">{{item.name}}</span>
            <span class="list-item">{{item.department}}</span>
            <span class="list-item">{{item.position}}</span>
          </template>
        </scroll-list>
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
        <result-item title="情绪识别分析">
          <div class="radio-box">
            <el-radio-group v-model="select1">
              <el-radio :label="1">日度</el-radio>
              <el-radio :label="2">月度</el-radio>
              <el-radio :label="3">年度</el-radio>
            </el-radio-group>
          </div>
          <div ref="chartWrap1" class="chart-wrap"></div>
        </result-item>
        <result-item title="测评分析报告">
          <div class="radio-box">
            <el-radio-group v-model="select2">
              <el-radio :label="1">日度</el-radio>
              <el-radio :label="2">月度</el-radio>
              <el-radio :label="3">年度</el-radio>
            </el-radio-group>
          </div>
          <div ref="chartWrap2" class="chart-wrap"></div>
        </result-item>
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
import recognitionOption from './recognition'
import appraisalOption from './appraisal'
import * as service from '../apis'
import getUsers from '../user'

const getMonthDays = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const d = new Date(year, month, 0)
  return d.getDate()
}

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
      select1: 1,
      select2: 1,
      users: [],
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.container)
    this.initGradeChart(this.select)
    this.initUsers()

    const chart1 = echarts.init(this.$refs.chartWrap1)
    chart1.setOption(recognitionOption)
    const chart2 = echarts.init(this.$refs.chartWrap2)
    chart2.setOption(appraisalOption)
  },
  methods: {
    async initGradeChart(type) {
      let option = JSON.parse(JSON.stringify(gradeOption))
      if (type == 2) {
        const axis = []
        for (let i = 1; i <= getMonthDays(); i++) {
          axis.push(i)
        }
        option.xAxis.data = axis
      }
      const rawData = await service.getPsychology()
      option.series[0].data = rawData.data.trend.map(x => x.avg)
      this.chart.setOption(option)
    },
    initUsers() {
      const users = getUsers()
      this.users = users.sort((a, b) => b.avg - a.avg).slice(0, 20)
    },
    gradeChange(v) {
      this.initGradeChart(v)
    },
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
      .list-item{
        display: inline-block;
        width: 5rem;
      }
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
      .radio-box{
        margin-top: 0.625rem;
        margin-left: 1.25rem;
      }
      .chart-wrap{
        width: 100%;
        height: 16.875rem;
      }
    }
  }
}
</style>
