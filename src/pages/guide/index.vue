<template>
  <div class="pages-guide" :style="{backgroundImage: `url(${bg})`}">
    <div class="header" :style="{backgroundImage: `url(${headerBg})`}">
      <div class="title">
        互联网+工会 职工关怀系统
      </div>
    </div>
    <div class="main">
      <img v-for="item in imgList" :key="item.to" :class="[item.class, 'guide-img']"
        :src="item.src" @click="$router.push(item.to)">
      <!-- <img :src="equitiesImg" class="equities-img guide-img">
      <img :src="emotionImg" class="emotion-img guide-img">
      <img :src="serviceImg" class="service-img guide-img"> -->
    </div>
  </div>
</template>

<script>
import bg from '@/assets/images/guide-bg.png'
import headerBg from '@/assets/images/header-bg.png'
import equitiesImg from '@/assets/images/组 49501@2x.png'
import emotionImg from '@/assets/images/组 263@2x.png'
import serviceImg from '@/assets/images/组 4950 拷贝 2@2x.png'

export default {
  data() {
    return {
      bg,
      headerBg,
      imgList: [
        { src: equitiesImg, to: '/display/equities', class: 'equities-img' },
        { src: emotionImg, to: '/display/emotion', class: 'emotion-img' },
        { src: serviceImg, to: '/display/service', class: 'service-img' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.pages-guide{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .header{
    height: 5.125rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      font-size: 2.25rem;
      color: #D3E2FC;
    }
  }
  .main{
    // height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 51%;
    transform: translate(-50%, -50%);
    .equities-img{
      width: 20.5625rem;
    }
    .emotion-img{
      width: 42.4375rem;
      margin: 0 2.375rem;
    }
    .service-img{
      width: 20.5625rem;
    }
    .guide-img{
      cursor: pointer;
      &:hover{
        transform: scale(1.05);
        transition: all .2s linear;
      }
    }
  }
}
</style>
