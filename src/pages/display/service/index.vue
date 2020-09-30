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
    font-size: 24px;
    font-family: Adobe Heiti Std R;
    font-weight: R;
    text-align: center;
    color: #adfaff;
    margin-top: 6px;
    line-height: 42px;
    letter-spacing: 2px;
  }
  .botton{
    width: 19px;
    height: 19px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .left{
    width: 588px;
    padding-top: 42px;
    margin-left: 19px;
    .left-header {
      width: 100%;
      height: 100%;
      .left-header-lf {
        width: 284px;
        height: 484px;
        background-size: 100% 100%;
        margin-right: 20px;
        float: left;
        position: relative;
        .left-header-lf-title {
          background-size: 100% 100%;
          width: 192px;
          height: 53px;
          position: absolute;
          left: 46px;
          bottom: 455px;
        }
        &.rf {
          margin-right: 0;
        }
        .content-img {
          width: 258px;
          height: 278px;
        }
      }
    }
    .left-footer {
      width: 587px;
      height: 417px;
      background-size: 100% 100%;
      margin-top: 34px;
      position: relative;
      .left-footer-title {
        background-size: 100% 100%;
        width: 232px;
        height: 53px;
        position: absolute;
        left: 178px;
        bottom: 388px;
      }
    }
  }
}
</style>
