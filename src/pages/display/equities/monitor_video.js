import { getOption } from './polar'
let data = [{status: '正常', value: 50}, {status: '异常', value: 50}]
let normal = 0, unNormal = 0, total = 0;
data.forEach(item => {
    if (item.status === '正常') normal += item.value
    if (item.status === '异常') unNormal += item.value
    total += item.value
})
let colorList = ['#39eba8', '#EFEFEF', '#58ffc0']
let monitorVideoOption = getOption(normal, unNormal, total, colorList)
export default monitorVideoOption
