<template>
  <div class="pages-display-logItem">
    <div class="info-wrap" @mouseenter="infoShow = true" @mouseleave="infoShow = false">
      <img :src="avatarImg" class="avatar-img">
      <transition name="el-fade-in-linear">
        <div class="info" v-show="infoShow">
          <div>{{name}}</div>
          <div>{{department}}</div>
          <div>{{position}}</div>
          <div>识别结果：{{result}}</div>
        </div>
      </transition>
    </div>
    <div class="date">{{time}}</div>
  </div>
</template>

<script>
import avatarImg from '@/assets/images/avatar.jpg'

export default {
  props: {
    name: String,
    department: String,
    position: String,
    result: String,
    time: String,
  },
  data() {
    return {
      avatarImg,
      infoShow: false,
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-logItem{
  width: 12.5rem;
  margin-right: 1.25rem;
  .info-wrap{
    width: 100%;
    height: 13.5rem;
    position: relative;
    .avatar-img{
      width: 100%;
    }
    .info{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 99;
      background: rgba(0,0,0,.6);
      color: #fff;
      text-align: center;
      padding-top: 1.25rem;
      &>div{
        margin-top: 0.625rem;
      }
    }
  }
  .date{
    color: #fff;
    text-align: center;
    margin-top: 1rem;
  }
}
</style>