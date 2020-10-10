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
      <img :src="moreImg" class="more-img" @click="handleGradeMore">
      <div class="list-wrap">
        <scroll-list :data="users">
          <template v-slot:default="{data: {i, item}}">
            <span class="list-item">{{`TOP${i + 1}`}}</span>
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
            <el-radio-group v-model="select1" @change="chart1Change">
              <el-radio :label="1">本日</el-radio>
              <el-radio :label="2">本月</el-radio>
            </el-radio-group>
          </div>
          <div ref="chartWrap1" class="chart-wrap"></div>
        </result-item>
        <result-item title="测评分析报告">
          <div class="radio-box" style="text-align:right;margin-right: 1.25rem">
            <el-date-picker
              size="mini"
              :clearable="false"
              style="width: 5rem"
              v-model="select2"
              type="month"
              placeholder="统计月度">
            </el-date-picker>
          </div>
          <div ref="chartWrap2" class="chart-wrap"></div>
        </result-item>
      </div>
    </div>

    <DialogWithTable v-model="dialogVisible" :total="tableTotal.length" :title="dialogTitle"
      :pageChange="pageChange" :isLoading="false" v-if="dialogVisible">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.name" placeholder="职工姓名" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.department" placeholder="职工部门" style="width: 10.625rem;">
              <el-option
                v-for="item in departmentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.spy" placeholder="特殊工种" style="width: 10.625rem;">
              <el-option
                v-for="item in spyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.resultV" placeholder="测评结果" style="width: 10.625rem;">
              <el-option
                v-for="item in resultOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              style="width: 10.625rem;"
              v-model="formInline.month"
              type="month"
              value-format="yyyy-MM"
              placeholder="统计月度">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="tableData" style="width: 100%" size="mini" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="department" label="职工部门"></el-table-column>
        <el-table-column prop="position" label="职工职位"></el-table-column>
        <el-table-column prop="spy" label="特殊工种"></el-table-column>
        <el-table-column prop="times" label="测评次数"></el-table-column>
        <el-table-column prop="resultAnalysis" label="结果分析"></el-table-column>
        <el-table-column prop="statisticsMonth" label="统计月度"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="showDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>

    <DialogWithTable v-model="showLogDialog" :title="logDialogTitle" :total="logTableData.length"
      v-if="showLogDialog">
      <template v-slot:search>
        <el-form :inline="true" :model="logSearch" size="mini">
          <el-form-item >
            <el-input v-model="logSearch.scale" placeholder="量表名称" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="logSearch.resultV" placeholder="测评结果" style="width: 10.625rem;">
              <el-option
                v-for="item in resultOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              style="width: 10.625rem;"
              v-model="logSearch.time"
              type="date"
              value-format="yyyy-MM-dd"
              :clearable="false"
              placeholder="测评时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogSearch">搜索</el-button>
            <el-button type="success" @click="logleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="logTableData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="scale" label="测评量表"></el-table-column>
        <el-table-column prop="score" label="测评得分"></el-table-column>
        <el-table-column prop="resultAnalysis" label="测评结果"></el-table-column>
        <el-table-column prop="time" label="测评时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="">
            <el-button type="text" size="small" @click="cepingDetail">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
  </div>
</template>

<script>
import gradeBg from '@/assets/images/grade-bg.png'
import titleBg from '@/assets/images/多边形 1_2@2x.png'
import ScrollList from '@/components/scrollList/index'
import DialogWithTable from '@/components/dialogWithTable/index'
import moreImg from '@/assets/images/更多@2x.png'
import echarts from 'echarts'
import gradeOption from './grade'
import resultBg from '@/assets/images/BG@2x.png'
import ResultItem from './resultItem'
import recognitionOption from './recognition'
import appraisalOption from './appraisal'
import * as service from '../apis'
import { getEmotionList, getHistoryLog } from '../user'
import Util from '@/common/utils'

// const getMonthDays = () => {
//   const date = new Date()
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const d = new Date(year, month, 0)
//   return d.getDate()
// }

const totalUsers = getEmotionList()
let logListData = []

export default {
  components: {
    ScrollList,
    ResultItem,
    DialogWithTable,
  },
  data() {
    return {
      gradeBg,
      titleBg,
      select: 2,
      moreImg,
      resultBg,
      select1: 2,
      select2: new Date(),
      users: [],
      dialogVisible: false,
      dialogTitle: '',
      showLogDialog: false,
      logDialogTitle: '',
      tableTotal: totalUsers,
      formInline: {
        name: '',
        department: '',
        spy: '',
        resultV: '',
        month: '',
      },
      logSearch: {
        scale: '',
        resultV: '',
        time: '',
      },
      departmentOptions: [
        { value: '技术部', label: '技术部' },
        { value: '工程部', label: '工程部' },
        { value: '财务部', label: '财务部' },
      ],
      spyOptions: [
        { value: '检修工', label: '检修工' },
        { value: '切割工', label: '切割工' },
      ],
      resultOptions: [
        { value: '优秀', label: '优秀' },
        { value: '一般', label: '一般' },
        { value: '差', label: '差' },
        { value: '极差', label: '极差' },
      ],
      tableData: [],
      logTableData: [],
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.container)
    this.initGradeChart(this.select)
    this.initUsers()

    this.chart1 = echarts.init(this.$refs.chartWrap1)
    this.initRecognitionChart()
    this.chart2 = echarts.init(this.$refs.chartWrap2)
    this.initReportChart()
  },
  methods: {
    async initGradeChart(type) {
      let option = Util.clone(gradeOption)
      if (type == 2) {
        // const axis = []
        // for (let i = 1; i <= getMonthDays(); i++) {
        //   axis.push(i)
        // }
        const m = new Date().getMonth()
        option.xAxis.data = [`${m + 1}月`]
      }
      const rawData = await service.getPsychology()
      if (type == 2) {
        option.series[0].data = rawData.data.trend.map(x => x.avg)
      }
      this.chart.setOption(option)
      const that = this
      this.chart.on('click', 'series.line', function() {
        that.handleGradeMore()
      })
    },
    initRecognitionChart() {
      const option = Util.clone(recognitionOption)
      this.chart1.setOption(option)
      const that = this
      this.chart1.on('click', function(params) {
        that.$emit('showLogTable', params.name)
      })
      this.chart1.on('mouseover', function() {
        const option = Util.clone(recognitionOption)
        option.series.label.show = false
        if (that.select1 == 1) {
          option.series.data[0].value = 18
          option.series.data[1].value = 8
        }
        that.chart1.setOption(option)
      })
      this.chart1.on('mouseout', function() {
        const option = Util.clone(recognitionOption)
        option.series.label.show = true
        if (that.select1 == 1) {
          option.series.data[0].value = 18
          option.series.data[1].value = 8
        }
        that.chart1.setOption(option)
      })
    },
    initUsers() {
      this.users = totalUsers.sort((a, b) => b.avg - a.avg).slice(0, 20)
    },
    gradeChange(v) {
      this.initGradeChart(v)
      const start = Math.round(Math.random()*20)
      const end = start + 20
      this.users = totalUsers.sort((a, b) => b.avg - a.avg).slice(start, end)
    },
    chart1Change(v) {
      let option = Util.clone(recognitionOption)
      if (v == 1) {
        option.series.data[0].value = 18
        option.series.data[1].value = 8
        this.chart1.setOption(option)
      }
      if (v == 2) {
        this.chart1.setOption(option)
      } 
    },
    async initReportChart() {
      const rawData = await service.getReport()
      const options = appraisalOption
      options.series[0].data.forEach(x => {
        x.value = rawData.data[x.key]
      })
      this.chart2.setOption(options)
      const that = this
      this.chart2.on('click', function(params) {
        let result = totalUsers.filter(x => x.resultAnalysis == params.name)
        that.tableTotal = result
        that.tableData = that.tableTotal.slice(0, 10)
        that.dialogVisible = true
        that.dialogTitle = '测评分析报告列表'
      })
    },
    handleGradeMore() {
      this.dialogVisible = true
      this.dialogTitle = '测评排行榜列表'
      this.tableData = this.tableTotal.slice(0, 10)
    },
    pageChange(v) {
      const start = (v - 1)*10
      const end = start + 10
      this.tableData = this.tableTotal.slice(start, end)
    },
    handleSearch() {
      let result
      const { name, department, spy, resultV, month } = this.formInline
      if (name) {
        result = totalUsers.filter(x => x.name.includes(name))
      }
      if (department) {
        result = (result || totalUsers).filter(x => x.department == department)
      }
      if (spy) {
        result = (result || totalUsers).filter(x => x.spy.includes(spy))
      }
      if (resultV) {
        result = (result || totalUsers).filter(x => x.resultAnalysis.includes(resultV))
      }
      if (month) {
        result = (result || totalUsers).filter(x => x.statisticsMonth == month)
      }
      this.tableTotal = result
      this.tableData = this.tableTotal.slice(0, 10)
    },
    handleReset() {
      Object.keys(this.formInline).forEach(x => {
        this.formInline[x] = ''
      })
      this.tableTotal = totalUsers
      this.tableData = this.tableTotal.slice(0, 10)
    },
    showDetail(row) {
      this.logDialogTitle = `${row.name}-${row.statisticsMonth}-测评记录`
      logListData = getHistoryLog(row)
      this.logTableData = logListData
      this.showLogDialog = true
    },
    handleLogSearch() {
      const { scale, resultV, time } = this.logSearch
      if (scale) {
        this.logTableData = logListData.filter(x => x.scale.includes(scale))
      }
      if (resultV) {
        this.logTableData = logListData.filter(x => x.resultAnalysis.includes(resultV))
      }
      if (time) {
        this.logTableData = logListData.filter(x => x.time.includes(time))
      }
    },
    logleReset() {
      Object.keys(this.logSearch).forEach(k => {
        this.logSearch[k] = ''
      })
      this.logTableData = logListData
    },
    cepingDetail() {
      this.$emit('showCePing')
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
      cursor: pointer;
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
