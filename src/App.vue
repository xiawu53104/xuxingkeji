<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { pageResize } from '@/common/resize'

export default {
  mounted() {
    pageResize()
    window.addEventListener('resize', pageResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', pageResize)
  }
}
</script>

<style lang="less">
body{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app{
  margin: 0 auto;
}
</style>
