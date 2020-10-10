export default {
  xAxis: {
    max: 100,
    axisLabel: {
      textStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        color: '#0073F0',
      },
      showBackground: true,
      backgroundStyle: {
        color: '#999'
      },
      label: {
        show: true,
        position: 'inside'
      },
    }
  ],
  dataset: {
    source: [
      ['', 15]
    ]
  }
}