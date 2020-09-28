export default {
    tooltip: {},
    radar: {
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: 'transparent',
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
      name: 'equities',
      type: 'radar',
      data: [
        {
          value: [4300, 4000, 4500, 5000, 2000],
          name: 'emotion'
        },
      ]
    }]
  };