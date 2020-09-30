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
  height: 100%;
}
</style>
<style lang="less">
.pages-display{
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
  .el-pagination__total{
    color: #fff;
  }
  .el-pagination.is-background .el-pager li{
    color: #fff;
    background-color: rgba(21,239,239,0);
    border-radius: 0;
    border: 1px solid #15efef;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: rgba(21,239,239,0.5);
  }
  .el-pagination.is-background .btn-next{
    color: #fff;
    border-radius: 0;
    background-color: rgba(21,239,239,0.5);
    border: 1px solid #15efef;
    padding: 0 1rem;
  }
  .el-pagination.is-background .btn-prev{
    color: #fff;
    border-radius: 0;
    background-color: rgba(21,239,239,0.5);
    border: 1px solid #15efef;
    padding: 0 1rem;
  }
  .el-date-editor--year .el-input__prefix{
    display: none;
  }
  .el-input--prefix .el-input__inner{
    padding: 0;
  }
  .el-input--mini .el-input__inner{
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
}
</style>
