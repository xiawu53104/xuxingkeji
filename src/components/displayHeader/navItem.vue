<template>
  <div
    :class="{'components-header-nav': true, 'active': isActive}"
    :style="{backgroundImage: bg}"
    @click="handleClick"
  >
    {{title}}
  </div>
</template>

<script>
import navImg from '@/assets/images/header-nav.png'

export default {
  props: {
    title: String,
    path: String
  },
  data() {
    return {
      bg: `url(${navImg})`,
    }
  },
  methods: {
    handleClick() {
      if (location.pathname.includes(this.path)) return
      this.$router.push(`/display/${this.path}`)
    }
  },
  computed: {
    isActive() {
      return this.$route.fullPath.includes(this.path)
    }
  }
}
</script>

<style lang="less" scoped>
.components-header-nav{
  display: inline-block;
  width: 97px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  font-weight: bold;
  margin-right: 5px;
  color: #F0F1F7;
  cursor: pointer;
  &.active{
    color: #52FFFF;
  }
}
</style>
