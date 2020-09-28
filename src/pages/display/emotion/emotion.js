export default {
  tooltip: {},
  grid: {
    backgroundColor: 'rgba(96,105,141,0.2)',
    borderColor: '#fff',
  },
  radar: {
    textStyle: {
      color: '#fff',
      backgroundColor: 'transparent',
    },
    slitArea: {
      areaStyle: {
        color: ['rgba(0,0,0,0.3)','rgba(200,200,200,0.3)']
      }
    },
    indicator: [
      { name: '开心20%', max: 6500},
      { name: '平静40%', max: 6500},
      { name: '困惑60%', max: 6500},
      { name: '惊讶10%', max: 6500},
      { name: '厌恶10%', max: 6500},
    ]
  },
  series: [{
    name: 'emotion',
    type: 'radar',
    data: [
      {
        value: [4300, 4000, 4500, 5000, 2000],
        name: 'emotion'
      },
    ]
  }]
};