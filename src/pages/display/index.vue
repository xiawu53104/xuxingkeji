<template>
  <div class="pages-display" :style="{backgroundImage: `url(${bgImg})`}">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/displayHeader/index'
import bgImg from '@/assets/images/bg.png'
import $ from 'jquery'

export default {
  components: {
    Header,
  },
  data() {
    return {
      bgImg,
    }
  },
  mounted() {
    $('body').css({ 'background-color': '#0C2050' })
  }
}
</script>

<style lang="less" scoped>
.pages-display{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  // height: 100%;
}
</style>
<style lang="less">
.pages-display, .customer-dialog{
  .el-input__inner{
    background-color: transparent;
    border: 0.0625rem solid #52ffff;
    color: #fff !important;
    border-radius: 0;
  }
  .el-select .el-input .el-input__inner{
    border-color: #52ffff;
  }
  .el-select .el-input.is-focus .el-input__inner{
    border-color: #52ffff;
  }
  .el-input__inner:focus{
    border-color: #52ffff;
  }
  
  .el-date-editor--year .el-input__prefix, .el-date-editor--month .el-input__prefix{
    display: none;
  }
  .el-input--prefix .el-input__inner{
    padding: 0;
  }
  .el-input--mini .el-input__inner{
    height: 1.8rem;
    line-height: 1.8rem;
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
  .el-input--mini .el-input__icon{
    line-height: 1rem;
  }
  .el-select .el-input .el-select__caret{
    font-size: 0.75rem;
  }
  .el-date-editor .el-range-input{
    background: transparent;
    color: #fff;
  }
  .el-range-editor--mini.el-input__inner{
    height: 1.8rem;
  }
  .el-range-editor.is-active, .el-range-editor.is-active:hover{
    border-color: #52ffff;
  }
  .el-range-editor.el-input__inner {
    padding: 1px 10px;
  }
  .el-date-editor .el-range-input {
    background: transparent;
  }
  .el-date-editor .el-range-separator {
    color: #606266;
  }
  .el-date-editor--date{
    .el-icon-date{
      display: none;
    }
  }
}
</style>
