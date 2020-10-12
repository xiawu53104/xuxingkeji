<template>
  <div class="pages-display-equities">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems" v-bind="item" @click="handleClick(item)" :key="i"></report-item>
      </div>
      <div class="left-top" :style="{backgroundImage: `url(${alarmBG})`}">
        <div class="left-top-title" :style="{backgroundImage: `url(${alarmTitle})`}">
          <div class="title">今日异常提醒</div>
        </div>
        <img class="botton" :src="moreIcon" alt="" @click="showAlarmList">
        <div class="left-top-content">
            <scroll-list :data="alarmlist" @listItemClick="listItemClick">
              <template v-slot:default="{data: {item}}">
                <!-- <span class="list-item">{{`TOP${i + 1}`}}</span> -->
                <span class="list-item list-item-lf">
                  <img :src="alarmImg" alt="" class="list-item-img">
                  {{item.tooltipType}}
                </span>
                <span class="list-item list-item-rf">{{item.alarmTime}}</span>
              </template>
            </scroll-list>
        </div>
      </div>
      <div class="left-bottom" :style="{backgroundImage: `url(${safeBG})`}">
        <div class="left-bottom-title" :style="{backgroundImage: `url(${safeTitle})`}">
          <div class="title">安全隐患分析</div>
        </div>
        <div class="radio-wrap">
          <el-radio-group v-model="select">
            <el-radio :label="1">日度</el-radio>
            <el-radio :label="3">年度</el-radio>
          </el-radio-group>
        </div>
        <div class="container" ref="container"></div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-top" id="container" :style="{backgroundImage: `url(${bg})`}">
        <!-- <baidu-map :style="{width:map.width,height:map.height}" class="map" ak="bGARqyOB3gc3Uw0dNVh4rYhaKS1w3BKA" :zoom="map.zoom" :center="{lng: map.center.lng, lat: map.center.lat}"
          @ready="handler" :scroll-wheel-zoom="true"></baidu-map> -->
          <div id="cesiumContainer"></div>
      </div>
      <div class="middle-bottom" :style="{backgroundImage: `url(${eventBG})`}">
        <div class="middle-bottom-title" :style="{backgroundImage: `url(${eventTitle})`}">
          <div class="title">事件上报趋势图</div>
        </div>
        <div class="date-picker-wrap">  
          <el-date-picker
          v-model="selectMonth"
          :picker-options="pickerOption"
          style="width: 3.85rem;"
          size="mini"
          align="right"
          :editable="false"
          @change="onChange"
          format="M月"
          :clearable="false"
          type="month"
          placeholder="选择月">
          </el-date-picker>
          <img :src="arrowIcon" class="arrow">
        </div>
        <img class="botton" :src="moreIcon" alt="" @click="showEReportList">
        <div class="event-container" ref="eventChart"></div>
      </div>
    </div>
    <div class="right">
      <div class="right-top" :style="{backgroundImage: `url(${hardWareBG})`}">
        <div class="right-top-title" :style="{backgroundImage: `url(${hardWareTitle})`}">
          <div class="title">硬件状态</div>
        </div>
        <!-- <img class="botton" :src="moreIcon" alt=""> -->
        <div class="right-top-lf" :style="{backgroundImage: `url(${rightTopLf})`}">
          <div class="right-top-lf-title">
            监控摄像总数：75
          </div>
          <div class="monitorVideoChart" ref="monitorVideoChart"></div>
        </div>
        <div class="right-top-lf rf" :style="{backgroundImage: `url(${rightTopLf})`}">
          <div class="right-top-lf-title">
            智能硬件总数：75
          </div>
          <div class="hardwareChart" ref="hardwareChart"></div>
        </div>
      </div>
      <div class="right-bottom" :style="{backgroundImage: `url(${studyBG})`}">
        <div class="right-bottom-title" :style="{backgroundImage: `url(${studyTitle})`}">
          <div class="title">职工安全学习分析</div>
        </div>
        <div class="studyChart" ref="studyChart"></div>
      </div>
    </div>
    <DialogWithTable v-model="isAlarmListShow" :total="alarmlist.length"
      title="今日异常提醒列表" :isError="false"
      :pageChange="emotionPageChange" :isLoading="false" v-if="isAlarmListShow">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.deviceName" placeholder="设备名称..." style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.deviceType" placeholder="设备类型" style="width: 10.625rem;" clearable @change="handleSearch" >
              <el-option
                v-for="item in deviceTypeOptions"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="报警时间">
            <el-date-picker
              v-model="formInline.alarmTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="handleSearch"
              >
            </el-date-picker>
            <!-- <el-select v-model="formInline.alarmTime" placeholder="报警时间" style="width: 13rem;">
              <el-option
                v-for="item in alarmTimeList"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select> -->
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="alarmData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="tooltipType" label="提醒类型"></el-table-column>
        <el-table-column prop="alarmTime" label="报警时间"></el-table-column>
        <el-table-column prop="deviceName" label="设备名称"></el-table-column>
        <el-table-column prop="deviceType" label="设备类型"></el-table-column>
        <el-table-column prop="manager" label="安全负责人"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showAlarmListDetails(scope)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
    <DialogWithTable v-model="isEReportShow" :total="ereportList.length" title="上报记录"
      :pageChange="ereportChange" :isLoading="false" v-if="isEReportShow">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-select v-model="formInline.reportType" placeholder="" style="width: 10.625rem;">
              <el-option
                v-for="item in reportTypeOptions"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期筛选">
            <el-date-picker
              v-model="formInline.alarmTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="ereportData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="reportType" label="上报类型"></el-table-column>
        <el-table-column prop="reportNum" label="上报事件数"></el-table-column>
        <el-table-column prop="reportTime" label="日期"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showEventReportDetails(scope)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
    <DialogWithTable v-model="isSelfReport" :total="selfReportList.length" title="自查上报列表"
      :pageChange="selfReportChange" :isLoading="false" v-if="isSelfReport">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.reportUser" placeholder="上报人..." style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item v-if="isEvent">
            <el-select v-model="formInline.isQualified" placeholder="是否合格" style="width: 10.625rem;">
              <el-option
                v-for="item in isQualifiedOptions"
                :key="item.label"
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
      <el-table :data="selfReportData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="reportTitle" label="上报标题"></el-table-column>
        <el-table-column prop="reportUser" label="上报人"></el-table-column>
        <el-table-column prop="isQualified" v-if="isEvent" label="是否合格"></el-table-column>
        <el-table-column prop="reportTime" label="上报时间"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showAlarmListDetails(scope)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
    <DialogWithTable v-model="isPeriodReport" :total="periodReportList.length" title="周期巡查上报列表"
      :pageChange="periodReportChange" :isLoading="false" v-if="isPeriodReport">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.periodReportUser" placeholder="上报人..." style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.isQualified" placeholder="是否合格" style="width: 10.625rem;">
              <el-option
                v-for="item in isQualifiedOptions"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上报时间">
            <el-date-picker
              v-model="formInline.alarmTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="periodReportData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="reportTitle" label="上报标题"></el-table-column>
        <el-table-column prop="reportUser" label="上报人"></el-table-column>
        <el-table-column prop="isQualified" label="是否合格"></el-table-column>
        <el-table-column prop="reportTime" label="上报时间"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showAlarmListDetails(scope)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
    <DialogWithTable v-model="isPieListShow" :total="periodReportData.length" title="危险源上报统计"
      :pageChange="periodReportChange" :isLoading="false" v-if="isPieListShow">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.periodReportUser" placeholder="上报人..." style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="formInline.alarmTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="periodReportData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="reportTitle" label="上报标题"></el-table-column>
        <el-table-column prop="reportUser" label="上报人"></el-table-column>
        <el-table-column prop="isQualified" label="是否合格"></el-table-column>
        <el-table-column prop="reportTime" label="上报时间"></el-table-column>
        <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="showAlarmListDetails(scope)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
    <DialogWithTable v-model="isStudyListShow" :total="completedData.length" title="职工完成情况列表"
      :pageChange="periodReportChange" :isLoading="false" v-if="isStudyListShow">
      <template v-slot:search>
        <el-form :inline="true" :model="formInline" size="mini">
          <el-form-item >
            <el-input v-model="formInline.userName" placeholder="职工姓名..." style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.isQualified" placeholder="部门" style="width: 6.625rem;">
              <el-option
                v-for="item in classList"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item >
            <el-select v-model="formInline.isQualified" placeholder="特殊工种" style="width: 7.625rem;">
              <el-option
                v-for="item in specialList"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item >
            <el-select v-model="formInline.isQualified" placeholder="完成状态" style="width: 8.625rem;">
              <el-option
                v-for="item in completionState"
                :key="item.label"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="完成日期">
            <el-date-picker
              style="width: 18rem"
              v-model="formInline.alarmTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button type="success" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <el-table :data="studyData" style="width: 100%" size="mini" border>
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="userName" label="姓名"></el-table-column>
        <el-table-column prop="class" label="部门"></el-table-column>
        <el-table-column prop="post" label="职位"></el-table-column>
        <el-table-column prop="special" label="特殊工种"></el-table-column>
        <el-table-column prop="process" label="完成进度"></el-table-column>
        <el-table-column v-if="study == '已完成'" label="完成日期">
          <template slot-scope="scope">
            <div>{{scope.row.completionDate}}</div>
          </template>
        </el-table-column>
      </el-table>
    </DialogWithTable>
  </div>
</template>

<script>
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
// import BmScale from 'vue-baidu-map/components/controls/Scale'
// import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
// import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
// import BmMarker from 'vue-baidu-map/components/overlays/Marker'
// import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'

import ReportItem from '../emotion/reportItem'
import ScrollList from '@/components/scrollList/index'
import moreIcon from '@/assets/images/botton.png'
import alarmBG from '@/assets/images/left_top.png'
import alarmTitle from '@/assets/images/left_top_title.png'
import safeBG from '@/assets/images/left-bottom.png'
import safeTitle from '@/assets/images/left_bottom_title.png'
import echarts from 'echarts'
import option from './equities'
import eventBG from '@/assets/images/middle_bottom.png'
import eventTitle from '@/assets/images/middle_bottom_title.png'
import hardWareBG from '@/assets/images/right_top.png'
import hardWareTitle from '@/assets/images/right_top_title.png'
import studyBG from '@/assets/images/right_bottom.png'
import studyTitle from '@/assets/images/right_bottom_title.png'
import eventOption from './event_report'
import rightTopLf from '@/assets/images/right_top_lf.png'
import monitorVideoOption from './monitor_video'
import hardwareOption from './hardware'
import studyOption from './study'
import bg from '@/assets/images/quxi1.png'
import arrowIcon from '@/assets/images/xl22.png'
import alarmImg from '@/assets/images/alarm.jpg'
import DialogWithTable from '@/components/dialogWithTable/index'

let viewer;
let handler;
let tileset;

export default {
  components: {
    ReportItem,
    ScrollList,
    DialogWithTable,
    // BaiduMap,
    // BmScale,
    // BmNavigation,
    // BmMarkerClusterer,
    // BmMarker,
    // BmInfoWindow
  },
  data() {
    return {
      pickerOption: {
        disabledDate: (date) => {
          return date.getTime() > Date.now()
        }
      },
      reportItems: [
        { id: 1, count: 10, title: '历史自查上报事件', colorType: 'bule' },
        { id: 2, count: 10, title: '历史巡查上报事件', colorType: 'green' },
        { id: 3, count: 5, title: '历史智能预警', colorType: 'yellow' },
      ],
      alarmlist: [
        { id: 1, tooltipType: '氮气罐泄漏', alarmTime: '2020-10-02 10:04:45', deviceName: '设备1', deviceType: '安消智能摄像机', manager: '张三', pos: {x: 118.3027036899936, y: 34.92011694233448 } },
        { id: 2, tooltipType: '油漆泄漏', alarmTime: '2020-10-03 10:04:45', deviceName: '设备1', deviceType: '智慧用水采集终端', manager: '张三', pos: {x: 118.5027036899936, y: 34.12011694233448 }  },
        { id: 3, tooltipType: '氮气罐周围烟头', alarmTime: '2020-10-04 10:04:45', deviceName: '设备1', deviceType: '安消智能摄像机', manager: '张三', pos: {x: 118.1027036899936, y: 34.02011694233448 }  },
        { id: 4, tooltipType: '弱酸洗池围栏松动', alarmTime: '2020-10-05 10:04:45', deviceName: '设备1', deviceType: '智慧用水采集终端', manager: '张三', pos: {x: 118.2027036899936, y: 34.42011694233448 }  },
        { id: 5, tooltipType: '安全通道杂物堆放', alarmTime: '2020-10-06 10:04:45', deviceName: '设备1', deviceType: '安消智能摄像机', manager: '张三', pos: {x: 118.9027036899936, y: 34.82011694233448 }  }
      ],
      isQualifiedOptions: [
        {label: '是', value: 0},
        {label: '否', value: 1}
      ],
      formInline: {
        deviceName: '',
        deviceType: '',
        alarmTime: '',
        reportType: 0,
        reportTime: '',
        reportUser: '',
        periodReportUser: '',
        isQualified: '',
        userName: ''
      },
      deviceTypeOptions: [
        {label: '安消智能摄像机' , value: 1},
        {label: '智慧用水采集终端', value: 2}
      ],
      reportTypeOptions: [
        {label: '自查上报', value: 0},
        {label: '周期巡查', value: 1}
      ],
      reportTimeList: [],
      alarmTimeList: [],
      moreIcon,
      alarmBG,
      alarmTitle,
      safeBG,
      safeTitle,
      eventBG,
      eventTitle,
      hardWareBG,
      hardWareTitle,
      studyBG,
      studyTitle,
      rightTopLf,
      arrowIcon,
      alarmImg,
      bg,
      select: 1,
      isAlarmListShow: false,
      alarmData: [],
      isEReportShow: false,
      ereportList: [
        { id: 1, reportType: '自查上报', reportTime: '2020-10-01', reportNum: 15 },
        { id: 2, reportType: '自查上报', reportTime: '2020-10-02', reportNum: 25 },
        { id: 3, reportType: '自查上报', reportTime: '2020-10-03', reportNum: 10 },
        { id: 4, reportType: '自查上报', reportTime: '2020-10-04', reportNum: 30 },
        { id: 5, reportType: '自查上报', reportTime: '2020-10-05', reportNum: 40 },
        { id: 6, reportType: '自查上报', reportTime: '2020-10-06', reportNum: 5 },
        { id: 7, reportType: '自查上报', reportTime: '2020-10-07', reportNum: 15 },
        { id: 8, reportType: '自查上报', reportTime: '2020-10-08', reportNum: 19 },
        { id: 9, reportType: '自查上报', reportTime: '2020-10-09', reportNum: 24 },
        { id: 10, reportType: '自查上报', reportTime: '2020-10-10', reportNum: 16 },
        { id: 11, reportType: '周期巡查', reportTime: '2020-10-01', reportNum: 34 },
        { id: 12, reportType: '周期巡查', reportTime: '2020-10-02', reportNum: 14 },
        { id: 13, reportType: '周期巡查', reportTime: '2020-10-03', reportNum: 34 },
        { id: 14, reportType: '周期巡查', reportTime: '2020-10-04', reportNum: 25 },
        { id: 15, reportType: '周期巡查', reportTime: '2020-10-05', reportNum: 40 },
        { id: 16, reportType: '周期巡查', reportTime: '2020-10-06', reportNum: 26 },
        { id: 17, reportType: '周期巡查', reportTime: '2020-10-07', reportNum: 32 },
        { id: 18, reportType: '周期巡查', reportTime: '2020-10-08', reportNum: 18 },
        { id: 19, reportType: '周期巡查', reportTime: '2020-10-09', reportNum: 5 },
        { id: 20, reportType: '周期巡查', reportTime: '2020-10-10', reportNum: 56 },
      ],
      ereportData: [],
      selectMonth: new Date(),
      isSelfReport: false,
      selfReportList: [
        {id: 1, reportTitle: '氮气罐泄漏', reportUser: '周洋',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 2, reportTitle: '油漆泄漏', reportUser: '王炬凯',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 3, reportTitle: '氮气罐周围烟头', reportUser: '武新钊',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 4, reportTitle: '弱酸洗池围栏松动', reportUser: '武新钊',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 5, reportTitle: '安全通道杂物堆放', reportUser: '武新钊',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 6, reportTitle: '氮气罐泄漏', reportUser: '周洋',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 7, reportTitle: '油漆泄漏', reportUser: '王炬凯',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 8, reportTitle: '氮气罐周围烟头', reportUser: '武新钊',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 9, reportTitle: '弱酸洗池围栏松动', reportUser: '李昭斌',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
        {id: 10, reportTitle: '安全通道杂物堆放', reportUser: '李纪超',isQualified: '是', reportTime: '2020-10-05 12:00:00'},
      ],
      selfReportData: [],
      isPeriodReport: false,
      periodReportList: [
        {id: 1, reportTitle: '液压油', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 2, reportTitle: '氮气罐', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 3, reportTitle: '弱酸洗池', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 4, reportTitle: '油漆', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 5, reportTitle: '液压油', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 6, reportTitle: '氮气罐', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 7, reportTitle: '弱酸洗池', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 8, reportTitle: '油漆', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 9, reportTitle: '液压油', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
        {id: 10, reportTitle: '氮气罐', reportUser: '周洋', isQualified: '是', reportTime: '2020-10-2 10:04:45'},
      ],
      periodReportData: [],
      isPieListShow: false,
      studyList: [
        {id: 1, userName: '周洋', class: '技术部', post: '部门经理', special: '切割工', process: '100%', completionDate: '2020-10-09'},
        {id: 2, userName: '王炬凯', class: '技术部', post: '部门经理', special: '切割工', process: '10%', completionDate: '2020-10-09'},
        {id: 3, userName: '武新钊', class: '技术部', post: '部门经理', special: '切割工', process: '80%', completionDate: '2020-10-09'},
        {id: 4, userName: '李昭斌', class: '技术部', post: '部门经理', special: '切割工', process: '100%', completionDate: '2020-10-09'},
        {id: 5, userName: '李纪超', class: '技术部', post: '部门经理', special: '切割工', process: '70%', completionDate: '2020-10-09'},
        {id: 6, userName: '郭俊', class: '技术部', post: '部门经理', special: '切割工', process: '50%', completionDate: '2020-10-09'},
        {id: 7, userName: '张东亮', class: '技术部', post: '部门经理', special: '切割工', process: '40%', completionDate: '2020-10-09'},
        {id: 8, userName: '刘太发', class: '技术部', post: '部门经理', special: '切割工', process: '100%', completionDate: '2020-10-09'},
        {id: 9, userName: '孟祥飞', class: '后勤部', post: '销售', special: '--', process: '2%', completionDate: '2020-10-09'},
        {id: 10, userName: '徐方栋', class: '工会部', post: '工会', special: '--', process: '19%', completionDate: '2020-10-09'},
      ],
      studyData: [],
      completedData: [],
      study: '',
      isStudyListShow: false,
      classList: [
        {label: '技术部', value: 0},
        {label: '财务部', value: 1}
      ],
      specialList: [
        {label: '无', value: 0},
        {label: '切割工', value: 1},
        {label: '电焊工', value: 2}
      ],
      completionState: [
        {label: '已完成', value: 0},
        {label: '未完成', value: 1}
      ],
      eventCharts: null,
      isEvent: false,
      morph: '3D',
      homeBusinessDropInfo: [],
      moveGeo: {
        lng: 118.3027036899936,
        lat: 34.92011694233448,
        alt: 500
      },
    }
  },
  watch: {
    selectMonth (val) {
      let data = [],len = 0
      if (val.getMonth()+1 < new Date().getMonth()+1) {
        if (val.getMonth()+1 === 1 || val.getMonth()+1 === 3 ||val.getMonth()+1 === 5 ||val.getMonth()+1 === 7||val.getMonth()+1 === 8) {
          len = 32
        } else {
          len = 31
        }
        for (let i=1; i<len; i++) {
          data.push({
            id: i, 
            reportType: '自查上报', 
            reportTime: '2020-'+(val.getMonth()+1)+'-'+ i, 
            reportNum: Math.ceil(50*Math.random())
          })
          data.push({
            id: i, 
            reportType: '周期巡查', 
            reportTime: '2020-'+(val.getMonth()+1)+'-'+ i, 
            reportNum: Math.ceil(50*Math.random())
          })
        }
      } else {
        data = [
          { id: 1, reportType: '自查上报', reportTime: '2020-10-01', reportNum: 15 },
          { id: 2, reportType: '自查上报', reportTime: '2020-10-02', reportNum: 25 },
          { id: 3, reportType: '自查上报', reportTime: '2020-10-03', reportNum: 10 },
          { id: 4, reportType: '自查上报', reportTime: '2020-10-04', reportNum: 30 },
          { id: 5, reportType: '自查上报', reportTime: '2020-10-05', reportNum: 40 },
          { id: 6, reportType: '自查上报', reportTime: '2020-10-06', reportNum: 5 },
          { id: 7, reportType: '自查上报', reportTime: '2020-10-07', reportNum: 15 },
          { id: 8, reportType: '自查上报', reportTime: '2020-10-08', reportNum: 19 },
          { id: 9, reportType: '自查上报', reportTime: '2020-10-09', reportNum: 24 },
          { id: 10, reportType: '自查上报', reportTime: '2020-10-10', reportNum: 16 },
          { id: 11, reportType: '周期巡查', reportTime: '2020-10-01', reportNum: 34 },
          { id: 12, reportType: '周期巡查', reportTime: '2020-10-02', reportNum: 14 },
          { id: 13, reportType: '周期巡查', reportTime: '2020-10-03', reportNum: 34 },
          { id: 14, reportType: '周期巡查', reportTime: '2020-10-04', reportNum: 25 },
          { id: 15, reportType: '周期巡查', reportTime: '2020-10-05', reportNum: 40 },
          { id: 16, reportType: '周期巡查', reportTime: '2020-10-06', reportNum: 26 },
          { id: 17, reportType: '周期巡查', reportTime: '2020-10-07', reportNum: 32 },
          { id: 18, reportType: '周期巡查', reportTime: '2020-10-08', reportNum: 18 },
          { id: 19, reportType: '周期巡查', reportTime: '2020-10-09', reportNum: 5 },
          { id: 20, reportType: '周期巡查', reportTime: '2020-10-10', reportNum: 56 },
        ]
      }
      this.ereportList = data
      let eventOptions = eventOption(this.ereportList)
      this.eventCharts = echarts.init(this.$refs.eventChart)
      this.eventCharts.setOption(eventOptions)
    }
  },
  mounted () {
    let options = option(true)
    let chart = echarts.init(this.$refs.container)
    chart.setOption(options)
    chart.on('click', (params) => {
      this.isPieListShow = true
      console.log(params.data.name)
      this.periodReportData = this.periodReportList.filter(v=>v.reportTitle===params.data.name).slice(0, 10)
    })
    chart.on('mouseover', () => {
      options = option(false)
      chart = echarts.init(this.$refs.container)
      chart.setOption(options)
    })
    chart.on('mouseout', () => {
      options = option(true)
      chart = echarts.init(this.$refs.container)
      chart.setOption(options)
    })
    let eventOptions = eventOption(this.ereportList)
    this.eventCharts = echarts.init(this.$refs.eventChart)
    this.eventCharts.setOption(eventOptions)
    this.eventCharts.on('click', params => {
      console.log(params)
      if (params.seriesName === '自查上报') {
        this.isSelfReport = true
        this.isEvent = true
        // let data = this.selfReportList.filter(item => item.reportTime.slice(0, 11) == params.data[0])
        this.selfReportData = this.selfReportList.slice(0, 10)
      } else {
        this.isPeriodReport = true
        // let data = this.periodReportList.filter(item => item.reportTime.slice(0, 11) == params.data[0])
        this.periodReportData = this.periodReportList.slice(0, 10)
      }
    })
    let monitorVideoChart = echarts.init(this.$refs.monitorVideoChart)
    monitorVideoChart.setOption(monitorVideoOption)
    let hardwareChart = echarts.init(this.$refs.hardwareChart)
    hardwareChart.setOption(hardwareOption)
    let studyChart = echarts.init(this.$refs.studyChart)
    studyChart.setOption(studyOption)
    studyChart.on('click', params => {
      console.log(params.data.name)
      if (params.data.name === '已完成') {
        this.study = params.data.name
        this.isStudyListShow = true
        this.completedData = this.studyList.filter(item => item.process === '100%')
        this.studyData = this.completedData.slice(0, 10)
      } else {
        this.study = params.data.name
        this.isStudyListShow = true
        this.completedData = this.studyList.filter(item => item.process !== '100%')
        this.studyData = this.completedData.slice(0, 10)
      }
    })

    this.mapInit()
  },
  methods: {
    // initMap () {
    //   let map = new BMapGL.Map("container")
    //   var point = new BMapGL.Point(116.404, 39.915);
    //   map.centerAndZoom(point, 15);
    // },
    showEventReportDetails (scope) {
      console.log(scope)
      if (scope.row.reportType === '自查上报') {
        this.isSelfReport = true
        this.isEvent = true
        // let data = this.selfReportList.filter(item => item.reportTime.slice(0, 11) == params.data[0])
        this.selfReportData = this.selfReportList.slice(0, 10)
      } else {
        this.isPeriodReport = true
        // let data = this.periodReportList.filter(item => item.reportTime.slice(0, 11) == params.data[0])
        this.periodReportData = this.periodReportList.slice(0, 10)
      }
    },
    async onChange(v) {
      if (v.getMonth()+1 < new Date().getMonth()+1) {
        // let newOption = JSON.parse(JSON.stringify(historyOption))
        // const rawData = await service.getHistoryAnalysis(v.getFullYear())
        // newOption.series[0].data = rawData.data.map(x => x.avg)
        // this.hsitoryChart.setOption(historyOption)
      } else {
        // this.initHistoryChart()
      }
    },
    handleClick(item) {
      console.log(item)
      if (item.id == 1) {
        this.isSelfReport = true
        this.isEvent = false
        this.selfReportData = this.selfReportList.slice(0, 10)
      }
      if (item.id == 2) {
        this.isPeriodReport = true
        this.periodReportData = this.periodReportList.slice(0, 10)
      }
      if (item.id == 3) {
        this.isAlarmListShow = true
        this.alarmData = this.alarmlist.slice(0, 10)
      }
    },
    handleSearch() {
      let result = this.alarmlist
      
      const { deviceName, deviceType, alarmTime } = this.formInline
      if (deviceName) {
        result = this.alarmlist.filter(x => x.deviceName.includes(deviceName))
      }
      if (deviceType) {
        const deviceTypeLabel = this.deviceTypeOptions[deviceType-1].label
        // console.log('departmentName', departmentName)
        result = (result || this.alarmlist).filter(x => x.deviceType.includes(deviceTypeLabel))
      }
      
      if (alarmTime&&alarmTime.length===2) {
        
        result = (result || this.alarmlist).filter(x =>alarmTime[0]<=new Date(x.alarmTime) && new Date(x.alarmTime)<= alarmTime[1])
      }
      // this.alarmlist = result
     
      this.alarmData = result.slice(0, 10)
    },
    handleReset() {
     Object.keys(this.formInline).forEach(x => {
        this.formInline[x] = ''
      })
      this.alarmlist = [{ id: 1, tooltipType: '一氧化碳超标1', alarmTime: '2020-05-23 11:30', deviceName: '设备1', deviceType: '气体监测', manager: '张三' },
        { id: 2, tooltipType: '一氧化碳超标2', alarmTime: '2020-05-23 11:30', deviceName: '设备1', deviceType: '气体监测', manager: '张三'  },
        { id: 3, tooltipType: '一氧化碳超标3', alarmTime: '2020-05-23 11:30', deviceName: '设备1', deviceType: '气体监测', manager: '张三'  },
        { id: 4, tooltipType: '一氧化碳超标4', alarmTime: '2020-05-23 11:30', deviceName: '设备1', deviceType: '气体监测', manager: '张三'  },
        { id: 5, tooltipType: '一氧化碳超标5', alarmTime: '2020-05-23 11:30', deviceName: '设备1', deviceType: '气体监测', manager: '张三'  }]
      this.alarmData = this.alarmlist.slice(0, 10)
    },
    emotionPageChange (v) {
      const start = (v - 1)*10
      const end = start + 10
      this.alarmData = this.emotionList.slice(start, end)
    },
    showAlarmList () {
      this.isAlarmListShow = true
      this.alarmData = this.alarmlist.slice(0, 10)
    },
    showEReportList () {
      this.isEReportShow = true
      let result = this.ereportList.filter(v => v.reportType.includes(this.reportTypeOptions[this.formInline.reportType].label))
      this.ereportList = result;
      // result.sort(function(a, b){return b.reportTime.getTime() - a.reportTime.getTime()})
      this.ereportData = result.slice(0, 10)
    },
    ereportChange (v) {
      const start = (v - 1)*10
      const end = start + 10
      this.ereportData = this.ereportList.slice(start, end)
    },
    selfReportChange (v) {
      const start = (v - 1)*10
      const end = start + 10
      this.selfReportData = this.selfReportList.slice(start, end)
    },
    periodReportChange (v) {
      const start = (v - 1)*10
      const end = start + 10
      this.periodReportData = this.periodReportList.slice(start, end)
    },
    mapInit() {
      // Cesium资源默认令牌
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MDZiODg5ZS0yMTYwLTQwNzgtODNkMi0xMjk5NzU1NDMzYTciLCJpZCI6MTM0MTUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjMyNTQ1ODF9.ZSTW9uIkKQKW2hO3KsHdBRJ-udZ4tWMEChZCSslFTyw";
      let options = {
        animation: false, // [ Bool, 是否显示动画控件 ]
        shouldAnimate: true, // [ Bool, 是否开启动画 ]
        homeButton: false, // [ Bool, 是否显示Home按钮 ]
        vrButton: false, // [ Bool, 是否显示vr按钮 ]
        fullscreenButton: false, // [ Bool, 是否显示全屏按钮 ]
        baseLayerPicker: false, // [ Bool, 是否显示图层选择控件 ]
        geocoder: false, // [ Bool, 是否显示地名查找控件 ]
        timeline: false, // [ Bool, 是否显示时间线控件 ]
        sceneModePicker: false, // [ Bool, 是否显示投影方式控件，场景切换 ]
        navigationHelpButton: false, // [ Bool, 是否显示帮助信息控件 ]
        infoBox: false, // [ Bool, 是否显示点击要素之后显示的信息 ]
        requestRenderMode: true, // [ Bool, 启用请求渲染模式 ]
        scene3DOnly: true, // [ Bool, 每个几何实例将只能以3D渲染以节省GPU内存 ]
        sceneMode: 3, // [ Number,初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode ]
        fullscreenElement: document.body, // [ Object, 全屏时渲染的HTML元素 ]
      };

      viewer = new Cesium.Viewer("cesiumContainer", options);

      viewer.scene.globe.depthTestAgainstTerrain = false;

      // logo隐藏
      viewer._cesiumWidget._creditContainer.style.display = "none";
      // 加载影像
      this.addImagery(this.morph);

      this.homeBusinessDrop();
    },
    addImagery(type = "3D") {
      // 清除默认的第一个影像 bing地图影像
      viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
      let img, label;
      if (type == "3D") {
        this.toView3Dtileset();
        // arcGis影像
        img = viewer.imageryLayers.addImageryProvider(
          new Cesium.ArcGisMapServerImageryProvider({
            url:
              "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            baseLayerPicker: false,
          })
        );

        // 天地图并标注
        label = viewer.imageryLayers.addImageryProvider(
          new Cesium.WebMapTileServiceImageryProvider({
            url:
              "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg" +
              "&tk=" +
              "19b72f6cde5c8b49cf21ea2bb4c5b21e",
            layer: "tdtAnnoLayer",
            style: "default",
            maximumLevel: 18, // 天地图的最大缩放级别
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false,
          })
        );
      }
      if (type == "2D") {
        img = viewer.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider({
            url:
              "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/png",
            tileMatrixSetID: "GoogleMapsCompatible",
            show: false,
          })
        );
        // 高德标注
        label = viewer.imageryLayers.addImageryProvider(
          new Cesium.UrlTemplateImageryProvider({
            url:
              "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=5&scale=5&style=8&x={x}&y={y}&z={z}",
            layer: "tdtAnnoLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
          })
        );
        this.clear3Dtileset();
      }
    },
    // 恢复3Dtileset
    toView3Dtileset() {
      if (tileset) {
        setTimeout(() => {
          tileset.show = true;
          console.log(tileset);
          console.log("移除3Dtil");
        }, 60);
      }
    },
    homeBusinessDrop() {
      viewer.entities.removeAll();
      // if (handler) {
      //   handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK); // 移除之前事件绑定
      // }
      // console.log(this.homeBusinessDropInfo);
      this.homeBusinessDropInfo.map((e, i) => {
        // 循环添加点
        viewer.entities.add({
          id: `${e.id}${e.name}`,
          position: Cesium.Cartesian3.fromDegrees(e.lon, e.lat, e.height), // 点位置
          label: {
            show: false,
            // text: `企业名称 : ${e.name} \n 企业行业 : ${e.industry_type}`,
            text: `企业名称 : ${e.name}`,
            font: "10pt monospace",
            showBackground: true,
            backgroundColor: new Cesium.Color(0, 0.45, 0.6, 0.6),
            pixelOffset: new Cesium.Cartesian2(0.0, -45.0),
          },
          billboard: {
            // image: require("../../assets/home/jianzhuquan.png"),
            width: 50,
            height: 50,
          },
        });
      });
      const moveGeo = this.moveGeo
      viewer.scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          moveGeo.lng,
          moveGeo.lat,
          moveGeo.alt
        ), // 设置位置
        orientation: {
          heading: Cesium.Math.toRadians(0), // 方向
          pitch: Cesium.Math.toRadians(-90), // 倾斜角度
          roll: 0,
        },
      });
      this.clear3Dtileset();
    },
    // 清空3Dtileset
    clear3Dtileset() {
      if (tileset) {
        setTimeout(() => {
          tileset.show = false;
          console.log(tileset);
          console.log("移除3Dtil");
        }, 60);
      }
    },
    listItemClick(it) {
      const moveGeo = this.moveGeo
      viewer.scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          it.pos.x,
          it.pos.y,
          moveGeo.alt
        ), // 设置位置
        orientation: {
          heading: Cesium.Math.toRadians(0), // 方向
          pitch: Cesium.Math.toRadians(-90), // 倾斜角度
          roll: 0,
        },
      });
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-equities{
  display: flex;
  padding: 0 1.25rem;
  justify-content: space-around;
  .botton{
    width: 1.5625rem;
    height: 1.4375rem;
    position: absolute;
    top: 1.75rem;
    right: 1.75rem;
    cursor: pointer;
  }
  .title {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    text-align: center;
    color: #adfaff;
    margin-top: 0.3125rem;
    line-height: 2.625rem;
  }
  .left{
    width: 36.75rem;
    padding-top: 2rem;
    .left-top {
      background-size: 100% 100%;
      width: 36.6875rem;
      height: 22.0625rem;
      margin-top: 2.75rem;
      position: relative;
      .left-top-title {
        background-size: 100% 100%;
        width: 13.875rem;
        height: 3.3125rem;
        position: absolute;
        left: 10.8125rem;
        bottom: 20.25rem;
      }
      .left-top-content {
        width: 100%;
        height: calc(100% - 1.875rem);
        padding-top: 4.1875rem;
        overflow: hidden;
        .list-item {
          &.list-item-lf {
            margin-left: 2.9375rem;
          }
          .list-item-img {
            width: 2.5rem;
            height: 2.5rem;
            vertical-align: middle;
            transform: translate(0, -8%);
            margin-right: 0.75rem;
          }
          &.list-item-middle {
            margin-left: 1.4375rem;
          }
          &.list-item-rf {
            margin-right: 3.1875rem;
          }
        }
      }
    }
    .left-bottom {
      background-size: 100% 100%;
      width: 36.6875rem;
      height: 26.0625rem;
      margin-top: 2.1875rem;
      margin-bottom: 1.9375rem;
      position: relative;
      padding-top: 3.125rem;
      .left-bottom-title {
        background-size: 14.5rem 3.3125rem;
        width: 14.5rem;
        height: 3.3125rem;
        position: absolute;
        left: 11.125rem;
        bottom: 24.25rem;
      }
      .radio-wrap {
        margin-left: 1.875rem;
      }
      .container{
        width: 36.6875rem;
        height: 22.8125rem;
        margin: 0 auto;
      }
    }
  }
  .middle {
    width: 41.75rem;
    margin-left: 1.25rem;
    // float: left;
    .middle-top {
      width: 41.6875rem;
      height: 30.25rem;
      margin-top: 2.0625rem;
      background-size: 100% 100%;
      #cesiumContainer{
        width: 100%;
        height: 100%;
      }
    }
    .middle-bottom {
      width: 41.75rem;
      height: 26.0625rem;
      margin-top: 2.125rem;
      background-size: 100% 100%;
      position: relative;
      padding-top: 3.1875rem;
      .middle-bottom-title {
        background-size: 15.75rem 3.3125rem;
        width: 15.75rem;
        height: 3.3125rem;
        position: absolute;
        left: 13rem;
        bottom: 24.25rem;
      }
      .event-container{
        width: 41.75rem;
        height: 22.8125rem;
        // margin: 0 auto;
      }
      .date-picker-wrap{
        width: 3.25rem;
        position: absolute;
        top: 1.75rem;
        right: 4.75rem;
        cursor: pointer;
        .arrow {
          cursor: pointer;
          width: 0.375rem;
          position: absolute;
          right: -0.1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .right {
    width: 36.6875rem;
    margin-left: 1.0625rem;
    // float: left;
    .right-top {
      width: 36.6875rem;
      height: 30.25rem;
      background-size: 100% 100%;
      margin-top: 2.0625rem;
      position: relative;
      .right-top-title {
        background-size: 12rem 3.3125rem;
        width: 12rem;
        height: 3.3125rem;
        position: absolute;
        left: 12.375rem;
        bottom: 28.4375rem;
      }
      .right-top-lf {
        // display: inline-block;
        width: 16.625rem;
        height: 24.5625rem;
        background-size: 100% 100%;
        margin-left: 1.5rem;
        margin-top: 4.125rem;
        float: left;
        &.rf{
          margin-left: 0.625rem;
          .hardwareChart {
            width: 16.625rem;
            height: 21.9375rem;
          }
        }
        .right-top-lf-title {
          height: 2.625rem;
          width: 100%;
          padding: 0 0 0 1.25rem;
          font-size: 1rem;
          font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
          font-weight: R;
          text-align: left;
          color: #ffffff;
          line-height: 2.625rem;
        }
        .monitorVideoChart {
          width: 16.625rem;
          height: 21.9375rem;
        }
      }
    }
    .right-bottom {
      width: 36.6875rem;
      height: 26.0625rem;
      background-size: 100% 100%;
      margin-top: 2.0625rem;
      position: relative;
      .right-bottom-title {
        background-size: 18.25rem 3.3125rem;
        width: 18.25rem;
        height: 3.3125rem;
        position: absolute;
        left: 9.25rem;
        bottom: 24.25rem;
      }
      .studyChart {
        width: 36.6875rem;
        height: 26.0625rem;
      }
    }
  }
  .pages-display-emotion-reportItem:not(:last-child){
    margin-right: 1.375rem;
  }
 
}

</style>
