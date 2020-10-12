<template>
  <div class="pages-display-service-medalItem"
    @click="handleClick"
    @mouseenter="showInfo = true" @mouseleave="showInfo = false">
    <img :src="avatarImg" class="avatar-img">
    <img :src="medal" class="medal-img">
    <transition name="el-zoom-in-bottom">
      <div v-show="showInfo" class="info-wrap">
        <div class="name-box">
          <div style="margin-right: 1.25rem">{{name}}</div>
          <div>{{department}}</div>
        </div>
        <div class="info" :title="info">
          {{info}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import medal from '@/assets/images/jzhang.png'

export default {
  props: {
    avatarImg: String,
    name: String,
    department: String,
    info: String,
  },
  data() {
    return {
      medal,
      showInfo: false,
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-service-medalItem{
  width: 12.5rem;
  margin-right: 1.25rem;
  position: relative;
  cursor: pointer;
  .avatar-img{
    width: 100%;
  }
  .medal-img {
    width: 2.375rem;
    height: 3.0625rem;
    position: absolute;
    top: 0.625rem;
    left: 0.625rem;
    z-index: 100
  }
  .info-wrap{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    color: #fff;
    padding: 0.3125rem;
    .name-box{
      font-size: 1rem;
      display: flex;
    }
    .info{
      font-size: 0.75rem;
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }
  }
}
</style>