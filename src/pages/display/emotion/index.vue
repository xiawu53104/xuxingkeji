<template>
  <div class="pages-display-emotion">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems"
          v-bind="item" :key="i" @click="handleClick(item)"></report-item>
      </div>

      <div class="emotion-wrap clear-mgn" :style="{backgroundImage: `url(${emotionBg})`}">
        <img :src="emotionBg" class="bg">
        <div class="title-wrap">
          <img :src="titleBg" class="title-bg">
          <span class="title">情绪指数分布</span>
        </div>
        <img :src="moreIcon" class="more-icon" @click="handleEmotionMore">
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
          <div class="date-picker-wrap">
            <el-date-picker
              :picker-options="pickerOption"
              align="right"
              style="width: 4.25rem"
              :editable="false"
              :clearable="false"
              size="mini"
              v-model="selsctYear"
              @change="onChange"
              type="year"
              placeholder="选择年">
            </el-date-picker>
            <img :src="arrowIcon" class="arrow">
          </div>
        </div>
        <div class="data-wrap" ref="container2"></div>
      </div>
    </div>

    <DialogWithTable v-model="dialogVisible" :total="users.length" title="企业职工列表"
      :pageChange="pageChange" :isLoading="false" v-if="dialogVisible">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.nameOrPhone" placeholder="员工姓名/手机号" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.department" placeholder="员工部门" style="width: 10.625rem;">
              <el-option
                v-for="item in departmentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.isSpy" placeholder="是否特殊工种" style="width: 13rem;">
              <el-option
                v-for="item in isSpyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.sexy" placeholder="性别" style="width: 10.625rem;">
              <el-option
                v-for="item in sexyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="tableData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="sexy" label="性别"></el-table-column>
        <el-table-column prop="department" label="职工部门"></el-table-column>
        <el-table-column prop="position" label="职工职位"></el-table-column>
        <el-table-column prop="isSpy" label="是否特殊工种"></el-table-column>
        <el-table-column prop="phone" label="职工手机号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="">
            <el-button type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>

    <el-dialog title="情绪识别记录" width="79.875rem"
      :visible.sync="logDialogVisible">
      <el-form :inline="true" :model="formInline" size="mini">
        <el-form-item >
          <el-input v-model="formInline.nameOrPhone" placeholder="员工姓名/手机号" style="width: 150px"></el-input>
        </el-form-item>
        <el-form-item >
          <el-select v-model="formInline.department" placeholder="员工部门" style="width: 10.625rem;">
            <el-option
              v-for="item in departmentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button type="success" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="log-wrap">
        <LogItem />
        <LogItem />
        <LogItem />
      </div>
    </el-dialog>

    <DialogWithTable v-model="emotionDialogVisible" :total="emotionList.length" title="情绪识别指数"
      :pageChange="emotionPageChange" :isLoading="false" v-if="emotionDialogVisible">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.nameOrPhone" placeholder="员工姓名/手机号" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.department" placeholder="员工部门" style="width: 10.625rem;">
              <el-option
                v-for="item in departmentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.isSpy" placeholder="是否特殊工种" style="width: 13rem;">
              <el-option
                v-for="item in isSpyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.sexy" placeholder="性别" style="width: 10.625rem;">
              <el-option
                v-for="item in sexyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="emotionData" style="width: 100%" size="mini" border max-height="450">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="department" label="职工部门"></el-table-column>
        <el-table-column prop="position" label="职工职位"></el-table-column>
        <el-table-column prop="capture" label="情绪捕捉">
          <template slot-scope="scope">
            <img :src="scope.row.capture" class="capture-img">
          </template>
        </el-table-column>
        <el-table-column prop="result" label="情绪识别结果"></el-table-column>
        <el-table-column prop="recognitionDate" label="识别日期"></el-table-column>
      </el-table>
    </DialogWithTable>

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
import arrowIcon from '@/assets/images/下 拉_1@2x.png'
import DialogWithTable from '@/components/dialogWithTable/index'
import LogItem from './logItem'
import * as service from '../apis'
import { departmentMap, getEmotionList } from '../user'

const totalUsers = getEmotionList()
const totalEmotionList = getEmotionList()

export default {
  components: {
    ReportItem,
    CenterContent,
    RightContent,
    DialogWithTable,
    LogItem,
  },
  data() {
    return {
      pickerOption: {
        disabledDate: (date) => {
          return date.getTime() > Date.now()
        }
      },
      reportItems: [
        { id: 1, count: 10392, title: '企业总人数', colorType: 'bule' },
        { id: 2, count: 2873, title: '历史情绪识别', colorType: 'green' },
        { id: 3, count: 17215, title: '预警人次', colorType: 'yellow' },
      ],
      emotionBg,
      titleBg,
      moreIcon,
      select1: 1,
      select2: 1,
      historyBg,
      historyTitleBg,
      arrowIcon,
      selsctYear: new Date(),
      dialogVisible: false,
      logDialogVisible: false,
      departmentOptions: [
        { value: '0', label: '技术部' },
        { value: '1', label: '工程部' },
        { value: '2', label: '财务部' },
      ],
      isSpyOptions: [
        { value: '是', label: '是' },
        { value: '否', label: '否' },
      ],
      sexyOptions: [
        { value: '男', label: '男' },
        { value: '女', label: '女' },
      ],
      formInline: {
        nameOrPhone: '',
        department: '',
        isSpy: '',
        sexy: '',
      },
      users: totalUsers,
      tableData: [],
      emotionDialogVisible: false,
      emotionList: totalEmotionList,
      emotionData: [],
    }
  },
  async mounted() {
    this.myChart = echarts.init(this.$refs.container1)
    this.initRadarChart()
    
    this.hsitoryChart = echarts.init(this.$refs.container2)
    this.initHistoryChart()
  },
  methods: {
    initRadarChart() {
      this.myChart.setOption(option)
      const that = this
      this.myChart.on('click', function(params) {
        that.emotionDialogVisible = true
        const resultName = params.name.slice(0, 2)
        that.emotionList = totalEmotionList.filter(x => x.result == resultName)
        that.emotionData = that.emotionList.slice(0, 10)
      })
    },
    async initHistoryChart() {
      const month = new Date().getMonth()
      let newOption = JSON.parse(JSON.stringify(historyOption))
      const len = month + 1
      newOption.xAxis.data = newOption.xAxis.data.slice(0, len)
      const rawData = await service.getHistoryAnalysis(new Date().getFullYear())
      newOption.series[0].data = rawData.data.map(x => x.avg)
      this.hsitoryChart.setOption(newOption)
    },
    handleClick(item) {
      if (item.id == 1) {
        this.dialogVisible = true
        this.tableData = this.users.slice(0, 10)
      }
      if (item.id == 2) {
        this.logDialogVisible = true
      }
      if (item.id == 3) {
        this.logDialogVisible = true
      }
    },
    handleEmotionMore() {
      this.emotionDialogVisible = true
      this.emotionList = totalEmotionList
      this.emotionData = this.emotionList.slice(0, 10)
    },
    async onChange(v) {
      if (v.getFullYear() < new Date().getFullYear()) {
        let newOption = JSON.parse(JSON.stringify(historyOption))
        const rawData = await service.getHistoryAnalysis(v.getFullYear())
        newOption.series[0].data = rawData.data.map(x => x.avg)
        this.hsitoryChart.setOption(historyOption)
      } else {
        this.initHistoryChart()
      }
    },
    pageChange(v) {
      const start = (v - 1)*10
      const end = start + 10
      this.tableData = this.users.slice(start, end)
    },
    handleSearch() {
      let result
      const { nameOrPhone, department, isSpy, sexy } = this.formInline
      if (/^\d$/.test(nameOrPhone)) {
        result = totalUsers.filter(x => x.phone.includes(nameOrPhone))
      } else {
        result = totalUsers.filter(x => x.name.includes(nameOrPhone))
      }
      if (department) {
        const departmentName = departmentMap[department]
        result = (result || totalUsers).filter(x => x.department.includes(departmentName))
      }
      if (isSpy) {
        result = (result || totalUsers).filter(x => x.isSpy.includes(isSpy))
      }
      if (sexy) {
        result = (result || totalUsers).filter(x => x.sexy.includes(sexy))
      }
      this.users = result
      this.tableData = this.users.slice(0, 10)
      this.emotionList = result
      this.emotionData = this.emotionList.slice(0, 10)
    },
    handleReset() {
      Object.keys(this.formInline).forEach(x => {
        this.formInline[x] = ''
      })
      this.users = totalUsers
      this.tableData = this.users.slice(0, 10)
    },
    emotionPageChange(v) {
      const start = (v - 1)*10
      const end = start + 10
      this.emotionData = this.emotionList.slice(start, end)
    }
  },
  computed: {

  },
}
</script>

<style lang="less" scoped>
.pages-display-emotion{
  width: 100%;
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  justify-content: space-around;
  .radio-wrap{
    width: 100%;
    margin-top: 3.125rem;
    padding: 0 1.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .date-picker-wrap{
      position: relative;
      .arrow{
        width: 0.375rem;
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
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
  .log-wrap{
    display: flex;
  }
  .capture-img{
    width: 3.125rem;
    height: 3.375rem;
  }
}
</style>