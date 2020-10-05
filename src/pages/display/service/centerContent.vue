<template>
  <div class="pages-display-service-center">
    <div class="medal-wrap" :style="{backgroundImage: `url(${medalBg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${titleBg})`}">
        职工奖章
      </div>
      <img :src="moreIcon" class="more-icon" @click="handleMedalMore">
      <img :src="medal" class="medal">
      <div class="swiper-wrap">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <EmployeeInfo :avatarImg="avatarImg" />
          </swiper-slide>
          <swiper-slide>
            <EmployeeInfo :avatarImg="avatarImg" />
          </swiper-slide>
          <swiper-slide>
            <EmployeeInfo :avatarImg="avatarImg" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="btn" @click="handleClick">
      <img :src="tipIcon" class="tip-icon">
      职工论坛
    </div>
    
    <div class="activity-wrap" :style="{backgroundImage: `url(${activityImg})`}">
      <div class="title-wrap title-width" :style="{backgroundImage: `url(${centerMedal})`}">
        职工活动
      </div>
    </div>

    <el-dialog title="职工奖章" width="79.875rem"
      :visible.sync="medalDialogVisible">
      <div class="medal-item-wrap">
        <MedalItem />
        <MedalItem />
        <MedalItem />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import medalBg from '@/assets/images/medal-bg.png'
import moreIcon from '@/assets/images/botton.png'
import tipIcon from '@/assets/images/tip.png'
import activityImg from '@/assets/images/activity-border.png'
import titleBg from '@/assets/images/left_header_lf_title.png'
import EmployeeInfo from './employeeInfo'
import centerMedal from '@/assets/images/center_medal.png'
import medal from '@/assets/images/奖章@2x.png'
import avatarImg from '@/assets/images/avatar3.jpg'
import MedalItem from './medaltem'

export default {
  components: {
    EmployeeInfo,
    MedalItem,
  },
  data() {
    return {
      medalBg,
      moreIcon,
      tipIcon,
      activityImg,
      titleBg,
      centerMedal,
      avatarImg,
      medal,
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
        }
      },
      medalDialogVisible: false,
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/forum')
    },
    handleMedalMore() {
      this.medalDialogVisible = true
    },
  },
}
</script>

<style lang="less" scoped>
.pages-display-service-center{
  width: 41.75rem;
  height: 100%;
  margin: 2rem 1rem;
  .medal-wrap{
    width: 100%;
    height: 30.25rem;
    // padding: 0 0.9375rem 0 0.875rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .more-icon{
      width: 1.5625rem;
      position: absolute;
      top: 1.8125rem;
      right: 1.8125rem;
      z-index: 100;
      cursor: pointer;
    }
    .medal {
      width: 2.375rem;
      height: 3.0625rem;
      position: absolute;
      top: 1rem;
      left: 2.0625rem;
      z-index: 100
    }
    .title-width{
      width: 12rem;
      z-index: 100;
    }
  }
  .btn{
    width: 41.625rem;
    height: 5rem;
    // opacity: 0.6;
    background: linear-gradient(to top,#015eea 0%, #00c0fa 100%);
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.25rem;
    margin-top: 0.75rem;
    cursor: pointer;
    .tip-icon{
      width: 1.6875rem;
      vertical-align: bottom;
      margin-right: 0.75rem;
    }
  }
  .activity-wrap{
    height: 20.3125rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 2.125rem;
    position: relative;
    .title-width{
      width: 12rem;
    }
  }
  .medal-item-wrap{
    display: flex;
  }
}
</style>