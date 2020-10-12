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
          <el-radio-group v-model="select1" @change="onEmotionChange">
            <el-radio :label="1">本日</el-radio>
            <el-radio :label="2">本月</el-radio>
            <el-radio :label="3">本年</el-radio>
          </el-radio-group>
        </div>
        <div class="container" ref="container1"></div>
      </div>

      <div class="employee-history clear-mgn" :style="{backgroundImage: `url(${historyBg})`}">
        <div class="history-title-wrap" :style="{backgroundImage: `url(${historyTitleBg})`}">
          职工历史心理报告分析
        </div>
        <div class="radio-wrap">
          <div></div>
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
            <el-input v-model="formInline.nameOrPhone" placeholder="职工姓名/手机号" style="width: 150px"></el-input>
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
            <el-select v-model="formInline.isSpy" placeholder="特殊工种" style="width: 13rem;">
              <el-option
                v-for="item in spyOptions"
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
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="sexy" label="性别"></el-table-column>
        <el-table-column prop="department" label="职工部门"></el-table-column>
        <el-table-column prop="position" label="职工职位"></el-table-column>
        <el-table-column prop="spy" label="特殊工种"></el-table-column>
        <el-table-column prop="phone" label="职工手机号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="viewDetails(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>

    <el-dialog title="职工信息详情" :visible.sync="showEmpDetail" width="37.5rem">
      <div class="emp-detail-wrap">
        <div class="emp-details">
          <div class="label item">职工姓名：</div>
          <div class="value item">{{curShowDetailsEmp.name}}</div>
          <div class="label item">职工性别：</div>
          <div class="value item">{{curShowDetailsEmp.sexy}}</div>
          <div class="label item">职工民族：</div>
          <div class="value item">{{curShowDetailsEmp.nation}}</div>
          <div class="label item">职工籍贯：</div>
          <div class="value item">{{curShowDetailsEmp.jiguan}}</div>
          <div class="label item">职工部门：</div>
          <div class="value item">{{curShowDetailsEmp.department}}</div>
          <div class="label item">职工职位：</div>
          <div class="value item">{{curShowDetailsEmp.position}}</div>
          <div class="label item">职工工种：</div>
          <div class="value item">{{curShowDetailsEmp.position}}</div>
          <div class="label item no-btm-b">职工手机：</div>
          <div class="value item no-btm-b">{{curShowDetailsEmp.phone}}</div>
        </div>
        <div class="emp-img">
          <img :src="userImg">
        </div>
      </div>
    </el-dialog>

    <el-dialog title="情绪识别记录列表" width="79.875rem"
      :visible.sync="logDialogVisible">
      <el-form :inline="true" :model="logSearch" size="mini">
        <el-form-item >
          <el-input v-model="logSearch.name" placeholder="职工姓名" style="width: 9.375rem"></el-input>
        </el-form-item>
        <el-form-item >
          <el-select v-model="logSearch.department" placeholder="职工部门" style="width: 9.375rem">
            <el-option
              v-for="item in departmentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item >
          <el-select v-model="logSearch.spy" placeholder="特殊工种" style="width: 9.375rem">
            <el-option
              v-for="item in spyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            style="width: 9.375rem"
            size="mini"
            value-format="yyyy-MM-dd"
            v-model="logSearch.date"
            type="date"
            placeholder="识别日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-select v-model="logSearch.resultV" placeholder="情绪识别结果" style="width: 9.375rem">
            <el-option
              v-for="item in resultOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogSearch">搜索</el-button>
          <el-button type="success" @click="handleLogReset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="log-wrap">
        <LogItem v-for="it in logItemList" :key="it.name" v-bind="it" />
      </div>
    </el-dialog>

    <DialogWithTable v-model="emotionDialogVisible" :total="emotionList.length" title="情绪指数识别分析列表"
      :pageChange="emotionPageChange" :isLoading="false" v-if="emotionDialogVisible">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.nameOrPhone" placeholder="职工姓名" style="width: 150px"></el-input>
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
            <el-select v-model="formInline.spy" placeholder="特殊工种" style="width: 8rem;">
              <el-option
                v-for="item in spyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              style="width: 18rem;"
              size="mini"
              value-format="yyyy-MM-dd"
              v-model="formInline.dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.resultV" placeholder="情绪识别结果" style="width: 10.625rem;">
              <el-option
                v-for="item in resultOptions"
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
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column prop="name" label="职工姓名"></el-table-column>
        <el-table-column prop="department" label="职工部门"></el-table-column>
        <el-table-column prop="position" label="职工职位"></el-table-column>
        <el-table-column prop="spy" label="特殊工种"></el-table-column>
        <el-table-column prop="capture" label="情绪捕捉">
          <template slot-scope="scope">
            <img :src="scope.row.capture" class="capture-img" @click="viewImg(scope.row)">
          </template>
        </el-table-column>
        <el-table-column prop="result" label="情绪识别结果"></el-table-column>
        <el-table-column prop="recognitionDate" label="识别日期"></el-table-column>
      </el-table>
    </DialogWithTable>

    <el-dialog title="情绪捕捉" :visible.sync="imgDialogVisible" width="31.25rem">
      <div style="text-align:center">
        <img :src="avatarImg" style="width: 25rem" />
      </div>
    </el-dialog>

    <center-content ref="centerContent" @showLogs="logDialogVisible = true"></center-content>
    <right-content ref="rightContent" @showLogTable="showLogTable" @showCePing="showCePing"></right-content>
  </div>
</template>

<script>
import ReportItem from './reportItem'
import emotionBg from '@/assets/images/BG _4@2x.png'
import titleBg from '@/assets/images/dbx3.png'
import moreIcon from '@/assets/images/gend.png'
import echarts from 'echarts'
import option from './emotion'
import historyBg from '@/assets/images/BG@2x.png'
import historyTitleBg from '@/assets/images/dbx4.png'
import CenterContent from './centerContent'
import historyOption from './employeeHsitory'
import RightContent from './rightContent'
import arrowIcon from '@/assets/images/xl22.png'
import avatarImg from '@/assets/images/avatar.jpg'
import userImg from '@/assets/images/user.png'
import DialogWithTable from '@/components/dialogWithTable/index'
import LogItem from './logItem'
import * as service from '../apis'
import { getEmotionList } from '../user'
import Util from '@/common/utils'
import totalUsers, { departmentList, spyList } from './emp'

const totalEmotionList = getEmotionList()
const logItems = [
  { name: '孟祥飞', department: '技术部', position: '检修工', result: '平静', time: '2020-09-15 08:24:15' },
  { name: '刘学艳', department: '工程部', position: '检修工', result: '开心', time: '2020-09-15 08:24:15' },
  { name: '张欣丽', department: '技术部', position: '切割工', result: '困惑', time: '2020-09-15 08:24:15' },
]

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
        { id: 1, count: totalUsers.length, title: '企业总人数', colorType: 'bule' },
        { id: 2, count: 3, title: '历史情绪识别', colorType: 'green' },
        { id: 3, count: 3, title: '预警人次', colorType: 'yellow' },
      ],
      emotionBg,
      titleBg,
      moreIcon,
      select1: 2,
      select2: 1,
      historyBg,
      historyTitleBg,
      arrowIcon,
      userImg,
      selsctYear: new Date(),
      dialogVisible: false,
      showEmpDetail: false,
      logDialogVisible: false,
      departmentOptions: departmentList,
      spyOptions: spyList,
      sexyOptions: [
        { value: '男', label: '男' },
        { value: '女', label: '女' },
      ],
      resultOptions: [
        { value: '开心', label: '开心' },
        { value: '厌恶', label: '厌恶' },
        { value: '惊讶', label: '惊讶' },
        { value: '困惑', label: '困惑' },
        { value: '平静', label: '平静' },
      ],
      formInline: {
        nameOrPhone: '',
        department: '',
        spy: '',
        sexy: '',
        dateRange: '',
        resultV: '',
      },
      logSearch: {
        name: '',
        department: '',
        spy: '',
        resultV: '',
        date: '',
      },
      users: totalUsers,
      tableData: [],
      emotionDialogVisible: false,
      emotionList: totalEmotionList,
      emotionData: [],
      imgDialogVisible: false,
      avatarImg,
      logItemList: logItems,
      curShowDetailsEmp: {},
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
      let newOption = Util.clone(historyOption)
      const len = month + 1
      newOption.xAxis.data = newOption.xAxis.data.slice(0, len)
      const rawData = await service.getHistoryAnalysis(new Date().getFullYear())
      newOption.series[0].data = rawData.data.map(x => x.avg)
      newOption.series[1].data = rawData.data.map(x => x.avg)
      this.hsitoryChart.setOption(newOption)
      const that = this
      this.hsitoryChart.on('click', 'series.bar', function(x) {
        console.log(x)
        that.$refs.rightContent.handleGradeMore({
          dialogTitle:'职工历史心理报告列表',
          month:`2020-0${(x.dataIndex+1)}`
        })
      })
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
        let newOption = Util.clone(historyOption)
        const rawData = await service.getHistoryAnalysis(v.getFullYear())
        newOption.series[0].data = rawData.data.map(x => x.avg)
        newOption.series[1].data = rawData.data.map(x => x.avg)
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
      const { nameOrPhone, department, spy, sexy, resultV, dateRange } = this.formInline
      const totalUsers = totalEmotionList
      if (/^\d$/.test(nameOrPhone)) {
        result = totalUsers.filter(x => x.phone.includes(nameOrPhone))
      } else {
        result = totalUsers.filter(x => x.name.includes(nameOrPhone))
      }
      if (department) {
        result = (result || totalUsers).filter(x => x.department.includes(department))
      }
      if (spy) {
        result = (result || totalUsers).filter(x => x.spy.includes(spy))
      }
      if (sexy) {
        result = (result || totalUsers).filter(x => x.sexy.includes(sexy))
      }
      
      if (resultV) {
        result = (result || totalUsers).filter(x => x.result.includes(resultV))
      }
      if (dateRange) {
        result = (result || totalUsers).filter(x => x.statisticsMonth > dateRange[0] && x.statisticsMonth <= dateRange[1])
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
    },
    onEmotionChange(v) {
      const newOption = Util.clone(option)
      if (v == 1) {
        newOption.series.data[0].value = newOption.series.data[0].value.map(x => x/2)
        this.myChart.setOption(newOption)
      }
      if (v == 2) {
        this.myChart.setOption(newOption)
      }
      if (v == 3) {
        newOption.series.data[0].value = newOption.series.data[0].value.map(x => x*1.2)
        this.myChart.setOption(newOption)
      }
    },
    viewImg(row) {
      this.imgDialogVisible = true
      console.log(row)
    },
    showLogTable(name,value) {
      this.emotionDialogVisible = true
      const arr = ['开心', '平静']
      if (name == '情绪良好'){
        this.emotionList = totalEmotionList.filter(x => arr.includes(x.result))
      } else {
        this.emotionList = totalEmotionList.filter(x => !arr.includes(x.result))
      }
      if(value) this.emotionList = this.emotionList.splice(0,value)
      this.emotionData = this.emotionList.slice(0, 10)
    },
    showCePing() {
      this.$refs.centerContent.handleDetail()
    },
    handleLogSearch() {
      const { name, spy, department, date, resultV } = this.logSearch
      if (name) {
        this.logItemList = logItems.filter(x => x.name.includes(name))
      }
      if (spy) {
        this.logItemList = logItems.filter(x => x.position.includes(spy))
      }
      if (department) {
        this.logItemList = logItems.filter(x => x.department.includes(department))
      }
      if (date) {
        this.logItemList = logItems.filter(x => x.time.includes(date))
      }
      if (resultV) {
        this.logItemList = logItems.filter(x => x.result.includes(resultV))
      }
    },
    handleLogReset() {
      Object.keys(this.logSearch).forEach(k => {
        this.logSearch[k] = ''
      })
      this.logItemList = logItems
    },
    viewDetails(row) {
      this.curShowDetailsEmp = row
      this.showEmpDetail = true
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
      width: 36.25rem;
      height: 21.25rem;
      margin-top: 0.625rem;
    }
  }
  .log-wrap{
    display: flex;
  }
  .capture-img{
    width: 3.125rem;
    height: 3.375rem;
  }
  .emp-detail-wrap{
    color: #fff;
    font-size: 0.875rem;
    display: flex;
    border: 1px solid #ccc;
    text-align: center;
    .emp-details{
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      .label{
        width: 33.3%
      }
      .value{
        width: 66.6%
      }
      .item{
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 0.625rem;
      }
      .no-btm-b{
        border-bottom: 0;
      }
    }
    .emp-img{
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 90%;
      }
    }
  }
}
</style>

<style lang="less">
.capture-img{
  width: 3.125rem;
  height: 3.375rem;
}
</style>
