<template>
  <div class="pages-forum-post">
    <div class="post-top">
      <div class="top" v-if="isTop">置顶</div>
      <div class="title">{{title}}</div>
      <div class="post-info">
        <div class="name-box">
          <img :src="userIcon" class="user-icon">
          {{name}}
        </div>
        <div class="time">{{time}}</div>
        <div class="views">
          <img :src="viewIcon" class="view-icon">
          {{views}}
        </div>
      </div>
    </div>
    <div class="post-bottom" v-if="showImg">
      <img :src="postImg" class="post-img">
      <img :src="postImg" class="post-img">
      <img :src="postImg" class="post-img">
    </div>
  </div>
</template>

<script>
import userIcon from '@/assets/images/user.png'
import viewIcon from '@/assets/images/view.png'
import postImg from '@/assets/images/post.jpg'

export default {
  props: {
    isTop: Boolean,
    showImg: Boolean,
    title: String,
    name: String,
    time: String,
    views: Number,
  },
  data() {
    return {
      userIcon,
      viewIcon,
      postImg,
    }
  }
}
</script>

<style lang="less" scoped>
.pages-forum-post{
  &:not(:last-child){
    margin-bottom: 2rem;
  }
  .post-top{
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-left: 9.375rem;
    .top{
      width: 3.9375rem;
      height: 1.75rem;
      line-height: 1.75rem;
      text-align: center;
      background: #528FE1;
      color: #fff;
      font-size: 0.875rem;
      position: absolute;
      left: 4.5625rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .title{
      font-size: 1.125rem;
      font-weight: 400;
      color: #ffffff;
    }
    .post-info{
      color: #fff;
      font-size: 0.75rem;
      display: flex;
      .name-box{
        margin-right: 1.25rem;
        .user-icon{
          width: 0.875rem;
          vertical-align: middle;
        }
      }
      .views{
        margin-left: 1.25rem;
        .view-icon{
          width: 1rem;
        }
      }
    }
  }
  .post-bottom{
    padding-left: 9.375rem;
    margin-top: 1.6875rem;
    .post-img{
      width: 6.25rem;
      height: 6.25rem;
      &:not(:last-child){
        margin-right: 1.25rem;
      }
    }
  }
}
</style>