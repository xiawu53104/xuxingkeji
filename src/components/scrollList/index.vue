<template>
  <div class="components-scrollList">
    <vue-seamless-scroll :data="data" :class-option="classOption">
      <template>
        <ul class="left-top-content-list" v-for="(item, i) in data" :key="item.id || i">
          <el-divider></el-divider>
          <li class="left-top-content-list-container">
            <slot :data="{i, item}"></slot>
          </li>
        </ul>
        <el-divider></el-divider>
      </template>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      // alarmlist: [
      //   { content: '一氧化碳超标1', time: '2020-05-23 11:30' },
      //   { content: '一氧化碳超标2', time: '2020-05-23 11:30' },
      //   { content: '一氧化碳超标3', time: '2020-05-23 11:30' },
      // ],
    }
  },
  computed: {
    classOption() {
      return {
        step: 0.2,
        limitMoveNum: 1,
      }
    }
  }
}
</script>

<style lang="less" scoped>
.components-scrollList{
  overflow: hidden;
  .left-top-content-list {
    width: 100%;
    height: 3.125rem;
    .left-top-content-list-container {
      display: flex;
      padding: 0 2rem;
      justify-content: space-between;
      padding-top: 0.25rem;
      font-size: 0.875rem;
      text-align: left;
      color: #d4fff2;
      line-height: 2.625rem;
    }
  }
}
</style>
