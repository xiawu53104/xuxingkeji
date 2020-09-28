<template>
  <div class="components-scrollList">
    <vue-seamless-scroll :data="alarmlist" :class-option="classOption">
      <template>
        <ul class="left-top-content-list" v-for="(item, i) in alarmlist" :key="i">
          <el-divider></el-divider>
          <li class="left-top-content-list-container">
            <span>
              {{item.content}}
            </span>
            <span>{{item.time}}</span>
          </li>
        </ul>
        <el-divider></el-divider>
      </template>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alarmlist: [
        { content: '一氧化碳超标1', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标2', time: '2020-05-23 11:30' },
        { content: '一氧化碳超标3', time: '2020-05-23 11:30' },
      ],
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
    height: 50px;
    .left-top-content-list-container {
      display: flex;
      padding-left: 47px;
      padding-right: 51px;
      justify-content: space-between;
      padding-top: 4px;
      font-size: 14px;
      text-align: left;
      color: #d4fff2;
      line-height: 42px;
    }
  }
}
</style>
