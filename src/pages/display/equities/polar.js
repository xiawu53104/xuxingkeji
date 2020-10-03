import echarts from 'echarts'
export const getOption = (normal, unNormal, total, colorList) => {
    return {
        title: {
            text: '正常：'+normal+ '个',
            textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight:'bold',
        },
        subtext: '{a|异常：}{b|'+unNormal+'}{a|个}',
        subtextStyle: {
            rich: {
                a: {
                    fontSize: 12,
                    fontWeight:'bold',
                    color: '#fff'
                },
                b: {
                    fontSize: 12,
                    fontWeight:'bold',
                    color: '#FF0000'
                }
            }
        },
        itemGap: 11,
        left: '68',
        top: '94',
        },
        angleAxis: {
            max: 75,
            clockwise: false, 
            axisLine: {
            show: false
            },
            axisTick: {
            show: false
            },
            axisLabel: {
            show: false
            },
            splitLine: {
            show: false
            }
        },
        radiusAxis: {
            type: 'category',
            axisLine: {
            show: false
            },
            axisTick: {
            show: false
            },
            axisLabel: {
            show: false
            },
            splitLine: {
            show: false
            }
        },
        color: colorList,
        legend: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: '10',
            },
            top: 227,
            left: 48,
            itemWidth: 10,
            itemHeight: 5,
            itemGap: 30
        },
        polar: {
            center: ['102', '115.5'],
            radius: '150'
        },
        series: [{
            type: 'bar',
            name: '正常',
            data: [{
            value: normal,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: colorList[2]
                    }, {
                        offset: 1,
                        color: colorList[0]
                    }])
                }
            },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '-100%', 
            z: 2,
        },{ 
            type: 'bar',
            name: '异常',
            data: [{
            value: total,
            itemStyle: {
                color: '#EFEFEF',
                shadowColor: '#EFEFEF',
                shadowBlur: 5,
                shadowOffsetY: 2
            }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 13,
            barGap: '-100%',
            z: 1
        }]
    }
}