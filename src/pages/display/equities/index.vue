<template>
  <div class="pages-display-equities">
    <div class="left">
      <div class="left-header">
        <report-item v-for="(item, i) in reportItems" v-bind="item" :key="i"></report-item>
      </div>
      <div class="left-top">
        <div class="left-top-title">
          <div class="title">今日异常提醒</div>
        </div>
        <img class="botton" src="../../../assets/images/botton.png" alt="">
        <div class="left-top-content">
          <div class="left-top-content-list" v-for="item in alarmlist" :key="item.content">
            <el-divider></el-divider>
            <div class="left-top-content-list-container">
              <span>
                {{item.content}}
              </span>
              <span>{{item.time}}</span>
            </div>
          </div>
          <el-divider></el-divider>
        </div>
      </div>
      <div class="left-bottom">
        <div class="left-bottom-title">
          <div class="title">安全隐患分析</div>

        </div>
      </div>
    </div>
    <div class="middle">

    </div>
  </div>
</template>

<script>
import ReportItem from '../emotion/reportItem'
export default {
  components: {
    ReportItem,
  },
  data() {
    return {
      reportItems: [
        { count: 10392, title: '企业总人数', colorType: 'bule' },
        { count: 2873, title: '历史情绪识别', colorType: 'green' },
        { count: 17215, title: '预警人次', colorType: 'yellow' },
      ],
      alarmlist: [
        { content: '一氧化碳超标', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标', time: '2020-05-23 11:30' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-equities{
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
    .left-top {
      background: url(../../../assets/images/left_top.png) no-repeat;
      background-size: 100% 100%;
      width: 587px;
      height: 353px;
      margin-top: 44px;
      position: relative;
      .left-top-title {
        background: url(../../../assets/images/left_top_title.png) no-repeat;
        background-size: 100% 100%;
        width: 222px;
        height: 53px;
        position: absolute;
        left: 173px;
        bottom: 324px;
      }
      .left-top-content {
        width: 100%;
        height: 100%;
        padding-top: 67px;
        .left-top-content-list {
          width: 100%;
          height: 50px;
          .left-top-content-list-container {
            display: flex;
            padding-left: 47px;
            padding-right: 51px;
            justify-content: space-between;
            padding-top: 4px;
            font-size: 14px;
            font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
            font-weight: R;
            text-align: left;
            color: #d4fff2;
            line-height: 42px;
          }
        }
      }
    }
    .left-bottom {
      background: url(../../../assets/images/left_top.png) no-repeat;
      background-size: 100% 100%;
      width: 587px;
      height: 417px;
      margin-top: 35px;
      margin-bottom: 31px;
      position: relative;
      .left-bottom-title {
        background: url(../../../assets/images/left_bottom_title.png) no-repeat;
        background-size: 232px 53px;
        width: 232px;
        height: 53px;
        position: absolute;
        left: 178px;
        bottom: 388px;
      }
    }
  }
  .middle {
    width: 668px;
    margin-left: 20px;
  }
  .pages-display-emotion-reportItem:not(:last-child){
    margin-right: 22px;
  }
 
}

</style>
