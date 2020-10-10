<template>
  <div class="pages-forum">
    <div class="forum-header">
      <div class="back" @click="handleBack">返回</div>
    </div>
    <div class="forum-content">
      <el-input class="forum-input" placeholder="我想搜..." v-model="keyWord">
        <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
      </el-input>
      <div class="post-wrap">
        <Post v-for="item in postList" :key="item.id" v-bind="item" />
      </div>
      <div class="pagination-wrap">
        <el-pagination background layout="total,prev,pager,next"
          :total="postList.length" prev-text="上一页" next-text="下一页"></el-pagination>
      </div>
    </div>
    <div class="forum-footer">
      <div class="title">发表新帖</div>
      <el-input placeholder="请输入标题..." v-model="postTitle"></el-input>
      <el-input placeholder="我想说点..." type="textarea" :rows="5" class="textarea"></el-input>
      <div class="btn-wrap">
        <el-button type="primary" @click="handleSubmit">发表</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Post from './post'

const posts = [
  { id: 1, title: '工作太累怎么办？', name: '张三', time: '2020-09-18 22:13', views: 1234, isTop: true, showImg: false },
  { id: 2, title: '工作太累怎么办？', name: '张三', time: '2020-09-18 22:13', views: 1234, isTop: true, showImg: true },
  { id: 3, title: '工作太累怎么办？', name: '张三', time: '2020-09-18 22:13', views: 1234, isTop: false, showImg: true },
]

export default {
  components: {
    Post,
  },
  data() {
    return {
      keyWord: '',
      postList: posts,
      postTitle: '',
    }
  },
  mounted() {
    $('body').css({ 'background-color': '#0C2050' })
  },
  methods: {
    handleBack() {
      this.$router.back()
    },
    handleSubmit() {
      if (!this.postTitle) {
        this.$message.error({
          message: '标题不能为空'
        })
        return
      }
      this.postList.push({
        id: posts.length + 1,
        title: this.postTitle,
        name: '张三',
        time: '2020-10-12 11:13',
        views: 0,
        isTop: false,
        showImg: false,
      })
    },
    handleSearch() {
      this.postList = posts.filter(x => x.title.includes(this.keyWord))
    },
  }
}
</script>

<style lang="less" scoped>
.pages-forum{
  .forum-header {
    width: 119.8125rem;
    height: 5.3125rem;
    background: #132d5d;
    box-shadow: 0.1875rem 0rem 1.6875rem 0rem rgba(16,34,79,0.46);
    .back{
      height: 100%;
      line-height: 5.3125rem;
      color: #fff;
      font-size: 1.25rem;
      margin-left: 2.5rem;
      cursor: pointer;
    }
  }
  .forum-content {
    width: 62.5rem;
    min-height: 36.4375rem;
    background: rgba(72, 108, 149, .47);
    margin-top: 1.8125rem;
    margin-left: 28.125rem;
    padding-top: 2rem;
    padding-bottom: 1.125rem;
    .post-wrap{
      margin-top: 2.5rem;
      padding-right: 5.25rem;
    }
    .pagination-wrap{
      text-align: right;
      margin-top: 2rem;
      padding-right: 4rem;
    }
  }
  .forum-footer {
    width: 62.5rem;
    min-height: 21.625rem;
    background: rgba(72, 108, 149, .47);
    margin-top: 1.1875rem;
    margin-left: 28.125rem;
    padding: 1.375rem 1.25rem 1.375rem 1.875rem;
    .title{
      font-size: 1.375rem;
      color: #ffffff;
      margin-bottom: 0.875rem;
    }
    .textarea{
      margin-top: 1.25rem;
    }
    .btn-wrap{
      text-align: right;
      margin-top: 1.25rem;
    }
  }
}
</style>
<style lang="less">
.pages-forum{
  .forum-content{
    .el-input.forum-input {
      width: 47.6875rem;
      height: 3.125rem;
      margin-left: 7.4375rem;
    }
    .el-input__inner, .el-input-group__append, .el-input-group__prepend {
      border-radius: 0;
    }
    .el-input__inner {
      background: rgba(255,255,255,0.11);
      border: 0.125rem solid #52ffff;
      color: #fff;
      text-align: center;
    }
  }
  .forum-footer{
    .el-input__inner,.el-textarea__inner{
      background-color: rgba(255,255,255,.3);
      border-radius: 0;
      border: 0;
      outline: 0;
      color: #fff;
    }
  }
}
</style>