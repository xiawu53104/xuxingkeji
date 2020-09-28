export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  textStyle: {
    color: '#fff'
  },
  grid: {
    top: 10,
  },
  xAxis: {
    type: 'category',
    data: ['0211', '0212', '0213', '0214', '0215', '0216', '0217', '0218'],
    axisPointer: {
      type: 'shadow'
    },
    axisLine: {
      lineStyle: {
        color: '#ADFAFF'
      }
    }
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: '#ADFAFF'
      }
    }
  },
  series: [
    {
      type: 'line',
      itemStyle: {
        color: '#32B7E9',
      },
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 32.6, 20.0, 6.4, 3.3]
    },
  ]
};