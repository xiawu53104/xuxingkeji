<template>
  <div class="pages-display-equities">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems" v-bind="item" :key="i"></report-item>
      </div>
      <div class="left-top" :style="{backgroundImage: `url(${alarmBG})`}">
        <div class="left-top-title" :style="{backgroundImage: `url(${alarmTitle})`}">
          <div class="title">今日异常提醒</div>
        </div>
        <img class="botton" :src="moreIcon" alt="">
        <div class="left-top-content">
          <!-- <div class="list-wrap"> -->
            <scroll-list></scroll-list>
          <!-- </div> -->
          <!-- <div class="left-top-content-list" v-for="item in alarmlist" :key="item.content">
            <el-divider></el-divider>
            <div class="left-top-content-list-container">
              <span>
                {{item.content}}
              </span>
              <span>{{item.time}}</span>
            </div>
          </div>
          <el-divider></el-divider> -->
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
      <div class="middle-top"></div>
      <div class="middle-bottom" :style="{backgroundImage: `url(${eventBG})`}">
        <div class="middle-bottom-title" :style="{backgroundImage: `url(${eventTitle})`}">
          <div class="title">事件上报趋势图</div>
        </div>
        <img class="botton" :src="moreIcon" alt="">
        <div class="event-container" ref="eventChart"></div>
      </div>
    </div>
    <div class="right">
      <div class="right-top" :style="{backgroundImage: `url(${hardWareBG})`}">
        <div class="right-top-title" :style="{backgroundImage: `url(${hardWareTitle})`}">
          <div class="title">硬件状态</div>
        </div>
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
  </div>
</template>

<script>
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
export default {
  components: {
    ReportItem,
    ScrollList
  },
  data() {
    return {
      reportItems: [
        { count: 10392, title: '企业总人数', colorType: 'bule' },
        { count: 2873, title: '历史情绪识别', colorType: 'green' },
        { count: 17215, title: '预警人次', colorType: 'yellow' },
      ],
      alarmlist: [
        { content: '一氧化碳超标1', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标2', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标3', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标4', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标5', time: '2020-05-23 11:30' }
      ],
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
      select: 1,
    }
  },
  mounted () {
    let chart = echarts.init(this.$refs.container)
    chart.setOption(option)
    let eventCharts = echarts.init(this.$refs.eventChart)
    eventCharts.setOption(eventOption)
    let monitorVideoChart = echarts.init(this.$refs.monitorVideoChart)
    monitorVideoChart.setOption(monitorVideoOption)
    let hardwareChart = echarts.init(this.$refs.hardwareChart)
    hardwareChart.setOption(hardwareOption)
    let studyChart = echarts.init(this.$refs.studyChart)
    studyChart.setOption(studyOption)
  }
}
</script>

<style lang="less" scoped>
.pages-display-equities{
  display: flex;
  .botton{
    width: 1.5625rem;
    height: 1.4375rem;
    position: absolute;
    top: 1.75rem;
    right: 1.75rem;
  }
  .title {
    // width: 9.625rem;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
    font-weight: R;
    text-align: center;
    color: #adfaff;
    margin-top: 0.3125rem;
    line-height: 2.625rem;
    letter-spacing: 0.125rem;
  }
  .left{
    width: 36.75rem;
    padding-top: 2rem;
    margin-left: 1.5rem;
    // float: left;/
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
