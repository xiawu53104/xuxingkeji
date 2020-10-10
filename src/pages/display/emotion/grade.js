export default {
  tooltip: {
    trigger: 'axis',
    formatter: function () {
      const arr = ['一般', '差', '极差']
      const r = arr[Math.floor(Math.random()*3)]
      return `结果分析: ${r}`
    }
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
      data: [20, 49, 70, 23, 25, 32, 20, 64, 33, 73, 36, 53],
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