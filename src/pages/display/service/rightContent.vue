<template>
  <div class="pages-display-service-right">
    <div class="books-wrap" :style="{backgroundImage: `url(${booksBg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        图书借阅
      </div>
      <div class="read-wrap" @click="jumpClick">
        <img :src="book" class="book">
        <span>去dush</span>
      </div>
      <div class="books-wrap-lf" :style="{backgroundImage: `url(${booksWrap})`}">
        <div class="books-wrap-lf-title">
          博学之星
        </div>
        <div class="list">
          <div class="list-wrap">
            <scroll-list :data="users">
              <template v-slot:default="{data: {i, item}}">
                <span class="list-item">{{`TOP${i + 1}`}}</span>
                <span class="list-item">{{item.name}}</span>
                <span class="list-item">{{item.department}}</span>
              </template>
            </scroll-list>
          </div>
        </div>
      </div>
      <div class="books-wrap-lf rf" :style="{backgroundImage: `url(${booksWrap})`}">
        <div class="books-wrap-lf-title">
          部门借阅分析
        </div>
        <div class="booksWrapChart" ref="booksWrapChart"></div>
      </div>
    </div>

    <div class="right-bottom" :style="{backgroundImage: `url(${bottomBg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        职工风采
      </div>
      <img class="more-icon" :src="moreIcon" @click="handleMore">
      <div class="shaky-box">
        <img v-for="i in [1,2,3,4,5,6,7,8]" :key="shaky+i" :src="require('@/assets/images/zhif'+i+'.jpg')" class="shaky">
      </div>
    </div>

    <el-dialog title="职工风采" width="79.875rem"
      :visible.sync="dialogVisible">
      <div class="active-dialog-wrap">
        <ActiveItem :imgPath="shaky" />
        <ActiveItem :imgPath="shaky" />
        <ActiveItem :imgPath="shaky" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import booksBg from '@/assets/images/grade-bg.png'
import titleBg from '@/assets/images/left_header_lf_title.png'
import moreIcon from '@/assets/images/botton.png'
import booksWrap from '@/assets/images/books_wrap.png'
import bottomBg from '@/assets/images/BG@2x.png'
import shaky from '@/assets/images/tceng14.png'
import book from '@/assets/images/dush.png'
import ScrollList from '@/components/scrollList/index'
import getUsers from '../user'
import echarts from 'echarts'
import booksWrapOption from './books_wrap'
import ActiveItem from './activeItem'

export default {
  data() {
    return {
      booksBg,
      titleBg,
      moreIcon,
      booksWrap,
      bottomBg,
      users: [
        { name: '张琳', department: '安全科' },
        { name: '姜岩', department: '后勤办' },
        { name: '王士昌', department: '运行部' },
        { name: '姚文龙', department: '运行部' },
        { name: '孙玉艳', department: '运行部' },
        { name: '刘振洋', department: '综合办' },
        { name: '刘志山', department: '设备科' },
        { name: '张晓东', department: '安全科' },
        { name: '颜芳', department: '设备科' },
        { name: '孙爱波', department: '生产办' },
      ],
      dialogVisible: false,
      shaky,
      book,
    }
  },
  components: {
    ScrollList,
    ActiveItem,
  },
  mounted() {
    let booksWrapChart = echarts.init(this.$refs.booksWrapChart)
    booksWrapChart.setOption(booksWrapOption)
  },
  methods: {
    handleMore() {
      this.dialogVisible = true
    },
    jumpClick() {
      const a = document.createElement('a')
      a.target = '_blank'
      a.href = 'https://www.baidu.com'
      a.click()
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-service-right{
  width: 36.6875rem;
  height: 100%;
  .more-icon{
    width: 1.5625rem;
    height: 1.4375rem;
    position: absolute;
    top: 1.75rem;
    left: 33.4375rem;
    cursor: pointer;
  }
  .title-width{
    width: 12rem;
  }
  .books-wrap{
    height: 30.25rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 2rem;
    display: flex;
    position: relative;
    .read-wrap{
      position: absolute;
      width: 6.1875rem;
      height: 2rem;
      opacity: 0.6;
      background: linear-gradient(#015eea 0%, #00c0fa 100%);
      border-radius: 1rem;
      top: 1.75rem;
      right: 1.3125rem;
      color: #fff;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .book{
        width: 1.1875rem;
      }
    }
    .books-wrap-lf {
      width: 16.625rem;
      height: 24.5625rem;
      margin-left: 1.5rem;
      margin-top: 4.125rem;
      background-size: 100% 100%;
      &.rf {
        margin-left: 0.625rem;
        .booksWrapChart {
          width: 16.625rem;
          height: 21.9375rem;
        }
      }
      .books-wrap-lf-title {
        height: 2.625rem;
        width: 100%;
        padding: 0 0 0 1.25rem;
        font-size: 1rem;
        text-align: left;
        color: #ffffff;
        line-height: 2.625rem;
      }
      .list {
        width: 16.625rem;
        height: 22.5rem;
      }
    }
    .list-wrap{
      width: 100%;
      height: calc(~"100% - 2.625rem");
      overflow: hidden;
    }
  }

  .right-bottom{
    height: 26.0625rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 2.1875rem;
    position: relative;
    .shaky-box {
      width: 100%;
      height: 100%;
      padding-top: 2.3125rem;
      padding-left: 1rem;
      padding-right: 1.375rem;
      padding-bottom: 1.125rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .shaky {
      object-fit: cover;
        width: 8rem;
        height: 10.5625rem;
        margin-bottom: 0.65rem;
      }
    }
  }
  .active-dialog-wrap{
    display: flex;
  }
}
</style>