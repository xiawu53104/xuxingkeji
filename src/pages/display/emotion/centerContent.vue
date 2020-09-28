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
  width: 673px;
  height: 100%;
  margin: 32px 16px 0 16px;
  .emotion-recognition-wrap{
    width: 100%;
    height: 654px;
    position: relative;
    overflow: hidden;
    .bg-img{
      position: absolute;
      width: 883px;
      height: 672px;
      z-index: 0;
      top: 0;
      left: 0;
    }
    .info-wrap{
      width: 127px;
      height: 205px;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.5);
      box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.7);
      .border{
        width: 127px;
        height: 2px;
        background: #51ffff;
        box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.7);
        top: 0;
        left: 0;
      }
      .text{
        height: 16px;
        font-size: 16px;
        line-height: 16px;
        color: #fff;
        margin-left: 20px;
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .box{
        color: #fff;
        font-size: 14px;
        margin-left: 20px;
        &>div:not(:last-child){
          margin-bottom: 8px;
        }
      }
    }
    .progress-bar-wrap{
      width: 673px;
      height: 84px;
      background: rgba(0,0,0,.5);
      border-radius: 0px 0px 5px 5px;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      .content{
        margin-left: 12px;
        .label{
          font-size: 18px;
          color: #fff;
        }
        .bar{
          display: inline-block;
          width: 448px;
          height: 32px;
          border: 1px solid #b2bccc;
          border-radius: 4px;
          background-image: linear-gradient(to right,#0073F0, #00B5FA);
          background-repeat: no-repeat;
          vertical-align: middle;
          margin-left: 10px;
          margin-right: 20px;
        }
        .percent{
          font-size: 24px;
          font-weight: 400;
          color: #fff;
          vertical-align: middle;
        }
      }
    }
  }
  .low-grade-wrap{
    width: 668px;
    height: 247px;
    position: relative;
    margin-top: 36px;
    .border-bg{
      width: 668px;
      position: absolute;
      top:0;
      left: 0;
      z-index: 0;
    }
    .title-width{
      width: 232px;
    }
    .radio-wrap{
      margin-top: 50px;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
    }
    .report-wrap{
      width: 613px;
      height: 104px;
      background: rgba(255,255,255, .1);
      border-radius: 5px;
      margin: 0 auto;
      margin-top: 30px;
      padding-left: 90px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        position: absolute;
        width: 90px;
        height: 104px;
        left: 0;
        top: 0;
        text-align: center;
        color: #fff;
        .icon{
          width: 25px;
          height: 23px;
          margin-top: 27px;
        }
        .status{
          font-size: 12px;
          margin-top: 14px;
        }
        .right-border{
          width: 1px;
          height: 35px;
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
        margin-left: 20px;
        .name{
          font-size: 16px;
          margin-bottom: 20px;
        }
        .date{
          font-size: 14px;
        }
      }
      .score{
        color: #51FFFF;
        font-size: 48px;
        margin-right: 37px;
        font-weight: 700;
      }
      .link-img{
        position: absolute;
        width: 19px;
        right: 7px;
        top: 7px;
      }
    }
  }
}
</style>
