export default {
    title: {
        text: '已完成：',
        textStyle: {
            fontSize: 14,
            color: '#fff',
            fontWeight: 600
        },
        subtext: '未完成：',
        subtextStyle: {
            fontSize: 14,
            fontWeight: 400,
            color: '#fff'
        },
        // left: 'left',
        x: 20,
        y: 40,
    },
    color: ['#EB6F49', '#15EFEF'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        position: function (pos, params, dom, rect, size) {
        // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
        var obj = {top: 60};
        obj[['right', 'left'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
      },
        
    },
    legend: {
        bottom: 30,
        data: ['已完成', '未完成'],
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        itemWidth: 10,
        itemHeight: 5,
        itemGap: 35
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '已完成'},
                {value: 310, name: '未完成'},
            ],
            label: {
                show: false
            },
        }
    ]
}