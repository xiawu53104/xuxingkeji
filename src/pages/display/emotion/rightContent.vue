<template>
  <div class="pages-display-emotion-right">
    <div class="grade-wrap clear-mgn">
      <img :src="gradeBg" class="grade-bg">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        心理测评成绩分析
      </div>
      <div class="radio-wrap">
        <el-radio-group v-model="select">
          <el-radio :label="2">月度</el-radio>
          <el-radio :label="3">年度</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import gradeBg from '@/assets/images/BG _2@2x.png'
import titleBg from '@/assets/images/多边形 1_2@2x.png'

export default {
  data() {
    return {
      gradeBg,
      titleBg,
      select: 2,
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion-right{
  width: 587px;
  height: 100%;
  .grade-wrap{
    width: 100%;
    height: 484px;
    position: relative;
    margin-top: 31px;
    .grade-bg{
      width: 100%;
      height: 484px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
    .title-width{
      width: 292px;
    }
    .radio-wrap{
      margin-left: 30px;
      margin-top: 20px;
    }
  }
}
</style>
