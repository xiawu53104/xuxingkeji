export default {
  grid: {
    left: 19,
    bottom: 34,
    top: 80,
    right: 5
  },
  tooltip: {
    position: 'top',
    formatter: (params) => {
      return '借阅次数：' + params.value + '<br />' + '部门：' + params.name
    },
    textStyle: {
      fontSize: 12,
      fontFamily: 'Source Han Sans CN Regular, Source Han Sans CN Regular-Regular',
    },
    backgroundColor: 'rgba(81, 255, 255, 0.43)',
    borderColor: '#51FFFF',
    borderWidth: 1
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#004B8A'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    data: ['业务部', '采购部', '工艺科', '生产办', '安全科', '设备科', '综合办', '后勤办', '财务科']
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#004B8A'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 9,
      color: '#3B95D2',
      margin: 2
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#004B8A'
      }
    }
  },
  color: ['#77C8FF'],
  series: [{
      data: [86, 43, 121, 68, 37, 86, 138, 97, 45],
      type: 'bar',
      barWidth: 2,
      itemStyle: {
        borderWidth: 1,
        barBorderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
      }
  }]
}