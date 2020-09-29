import $ from 'jquery'

const config = {
  designW: 1920, //设计图宽度
  designH: 1080, //设计图高度
}

export const pageResize = function() {
  const pageW = $(window).width()
  const pageH = $(window).height()
  const isWider = pageW / pageH > config.designW / config.designH
  const [scaleW, scaleH] = [pageW / config.designW, pageH / config.designH]
  const scale = isWider ? scaleH : scaleW
  const container = $('#app')
  if (isWider) {
    container.css({ width: pageH * config.designW / config.designH, height: '100%' })
  } else {
    container.css({ width: '100%', height: pageW * config.designH / config.designW })
  }
  $('html').css('font-size', scale * 16 + 'px');
}
