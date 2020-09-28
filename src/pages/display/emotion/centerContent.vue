<template>
  <div class="pages-display-emotion-center">
    <div class="emotion-recognition-wrap" :style="{backgroundImage: `url(${bg})`}">

    </div>
  </div>
</template>

<script>
import bg from '@/assets/images/曲线 540@2x.png'

export default {
  data() {
    return {
      bg,
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-emotion-center{
  width: 673px;
  height: 100%;
  margin: 32px 16px 0 16px;
  .emotion-recognition-wrap{
    width: 100%;
    height: 654px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
