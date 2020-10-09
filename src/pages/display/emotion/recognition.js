export default {
  tooltip: {
    trigger: 'item',
  },
  color: ['#FFB957', '#EFEFEF'],
  legend: {
    bottom: 10,
    data: ['情绪良好', '情绪低落'],
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#fff',
      fontSize: '10',
      fontWeight: 400
    }
  },
  series: {
    type: 'pie',
    center: ['50%', '40%'],
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    label: {
      show: false,
      position: 'center'
    },
    emphasis: {
      label: {
        show: true,
        formatter: function (params) {
          return params.percent+ '%'
        },
        fontSize: '24',
        color: '#CDE1FF',
        fontWeight: 'bold'
      },
      labelLine: {
        show: true
      },
    },
    data: [
      {
        value: 45,
        name: '情绪良好'
      },
      {
        value: 31,
        name: '情绪低落'
      }
    ]
  }
};