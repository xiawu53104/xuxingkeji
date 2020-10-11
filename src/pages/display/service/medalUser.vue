<template>
  <div class="pages-display-service-employeeInfo" @click="$emit('click')">
    <img :src="avatarImg" class="avatar-img">
    <div class="name-box">
      <div>{{name}}</div>
      <div style="margin-left: 1.875rem">{{department}}</div>
    </div>
    <div class="info">
      {{info}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    department: String,
    info: String,
    avatarImg: String,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-service-employeeInfo{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  padding-bottom: 2.1875rem;
  overflow: hidden;
  cursor: pointer;
  .avatar-img{
    // width: 43.3125rem;
    height: 20.8125rem;
    object-fit: cover;
  }
  .name-box{
    font-size: 1rem;
    color: #ffffff;
    display: flex;
    padding-left: 0.625rem;
    margin-top: 0.625rem;
  }
  .info{
    opacity: 0.6;
    font-size: 0.75rem;
    color: #ffffff;
    margin-top: 0.625rem;
    padding: 0 0.3125rem;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.5rem;
    letter-spacing: 1px;
  }
}
</style>