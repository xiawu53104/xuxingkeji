export default {
    tooltip: {
    },
    // color: ['#00d98b', '#eb6f49', '#8256e8', '#15efef', '#0091f1', '#ff6daf', '#FDB628'],
    legend: {
      top: 0,
      left: 0,
      textStyle: {
        color: '#fff',
        fontSize: '12',
        fontFamily: 'Source Han Sans CN Regular',
        fontWeight: 400
      }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#15EFEF',
                opcity: 0.8,
            }
        },
        axisTick: {
            lineStyle: {
                color: '#15EFEF',
                opcity: 0.8,
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#15EFEF',
                opcity: 0.8,
            }
        },
        axisTick: {
            inside: false,
            lineStyle: {
                color: '#15EFEF',
                opcity: 0.8,
            }
        },
        axisLabel: {
            color: '#9FCEFF',
            fontSize: '12'
        },
        z: 10
    },
    series: [
        {
            name: '周期检查',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#FF6DAF'
            },
            stack: 'a',
            areaStyle: {
                color: '#FF6DAF',
                // new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#8ec6ad'
                // }, {
                //     offset: 1,
                //     color: '#ffe'
                // }])
            },
            data: [['2020-09-01', 180], ['2020-09-02', 160], ['2020-09-04', 210], ['2020-09-05', 215], ['2020-09-06', 230], ['2020-09-08', 205], ['2020-09-10', 219]]
        },
        {
            name: '自查上报',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#17EDEE'
            },
            areaStyle: {
                color: '#17EDEE'
                // new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: '#d68262'
                // }, {
                //     offset: 1,
                //     color: '#ffe'
                // }])
            },
            data: [['2020-09-01', 180], ['2020-09-02', 160], ['2020-09-04', 210], ['2020-09-05', 215], ['2020-09-06', 230], ['2020-09-08', 205], ['2020-09-10', 219]]
        }

    ]
}