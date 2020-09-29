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
  }
}
</script>

<style lang="less" scoped>
.pages-display-equities{
  display: flex;
  .botton{
    width: 25px;
    height: 23px;
    position: absolute;
    top: 28px;
    right: 28px;
  }
  .title {
    // width: 154px;
    width: 100%;
    height: 100%;
    height: 23px;
    font-size: 24px;
    font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
    font-weight: R;
    text-align: center;
    color: #adfaff;
    margin-top: 5px;
    line-height: 42px;
    letter-spacing: 2px;
  }
  .left{
    width: 588px;
    padding-top: 32px;
    margin-left: 24px;
    // float: left;/
    .left-top {
      background-size: 100% 100%;
      width: 587px;
      height: 353px;
      margin-top: 44px;
      position: relative;
      .left-top-title {
        background-size: 100% 100%;
        width: 222px;
        height: 53px;
        position: absolute;
        left: 173px;
        bottom: 324px;
      }
      .left-top-content {
        width: 100%;
        height: calc(100% - 30px);
        padding-top: 67px;
        overflow: hidden;
      }
    }
    .left-bottom {
      background-size: 100% 100%;
      width: 587px;
      height: 417px;
      margin-top: 35px;
      margin-bottom: 31px;
      position: relative;
      padding-top: 50px;
      .left-bottom-title {
        background-size: 232px 53px;
        width: 232px;
        height: 53px;
        position: absolute;
        left: 178px;
        bottom: 388px;
      }
      .radio-wrap {
        margin-left: 30px;
      }
      .container{
        width: 587px;
        height: 365px;
        margin: 0 auto;
      }
    }
  }
  .middle {
    width: 668px;
    margin-left: 20px;
    // float: left;
    .middle-top {
      width: 667px;
      height: 484px;
      margin-top: 33px;
    }
    .middle-bottom {
      width: 668px;
      height: 417px;
      margin-top: 34px;
      background-size: 100% 100%;
      position: relative;
      padding-top: 51px;
      .middle-bottom-title {
        background-size: 252px 53px;
        width: 252px;
        height: 53px;
        position: absolute;
        left: 208px;
        bottom: 388px;
      }
      .event-container{
        width: 668px;
        height: 365px;
        // margin: 0 auto;
      }
    }
  }
  .right {
    width: 587px;
    margin-left: 17px;
    // float: left;
    .right-top {
      width: 587px;
      height: 484px;
      background-size: 100% 100%;
      margin-top: 33px;
      position: relative;
      .right-top-title {
        background-size: 192px 53px;
        width: 192px;
        height: 53px;
        position: absolute;
        left: 198px;
        bottom: 455px;
      }
      .right-top-lf {
        // display: inline-block;
        width: 266px;
        height: 393px;
        background-size: 100% 100%;
        margin-left: 24px;
        margin-top: 66px;
        float: left;
        &.rf{
          margin-left: 10px;
        }
        .right-top-lf-title {
          height: 42px;
          width: 100%;
          padding: 0 0 0 20px;
          font-size: 16px;
          font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
          font-weight: R;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
        }
      }
    }
    .right-bottom {
      width: 587px;
      height: 417px;
      background-size: 100% 100%;
      margin-top: 33px;
      position: relative;
      .right-bottom-title {
        background-size: 292px 53px;
        width: 292px;
        height: 53px;
        position: absolute;
        left: 148px;
        bottom: 388px;
      }
    }
  }
  .pages-display-emotion-reportItem:not(:last-child){
    margin-right: 22px;
  }
 
}

</style>
