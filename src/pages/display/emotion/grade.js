export default {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   crossStyle: {
    //     color: '#999'
    //   }
    // }
  },
  textStyle: {
    color: '#fff'
  },
  grid: {
    top: 10,
    left: 29,
    bottom: 44,
    right: 23
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisPointer: {
      type: 'shadow'
    },
    axisLine: {
      lineStyle: {
        color: '#ADFAFF',
        width: 0.5
      }
    },
    axisTick: {
      lineStyle: {
        color: '#ADFAFF',
        width: 0.5
      }
    },
    axisLabel: {
      color: '#ADFAFF',
      fontSize: 10
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#ADFAFF',
        width: 0.5
      }
    },
    axisTick: {
      lineStyle: {
        color: '#ADFAFF',
        width: 0.5
      }
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: 'line',
      itemStyle: {
        color: '#32B7E9',
      },
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 32.6, 20.0, 6.4, 3.3],
      showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          colorStops: [{
            offset: 0, color: '#1A4271' // 0% 处的颜色
          }, {
            offset: 1, color: '#1A4271' // 100% 处的颜色
          }],
        }
      }
    },
  ]
};