export default {
  tooltip: {
    trigger: 'item',
  },
  color: ['#00FEFF', '#0094F8', '#FF6FAB', '#00EAAE'],
  legend: {
    data: ['优秀', '良好', '中等', '极差'],
    bottom: 10,
    itemWidth: 12,
    itemHeight: 10,
    textStyle: {
      color: '#fff',
      fontSize: '10',
      fontFamily: 'Microsoft YaHei Regular, Microsoft YaHei Regular-Regular',
      fontWeight: 400
    }
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['50%', '40%'],
      data: [
        {value: 335, name: '优秀'},
        {value: 310, name: '良好'},
        {value: 234, name: '中等'},
        {value: 135, name: '极差'},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      }, 
    }
  ]
}