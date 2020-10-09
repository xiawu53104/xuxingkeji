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
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisPointer: {
      type: 'shadow'
    },
    nameTextStyle: {
      color: '#fff'
    },
  },
  yAxis: [
    {
      min: 0,
      max: 100,
      interval: 20,
    }
  ],
  series: [
    {
      type: 'bar',
      itemStyle: {
        color: '#2695FE',
      },
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
        color: '#ADFAFF',
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};