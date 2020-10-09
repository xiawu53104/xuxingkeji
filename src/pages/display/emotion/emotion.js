export default {
  tooltip: {
    formatter: params => {
      const arr = ['开心20%', '平静40%', '困惑60%', '惊讶10%', '厌恶10%']
      const result = arr.map((x, i) => {
        return `${x}: ${params.value[i]}人次`
      })
      return result.join('<br/>')
    }
  },
  grid: {
    backgroundColor: 'rgba(96,105,141,0.2)',
    borderColor: '#fff',
  },
  radar: {
    indicator: [
      { name: '开心20%', max: 6500},
      { name: '平静40%', max: 6500},
      { name: '困惑60%', max: 6500},
      { name: '惊讶10%', max: 6500},
      { name: '厌恶10%', max: 6500},
    ],
    triggerEvent: true,
    
  },
  series: {
    name: 'emotion',
    type: 'radar',
    itemStyle: {
      color: '#51FFFF',
      borderColor: '#51FFFF',
    },
    areaStyle: {
      color: 'rgba(81,255,255,0.32)',
    },
    data: [
      {
        value: [4300, 4000, 4500, 5000, 2000],
        name: 'emotion'
      },
    ]
  }
};