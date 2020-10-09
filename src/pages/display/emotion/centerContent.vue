<template>
  <div class="pages-display-emotion-center">
    <div class="emotion-recognition-wrap">
      <img :src="bg" class="bg-img">
      <img :src="moreIcon" class="more-icon">
      <div class="info-wrap">
        <div class="border"></div>
        <div class="text">张三</div>
        <div class="box">
          <div>情绪： 开心</div>
          <div>年龄： 36</div>
          <div>籍贯： 山东</div>
          <div>民族： 汉族</div>
          <div>部门： 工程部</div>
          <div>职位： 技术工</div>
          <div>工种： 电工</div>
          <div>爱好： 看书</div>
        </div>
      </div>
      <div class="border-o">
        <div class="border-i"></div>
      </div>
      <transition name="el-zoom-in-bottom">
        <div class="incream-wrap" v-show="showIncream">
          <span>+1</span>
        </div>
      </transition>
      <div class="progress-bar-wrap">
        <div class="content">
          <span class="label">幸福捕获指数:</span>
          <div class="bar" :style="{backgroundSize: bgSize}"></div>
          <span class="percent">{{barVal}}%</span>
        </div>
      </div>
    </div>

    <div class="low-grade-wrap clear-mgn">
      <img :src="borderBg" class="border-bg">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        低分报告案例
      </div>
      <div class="radio-wrap">
        <el-radio-group v-model="select">
          <el-radio :label="2">本月</el-radio>
          <el-radio :label="3">本年</el-radio>
        </el-radio-group>

        <el-select v-model="lowScoreSelect" placeholder="请选择" size="mini" style="width: 9.375rem">
          <el-option v-for="it in lowScoreOptions" :key="it.scale_id" :label="it.scale_name" :value="it.scale_id"></el-option>
        </el-select>
      </div>

      <div class="report-wrap" @click="handleDetail">
        <div class="left">
          <img :src="attentionIcon" class="icon">
          <div class="status">重度焦虑</div>
          <div class="right-border"></div>
        </div>
        <div class="name-box">
          <div class="name">焦虑测量表-张三</div>
          <div class="date">2019-05-23</div>
        </div>
        <div class="score">
          15<span style="font-size: 28px">分</span>
        </div>
        <img :src="linkImg" class="link-img">
      </div>
    </div>

    <el-dialog title="结果分析" width="50rem"
      :visible.sync="dialogVisible">
      <div class="content-wrap">
        <div class="title">测评人员信息</div>
        <div class="info-wrap">
          <div class="label info">职工姓名:</div>
          <div class="value info">{{infoData.name}}</div>
          <div class="label info">职工性别:</div>
          <div class="value info">{{infoData.sexy}}</div>
          <div class="label info">职工籍贯:</div>
          <div class="value info">{{infoData.jiguan}}</div>
          <div class="label info">职工民族:</div>
          <div class="value info">{{infoData.mz}}</div>
          <div class="label info">职工职位:</div>
          <div class="value info">{{infoData.position}}</div>
          <div class="label info">职工部门:</div>
          <div class="value info">{{infoData.department}}</div>
          <div class="label info">职工工种:</div>
          <div class="value info">{{infoData.gz}}</div>
          <div class="label info">职工手机:</div>
          <div class="value info">{{infoData.phone}}</div>
        </div>
        <div class="title">测评成绩</div>
        <div class="chart-wrap">
          <div class="chart-title">
            <div>15分</div>
            <div>人员当前处于重度焦虑状态</div>
          </div>
          <div class="chart" ref="chart"></div>
        </div>
        <div class="title">测评建议</div>
        <div class="suggest">
          <div>关于焦虑，你还需要知道这些</div>
          <div>一. 焦虑不等于焦虑症</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>二. 如何直观的判断自己是不是焦虑症</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bg from '@/assets/images/曲线 540@2x.png'
import borderBg from '@/assets/images/BG _3@2x.png'
import titleBg from '@/assets/images/多边形 1_3@2x.png'
import attentionIcon from '@/assets/images/叹号@2x.png'
import linkImg from '@/assets/images/链接@2x.png'
import moreIcon from '@/assets/images/更多@2x.png'
import * as service from '../apis'
import echarts from 'echarts'
import option from './info'
import { setInterval, clearInterval, setTimeout } from 'timers';

export default {
  data() {
    return {
      bg,
      borderBg,
      titleBg,
      select: 2,
      attentionIcon,
      moreIcon,
      linkImg,
      lowScoreSelect: '',
      lowScoreOptions: [],
      dialogVisible: false,
      infoData: {
        name: '张三',
        sexy: '男',
        jiguan: '北京',
        mz: '汉',
        position: '切割员',
        department: '技术部',
        gz: '切割工',
        phone: '188xxxx1245'
      },
      barVal: 28,
      showIncream: false,
    }
  },
  mounted() {
    this.initData()

    this.timmer = setInterval(() => {
      if (this.barVal >= 100) this.timmer&& clearInterval(this.timmer)
      this.barVal++
      this.showIncream = true
      setTimeout(() => this.showIncream = false, 1000)
    }, 30*1000)
  },
  beforeDestroy() {
    this.timmer&& clearInterval(this.timmer)
  },
  methods: {
    async initData() {
      const res = await service.getLowScoreSelections()
      this.lowScoreOptions = res.data
      this.lowScoreSelect = res.data[0].scale_id
      // TODO: 接口联调
      const rawData = await service.getLowScore({
        status: 1,
        assess_id: 1
      })
      console.log(rawData)
    },
    handleDetail() {
      this.dialogVisible = true
      this.$nextTick(() => {
        const chart = echarts.init(this.$refs.chart)
        chart.setOption(option)
      })
    },
  },
  computed: {
    bgSize() {
      return `${this.barVal}% 100%`;
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion-center{
  width: 42.0625rem;
  height: 100%;
  margin: 2rem 1rem 0 1rem;
  .emotion-recognition-wrap{
    width: 100%;
    height: 40.875rem;
    position: relative;
    overflow: hidden;
    .bg-img{
      position: absolute;
      width: 55.1875rem;
      height: 42rem;
      z-index: 0;
      top: 0;
      left: 0;
    }
    .more-icon{
      width: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      right: 0.625rem;
      cursor: pointer;
    }
    .info-wrap{
      width: 7.9375rem;
      min-height: 12.8125rem;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.5);
      box-shadow: 0rem 0rem 2.5rem 0rem rgba(0,0,0,0.7);
      padding-bottom: 1rem;
      .border{
        width: 7.9375rem;
        height: 0.125rem;
        background: #51ffff;
        box-shadow: 0rem 0rem 2.5rem 0rem rgba(0,0,0,0.7);
        top: 0;
        left: 0;
      }
      .text{
        height: 1rem;
        font-size: 1rem;
        line-height: 1rem;
        color: #fff;
        margin-left: 1.25rem;
        margin-top: 0.9375rem;
        margin-bottom: 0.625rem;
      }
      .box{
        color: #fff;
        font-size: 0.875rem;
        margin-left: 1.25rem;
        &>div:not(:last-child){
          margin-bottom: 0.5rem;
        }
      }
    }
    .border-o{
      width: 15.5625rem;
      height: 16.0625rem;
      border: 1px solid #51ffff;
      position: absolute;
      top: 6.4375rem;
      right: 11.4375rem;
      z-index: 99;
      .border-i{
        width: 43px;
        height: 43px;
        position: absolute;
        top: 0;
        right: 0;
        border-left: 1px dashed #51ffff;
        border-bottom: 1px dashed #51ffff;
      }
    }
    .incream-wrap{
      position: absolute;
      color: #FF586F;
      font-size: 1.5rem;
      right: 1rem;
      bottom: 5.625rem;
    }
    .progress-bar-wrap{
      width: 42.0625rem;
      height: 5.25rem;
      background: rgba(0,0,0,.5);
      border-radius: 0rem 0rem 0.3125rem 0.3125rem;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      .content{
        margin-left: 0.75rem;
        .label{
          font-size: 1.125rem;
          color: #fff;
        }
        .bar{
          display: inline-block;
          width: 28rem;
          height: 2rem;
          border: 0.0625rem solid #b2bccc;
          border-radius: 0.25rem;
          background-image: linear-gradient(to right,#0073F0, #00B5FA);
          background-repeat: no-repeat;
          vertical-align: middle;
          margin-left: 0.625rem;
          margin-right: 1.25rem;
        }
        .percent{
          font-size: 1.5rem;
          font-weight: 400;
          color: #fff;
          vertical-align: middle;
        }
      }
    }
  }
  .low-grade-wrap{
    width: 41.75rem;
    height: 15.4375rem;
    position: relative;
    margin-top: 2.25rem;
    .border-bg{
      width: 41.75rem;
      position: absolute;
      top:0;
      left: 0;
      z-index: 0;
    }
    .title-width{
      width: 14.5rem;
    }
    .radio-wrap{
      margin-top: 3.125rem;
      padding: 0 1.875rem;
      display: flex;
      justify-content: space-between;
    }
    .report-wrap{
      width: 38.3125rem;
      height: 6.5rem;
      background: rgba(255,255,255, .1);
      border-radius: 0.3125rem;
      margin: 0 auto;
      margin-top: 1.875rem;
      padding-left: 5.625rem;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        position: absolute;
        width: 5.625rem;
        height: 6.5rem;
        left: 0;
        top: 0;
        text-align: center;
        color: #fff;
        .icon{
          width: 1.5625rem;
          height: 1.4375rem;
          margin-top: 1.6875rem;
        }
        .status{
          font-size: 0.75rem;
          margin-top: 0.875rem;
        }
        .right-border{
          width: 0.0625rem;
          height: 2.1875rem;
          opacity: 0.5;
          background: #d0bcb9;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .name-box{
        color: #fff;
        margin-left: 1.25rem;
        .name{
          font-size: 1rem;
          margin-bottom: 1.25rem;
        }
        .date{
          font-size: 0.875rem;
        }
      }
      .score{
        color: #51FFFF;
        font-size: 3rem;
        margin-right: 2.3125rem;
        font-weight: 700;
      }
      .link-img{
        position: absolute;
        width: 1.1875rem;
        right: 0.4375rem;
        top: 0.4375rem;
        cursor: pointer;
      }
    }
  }
  .content-wrap{
    .title{
      color: #fff;
      font-size: 1.25rem;
    }
    .info-wrap{
      color: #fff;
      font-size: 0.875rem;
      margin: 1.25rem 0;
      display: flex;
      flex-wrap: wrap;
      .info{
        border: 0.0625rem solid #fff;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
      }
      .label{
        width: 9.375rem;
      }
      .value{
        width: 12.5rem;
      }
    }
    .chart-wrap{
      width: 100%;
      color: #fff;
      border: 0.0625rem solid #fff;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      .chart-title{
        text-align: center;
      }
      .chart{
        width: 100%;
        height: 16.25rem;
      }
    }
    .suggest{
      color: #fff;
      margin-top: 0.625rem;
      &>div{
        margin-bottom: 0.3125rem;
      }
    }
  }
}
</style>