<template>
  <div class="pages-display-service">
    <div class="left">
      <div class="left-header">
        <div class="left-header-lf" :style="{backgroundImage: `url(${leftHeaderLf})`}">
          <div class="left-header-lf-title" :style="{backgroundImage: `url(${leftHeaderLfTitle})`}">
            <div class="title">劳模榜</div>
          </div>
          <img class="botton" :src="moreIcon" alt="">
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
        <div class="left-header-lf rf" :style="{backgroundImage: `url(${leftHeaderRf})`}">
          <div class="left-header-lf-title" :style="{backgroundImage: `url(${leftHeaderRfTitle})`}">
            <div class="title">贡献榜</div>
          </div>
          <img class="botton" :src="moreIcon" alt="">
          <div class="swiper-wrap">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide>
                <EmployeeInfo :avatarImg="avatarImg2" />
              </swiper-slide>
              <swiper-slide>
                <EmployeeInfo :avatarImg="avatarImg2" />
              </swiper-slide>
              <swiper-slide>
                <EmployeeInfo :avatarImg="avatarImg2" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <div class="left-footer"  :style="{backgroundImage: `url(${leftFooterBG})`}">
        <div class="left-footer-title" :style="{backgroundImage: `url(${leftFooterTitle})`}">
          <div class="title">最美职工</div>
        </div>
        <img class="botton" :src="moreIcon" alt="">
        <div class="swiper-wrap">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class="slide-item">
                <EmployeeInfo :avatarImg="avatarImg" />
                <EmployeeInfo :avatarImg="avatarImg" />
                <EmployeeInfo :avatarImg="avatarImg" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-item">
                <EmployeeInfo :avatarImg="avatarImg2" />
                <EmployeeInfo :avatarImg="avatarImg2" />
                <EmployeeInfo :avatarImg="avatarImg2" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-item">
                <EmployeeInfo :avatarImg="avatarImg" />
                <EmployeeInfo :avatarImg="avatarImg" />
                <EmployeeInfo :avatarImg="avatarImg" />
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>

    <center-content></center-content>
    <right-content></right-content>
  </div>
</template>

<script>
import leftHeaderLf from '@/assets/images/left_header_lf.png'
import leftHeaderRf from '@/assets/images/left_header_rf.png'
import leftFooterBG from '@/assets/images/left_footer_bg.png'
import leftHeaderLfTitle from '@/assets/images/left_header_lf_title.png'
import leftHeaderRfTitle from '@/assets/images/left_header_rf_title.png'
import leftFooterTitle from '@/assets/images/left_footer_title.png'
import moreIcon from '@/assets/images/botton.png'
import EmployeeInfo from './employeeInfo'
import avatarImg from '@/assets/images/avatar.jpg'
import avatarImg2 from '@/assets/images/avatar2.jpg'
import CenterContent from './centerContent'
import RightContent from './rightContent'

export default {
  components: {
    EmployeeInfo,
    CenterContent,
    RightContent,
  },
  data () {
    return {
      leftHeaderLf,
      leftHeaderRf,
      leftFooterBG,
      leftHeaderLfTitle,
      leftHeaderRfTitle,
      leftFooterTitle,
      moreIcon,
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
      avatarImg,
      avatarImg2,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.pages-display-service{
  width: 100%;
  height: 100%;
  display: flex;
  .title {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    text-align: center;
    color: #adfaff;
    margin-top: 0.375rem;
    line-height: 2.625rem;
    letter-spacing: 0.125rem;
  }
  .botton{
    width: 1.1875rem;
    height: 1.1875rem;
    position: absolute;
    top: 0.9375rem;
    right: 0.9375rem;
  }
  .swiper-wrap {
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 2.5625rem;
    // padding-bottom: 2.3125rem;
    overflow: hidden;
  }
  .left{
    width: 36.75rem;
    height: 100%;
    padding-top: 2rem;
    margin-left: 1.1875rem;
    .left-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .left-header-lf {
        width: 17.75rem;
        height: 30.25rem;
        background-size: 100% 100%;
        margin-right: 1.25rem;
        position: relative;
        .left-header-lf-title {
          background-size: 100% 100%;
          width: 12rem;
          height: 3.3125rem;
          position: absolute;
          left: 2.875rem;
          bottom: 28.4375rem;
        }
        &.rf {
          margin-right: 0;
        }
      }
    }
    .left-footer {
      height: 26.0625rem;
      background-size: 100% 100%;
      margin-top: 2.125rem;
      position: relative;
      .left-footer-title {
        background-size: 100% 100%;
        width: 14.5rem;
        height: 3.3125rem;
        position: absolute;
        left: 11.125rem;
        bottom: 24.25rem;
      }
      .slide-item{
        display: flex;
      }
    }
  }
}
</style>
<style lang="less">
.swiper-pagination-bullet.swiper-pagination-bullet-active{
  background: #fff;
}
.swiper-pagination-bullet{
  background: rgba(255,255,255,0.1);
  border: 0.0625rem solid #ffffff;
  width: 0.5rem;
  height: 0.5rem;
}
</style>