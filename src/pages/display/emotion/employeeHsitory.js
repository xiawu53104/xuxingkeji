export default {
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      return `问题人员 ${params[0].value} <br/>
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:red;"></span> 
       红色预警 ${Math.round(params[0].value/3)} <br/>
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:orange;"></span> 
       红色预警 ${Math.round(params[0].value/3)} <br/>
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:yellow;"></span> 
       红色预警 ${Math.round(params[0].value/3)} <br/>
      `
    }
  },
  grid: {
    borderWidth: 0
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisPointer: {
      type: 'shadow'
    },
    axisLabel: {
      textStyle: {
        color: '#fff'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#598ca6'
      }
    }
  },
  yAxis: [
    {
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        textStyle: {
          fontSize: '0'
        }
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#598ca6'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      itemStyle: {
        color: '#2695FE',
      },
      data: [2, 4, 7, 23, 25, 76, 85, 16, 32, 20, 6, 3]
    },
    {
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
        color: '#ADFAFF',
      },
      data: [2, 4, 7, 23, 25, 76, 85, 16, 32, 20, 6, 3]
    }
  ]
};