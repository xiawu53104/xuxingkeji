export default {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#00d98b', '#eb6f49', '#8256e8', '#15efef', '#0091f1', '#ff6daf', '#FDB628'],
    legend: {
      bottom: 40,
      data: ['XX危险源1', 'XX危险源2', 'XX危险源3', 'XX危险源4', 'XX危险源5','XX危险源6'],
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
      center: ['50%', '40%'],
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          formatter: function (params) {
            return params.percent+ '% 危险隐患'
          },
          fontSize: '32px',
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
      ]
    }]
  };