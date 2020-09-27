<template>
  <div class="pages-display">
    <img :src="bgImg" class="bg-img">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/displayHeader/index'
import bgImg from '@/assets/images/bg.png'

export default {
  components: {
    Header,
  },
  data() {
    return {
      bgImg,
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .bg-img{
    position: absolute;
    z-index: -1;
  }
}
</style>
