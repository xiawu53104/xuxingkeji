<template>
  <div class="pages-display-service">
    <div class="left">
      <div class="left-header">
        <div class="left-header-lf" :style="{backgroundImage: `url(${leftHeaderLf})`}">
          <div class="left-header-lf-title" :style="{backgroundImage: `url(${leftHeaderLfTitle})`}">
            <div class="title">劳模榜</div>
          </div>
          <img class="botton" :src="moreIcon" alt="">
          <div class="content-img"></div>
        </div>
        <div class="left-header-lf rf" :style="{backgroundImage: `url(${leftHeaderRf})`}">
          <div class="left-header-lf-title" :style="{backgroundImage: `url(${leftHeaderRfTitle})`}">
            <div class="title">贡献榜</div>
          </div>
          <img class="botton" :src="moreIcon" alt="">
          <div class="content-img"></div>
        </div>
      </div>
      <div class="left-footer"  :style="{backgroundImage: `url(${leftFooterBG})`}">
        <div class="left-footer-title" :style="{backgroundImage: `url(${leftFooterTitle})`}">
          <div class="title">最美职工</div>
        </div>
        <img class="botton" :src="moreIcon" alt="">
      </div>
    </div>
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
export default {
  data () {
    return {
      leftHeaderLf,
      leftHeaderRf,
      leftFooterBG,
      leftHeaderLfTitle,
      leftHeaderRfTitle,
      leftFooterTitle,
      moreIcon
    }
  }
}
</script>

<style lang="less" scoped>
.pages-display-service{
  display: flex;
  .title {
    // width: 9.625rem;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-family: Adobe Heiti Std R;
    font-weight: R;
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
  .left{
    width: 36.75rem;
    padding-top: 2.625rem;
    margin-left: 1.1875rem;
    .left-header {
      width: 100%;
      height: 100%;
      .left-header-lf {
        width: 17.75rem;
        height: 30.25rem;
        background-size: 100% 100%;
        margin-right: 1.25rem;
        float: left;
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
        .content-img {
          width: 16.125rem;
          height: 17.375rem;
        }
      }
    }
    .left-footer {
      width: 36.6875rem;
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
    }
  }
}
</style>
