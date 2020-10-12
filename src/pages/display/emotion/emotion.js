/*
 * @Author            : dingwen1
 * @Date              : 2020-10-12 21:46:53
 * @LastEditors       : dingwen1
 * @LastEditTime      : 2020-10-13 02:52:46
 * @Description       : 
 */
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
      { name: '开心20%', max: 60},
      { name: '平静40%', max: 60},
      { name: '困惑60%', max: 60},
      { name: '惊讶10%', max: 60},
      { name: '厌恶10%', max: 60},
    ],
    triggerEvent: true,
    name: {
      // formatter: function (value) {
      //   return `${value} <br/> a`;
      // },
      textStyle: {
        color: '#fff'
      }
    },
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
        value: [20, 40, 60, 10, 10],
        name: 'emotion'
      },
    ]
  }
};