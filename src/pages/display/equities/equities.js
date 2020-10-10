export const option = (item) => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: params => {
        return '<p style="font-size: 10px">' + params.name + '上报问题'+ '</p> <p style="font-size: 14px;text-align: center;margin-top: 5px;">' + params.value + '次</p>'
      },
      textStyle: {
        color: '#01D4F9',
        fontSize: 10
      },
      position: function (pos, params, dom, rect, size) {
        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
        var obj = {top: 60};
        obj[['right', 'left'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
      },
      backgroundColor: 'transparent'
    },
    title: {
      text: '',
      x: '44%',
      y: '38%',
      textStyle: {
        color: '#fff',
      },
      subtext: '危险隐患',
      subtextStyle: {
        color: '#fff',
        fontSize: 10,
        fontWeight:'bold',
      },
      itemGap: 11,
    },
    color: ['#00d98b', '#eb6f49', '#8256e8', '#15efef', '#0091f1', '#ff6daf', '#FDB628'],
    legend: {
      width: 300,
      bottom: 33,
      left: 81,
      data: ['XX危险源1', 'XX危险源2', 'XX危险源3', 'XX危险源4', 'XX危险源5','XX危险源6','XX危险源7'],
      itemWidth: 10,
      itemHeight: 10,
      // itemGap: 52,
      textStyle: {
        color: '#01d4f9',
        fontSize: '9',
        fontFamily: 'Microsoft YaHei Regular, Microsoft YaHei Regular-Regular',
        fontWeight: 400
      }
    },
    series: [{
      name: 'equities',
      type: 'pie',
      center: ['50%', '38%'],
      radius: ['45%', '65%'],
      avoidLabelOverlap: false,
      label: {
        show: item,
        position: 'center',
        formatter: function (params) {
          if (params.data.name == 'XX危险源1') {
            return params.percent + ' %'
          } else {
            return ''
          }
        },
        fontSize: '18',
        color: '#2BFAFF',
        fontWeight: 'bold'
      },
      emphasis: {
        label: {
          show: true,
          formatter: function (params) {
            return params.percent+ ' %'
          },
          fontSize: '18',
          color: '#2BFAFF',
          fontWeight: 'bold'
        },
        labelLine: {
          show: true
        },
      },
      data: [
        {
          value: 45,
          name: 'XX危险源1'
        },
        {
          value: 30,
          name: 'XX危险源2'
        },
        {
          value: 17,
          name: 'XX危险源3'
        },
        {
          value: 23,
          name: 'XX危险源4'
        },
        {
          value: 5,
          name: 'XX危险源5'
        },
        {
          value: 4,
          name: 'XX危险源6'
        },
        {
          value: 14,
          name: 'XX危险源7'
        },
      ]
    }]
  }
}
export default option