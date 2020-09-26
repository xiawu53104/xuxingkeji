<template>
  <div class="components-displayHeader clear-mgn" :style="{backgroundImage: bg}">
    <div class="nav-wrap">
      <nav-item v-for="item in navList" :key="item.path" :title="item.meta.navTitle" :path="item.path"></nav-item>
    </div>
    <div class="title">
      互联网+工会 职工关怀系统
    </div>
    <div class="quite-wrap" @click="handleQuite">
      <img :src="quiteImg" class="quite-img">
      <span class="quite-text">退出</span>
    </div>
  </div>
</template>

<script>
import NavItem from './navItem'
import bgImg from '@/assets/images/header-bg.png'
import quiteImg from '@/assets/images/quite.png'

export default {
  components: {
    NavItem,
  },
  data() {
    return {
      bg: `url(${bgImg})`,
      quiteImg,
    }
  },
  created() {
    console.log(this.$router.options)
  },
  methods: {
    handleQuite() {
      console.log('click')
    }
  },
  computed: {
    navList() {
      const item = this.$router.options.routes.find(x => x.path === '/display')
      return item.children
    }
  }
}
</script>

<style lang="less" scoped>
.components-displayHeader{
  position: relative;
  height: 82px;
  .bg-img{
    width: 100%;
    position: relative;
    z-index: 0;
  }
  .nav-wrap{
    display: inline-block;
    margin-top: 20px;
    margin-left: 16px;
  }
  .title{
    font-size: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #D3E2FC;
  }
  .quite-wrap{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 28px;
    cursor: pointer;
    .quite-img{
      vertical-align: middle;
      margin-right: 10px;
    }
    .quite-text{
      font-size: 14px;
      color: #F0F1F7;
      position: relative;
      top: 1px;
    }
  }
}
</style>
