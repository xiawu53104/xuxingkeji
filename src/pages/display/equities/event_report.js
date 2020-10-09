import echarts from 'echarts'
export const eventOption = (data) => {
    let serSelfData = [], serPeriodData = []
    data.forEach(item => {
        if (item.reportType === '自查上报') {
            serSelfData.push([item.reportTime, item.reportNum])
        } else if (item.reportType === '周期巡查') {
            serPeriodData.push([item.reportTime, item.reportNum])
        }
    })
    return {
        tooltip: {
            show: true,
            trigger: 'axis',
            position: 'top',
            // function (point) {
            //     // 固定在顶部
            //     return [point[0], '-13%'];
            // },
            formatter: params => {
                if (params.length) {
                    let msg = new Date(params[0].value[0]).getMonth() + 1 + '.' + new Date(params[0].value[0]).getDate() + ' ：<br />'
                    params.forEach(item => {
                        msg +=  item.seriesName + '：' + item.value[1] + '起<br />' 
                    });
                    return msg
                }
            }
        },
        // color: ['#00d98b', '#eb6f49', '#8256e8', '#15efef', '#0091f1', '#ff6daf', '#FDB628'],
        legend: {
          top: 0,
          left: 50,
          icon: 'roundRect',
          itemWidth: 12,
          itemHeight: 6,
          itemGap: 23,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            fontFamily: 'Source Han Sans CN Regular',
            fontWeight: 400
          }
        },
        grid: {
            left: 50,
            right: 30,
            top: 41
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            interval: 24*60*60*1000,
            axisLine: {
                lineStyle: {
                    color: '#9FCEFF',
                    opcity: 0.8,
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#9FCEFF',
                    opcity: 0.8,
                }
            },
            axisLabel: {
                color: '#9FCEFF',
                fontSize: '12',
                opcity: 0.8,
                formatter: params => {
                    return new Date(params).getMonth()+1+ '.'+new Date(params).getDate()
                }
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
                // lineStyle: {
                //     color: 'tansparent'
                // }
            },
            axisLine: {
                lineStyle: {
                    color: '#9FCEFF',
                    opcity: 0.8,
                }
            },
            axisTick: {
                inside: false,
                lineStyle: {
                    color: '#9FCEFF',
                    opcity: 0.8,
                }
            },
            axisLabel: {
                color: '#9FCEFF',
                fontSize: '12',
                opcity: 0.8
            },
            z: 10
        },
        series: [
            {
                name: '自查上报',
                type: 'line',
                showSymbol: false,
                hoverAnimation: true,
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                    color: '#17EDEE'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(21, 239, 239, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(21, 239, 239, .1)'
                    }])
                },
                data: serSelfData 
                // [['2020-09-01', 180], ['2020-09-02', 160], ['2020-09-04', 210], ['2020-09-05', 215], ['2020-09-06', 230], ['2020-09-08', 205], ['2020-09-10', 219]]
            },
            {
                name: '周期检查',
                type: 'line',
                showSymbol: false,
                hoverAnimation: true,
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                    color: '#FF6DAF'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 109, 175, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(255, 109, 175, .1)'
                    }])
                },
                data: serPeriodData 
                // [['2020-09-01', 160], ['2020-09-02', 180], ['2020-09-04', 200], ['2020-09-05', 235], ['2020-09-06', 230], ['2020-09-08', 190], ['2020-09-10', 221]]
            },
            
        ]
    }
}

export default eventOption