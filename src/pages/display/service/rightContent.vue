<template>
  <div class="pages-display-service-right">
    <div class="books-wrap" :style="{backgroundImage: `url(${booksBg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        图书借阅
      </div>
      <img class="more-icon" :src="moreIcon">
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
          工种借阅分析
        </div>
        <div class="booksWrapChart" ref="booksWrapChart"></div>
      </div>
    </div>

    <div class="right-bottom" :style="{backgroundImage: `url(${bottomBg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        职工风采
      </div>
      <img class="more-icon" :src="moreIcon" @click="handleMore">
    </div>

    <el-dialog title="职工风采" width="79.875rem"
      :visible.sync="dialogVisible">
      
    </el-dialog>
  </div>
</template>

<script>
import booksBg from '@/assets/images/grade-bg.png'
import titleBg from '@/assets/images/left_header_lf_title.png'
import moreIcon from '@/assets/images/botton.png'
import booksWrap from '@/assets/images/books_wrap.png'
import bottomBg from '@/assets/images/BG@2x.png'
import ScrollList from '@/components/scrollList/index'
import getUsers from '../user'
import echarts from 'echarts'
import booksWrapOption from './books_wrap'

export default {
  data() {
    return {
      booksBg,
      titleBg,
      moreIcon,
      booksWrap,
      bottomBg,
      users: [],
      dialogVisible: false,
    }
  },
  components: {
    ScrollList,
  },
  mounted() {
    this.initUsers()
    let booksWrapChart = echarts.init(this.$refs.booksWrapChart)
    booksWrapChart.setOption(booksWrapOption)
  },
  methods: {
    initUsers() {
      const users = getUsers()
      this.users = users.sort((a, b) => b.avg - a.avg).slice(0, 10)
    },
    handleMore() {
      this.dialogVisible = true
    },
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
  }
}
</style>