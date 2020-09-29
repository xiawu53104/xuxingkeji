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
  width: 12.125rem;
  height: 3.25rem;
  line-height: 3.25rem;
  text-align: center;
  font-weight: bold;
  margin-right: 0.625rem;
  color: #F0F1F7;
  cursor: pointer;
  font-size: 1.25rem;
  &.active{
    color: #52FFFF;
  }
}
</style>
