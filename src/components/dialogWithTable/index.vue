<template>
  <div class="component-dialogWithTable">
    <el-dialog
      :title="title"
      width="79.875rem"
      @update:visible="handleClose"
      :visible.sync="visible">
      <div class="search-box">
        <slot name="search"></slot>
      </div>
      <slot v-if="!!total"></slot>
      <div class="page-wrap" v-show="total > 0">
        <el-pagination background layout="total,prev,pager,next"
          @current-change="pageChange"
          :total="total" prev-text="上一页" next-text="下一页"></el-pagination>
      </div>
      <div class="empty-wrap" v-show="!total">
        <img :src="emptyImg" class="empty-img">
      </div>
      <div class="loding-wrap" v-show="isLoading">
        <img :src="emptyImg" class="loading-img">
        <div class="loading-text">正在加载中...</div>
      </div>
      <div class="loding-wrap" v-show="isError">
        <img :src="errImg" class="loading-img">
        <div class="loading-text">网络不给力，请稍后再试</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import emptyImg from '@/assets/images/empty.png'
import loadingImg from '@/assets/images/loading.png'
import errImg from '@/assets/images/net-err.png'

export default {
  props: {
    value: Boolean,
    title: String,
    total: Number,
    isLoading: Boolean,
    isError: {
      type: Boolean,
      default: false,
    },
    pageChange: Function,
  },
  data() {
    return {
      emptyImg,
      loadingImg,
      errImg,
      visible: this.value,
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
  }
}
</script>

<style lang="less" scoped>
.component-dialogWithTable{
  .page-wrap{
    text-align: right;
    margin-top: 1.75rem;
  }
  .empty-wrap{
    margin: 3.125rem 0;
    text-align: center;
    .empty-img{
      width: 26.5625rem;
    }
  }
  .loding-wrap{
    text-align: center;
    .loading-img{
      width: 23.75rem;
      margin-top: 3.125rem;
      margin-bottom: 4.5rem;
    }
    .loading-text{
      margin-bottom: 3.125rem;
    }
  }
}
</style>
