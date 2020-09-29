<template>
  <div class="pages-display-emotion-center">
    <div class="emotion-recognition-wrap">
      <img :src="bg" class="bg-img">
      <div class="info-wrap">
        <div class="border"></div>
        <div class="text">张三</div>
        <div class="box">
          <div>情绪： 开心</div>
          <div>年龄： 36</div>
          <div>籍贯： 山东</div>
          <div>民族： 汉族</div>
          <div>工种： 电工</div>
          <div>爱好： 看书</div>
        </div>
      </div>
      <div class="progress-bar-wrap">
        <div class="content">
          <span class="label">幸福捕获指数:</span>
          <div class="bar" :style="{backgroundSize: bgSize}"></div>
          <span class="percent">89%</span>
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
          <el-radio :label="1">日度</el-radio>
          <el-radio :label="2">月度</el-radio>
          <el-radio :label="3">年度</el-radio>
        </el-radio-group>

        <!-- <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>

      <div class="report-wrap">
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
  </div>
</template>

<script>
import bg from '@/assets/images/曲线 540@2x.png'
import borderBg from '@/assets/images/BG _3@2x.png'
import titleBg from '@/assets/images/多边形 1_3@2x.png'
import attentionIcon from '@/assets/images/叹号@2x.png'
import linkImg from '@/assets/images/链接@2x.png'

export default {
  data() {
    return {
      bg,
      borderBg,
      titleBg,
      select: 1,
      attentionIcon,
      linkImg,
    }
  },
  computed: {
    bgSize() {
      return `89% 100%`;
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
    .info-wrap{
      width: 7.9375rem;
      height: 12.8125rem;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.5);
      box-shadow: 0rem 0rem 2.5rem 0rem rgba(0,0,0,0.7);
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
      }
    }
  }
}
</style>
