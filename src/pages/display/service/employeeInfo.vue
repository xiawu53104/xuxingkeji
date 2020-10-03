<template>
  <div class="pages-display-service-employeeInfo">
    <img :src="avatarImg" class="avatar-img">
    <div class="name-box">
      <div>张三</div>
      <div style="margin-left: 1.875rem">XX工程部</div>
    </div>
    <div class="info" >
      1995年1月出生，江苏兴化人。中国书法家协会第一、二届常务理事，第三、五、六届理事，
      中国书法家协会资深评委，先后为上海《书法》杂志执行主编和中国书法家协会《中国书法》杂志主编。
      现为《中国书法》杂志特约编审，中国楹联协会顾问，中国人民大学东方艺术研究所副所长、兼职教授。
      中国书协编辑出版委员会副主任，世界华人协会副理事长，
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  .avatar-img{
    width: 100%;
    height: 100%;
  }
  .name-box{
    font-size: 1rem;
    color: #ffffff;
    display: flex;
    padding-left: 0.625rem;
    margin-top: 0.3125rem;
  }
  .info{
    opacity: 0.6;
    font-size: 0.75rem;
    color: #ffffff;
    margin-top: 0.3125rem;
    padding: 0 0.3125rem;
    height: 5.3125rem;
    overflow: hidden;
  }
}
</style>