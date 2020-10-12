/*
 * @Author            : dingwen1
 * @Date              : 2020-10-12 21:46:53
 * @LastEditors       : dingwen1
 * @LastEditTime      : 2020-10-13 00:18:09
 * @Description       : 
 */
import avatarImg from '@/assets/images/avatar.jpg'

export const emotionMap = {
  1: '开心',
  2: '平静',
  3: '困惑',
  4: '惊讶',
  5: '厌恶',
}

const names = [
"周洋","王炬凯",
"武新钊",
"李昭斌",
"李纪超",
"郭俊","张东亮",
"刘太发",
"孟祥飞",
"徐方栋",
"刘学艳",
"王建丽",
"周佳音",
"杜培点",
"孙玉艳",
"郭真真",
"陈丽","寇运丽",
"张欣丽",
"杨敬美",
"崔传珠",
"马小花",
"王士昌",
"姚文龙",
"肖振华",
"钱立哲",
]
const sexyMap = ['男', '女']
const isSpyMap = ['是', '否']
export const departmentMap = ['技术部', '工程部', '财务部']
const positionMap = ['部门经理', '电工', '铁工', '会计', '工程师']

function getRandom(n) {
  return Math.floor(Math.random()*n)
}

export default function getUsers() {
  const users = []
  for (let i = 0; i < 100; i++) {
    users.push({
      id: i + 1,
      name: names[getRandom(names.length)],
      sexy: sexyMap[getRandom(sexyMap.length)],
      department: departmentMap[getRandom(departmentMap.length)],
      position: positionMap[getRandom(positionMap.length)],
      spy: '--',
      isSpy: isSpyMap[getRandom(isSpyMap.length)],
      phone: '13109876543',
      capture: 'xxx',
      result: emotionMap[getRandom(5) + 1],
      recognitionDate: '2020-09-10',
      evaluationTimes: getRandom(5) + 1,
      avg: getRandom(100) + 1,
    })
  }
  return users
}

const resultMap = ['开心', '平静', '困惑', '惊讶', '厌恶']
const resultAnalysisMap = ['优秀', '一般', '差', '极差']
const spyMap = ['检修工', '切割工']

export const getEmotionList = function() {
  const users = getUsers()
  return users.map(x => ({
    ...x,
    capture: avatarImg,
    result: resultMap[getRandom(resultMap.length)],
    statisticsMonth: '2020-08',
    spy: spyMap[getRandom(spyMap.length)],
    resultAnalysis: resultAnalysisMap[getRandom(resultAnalysisMap.length)],
    times: Math.round(Math.random()*5 + 1),
  }))
}

export const getHistoryLog = function(row) {
  let result = []
  for(let i = 0; i < row.times; i++) {
    result.push({
      id: i + 1,
      name: row.name,
      scale: 'XXX量表',
      score: getRandom(100) + 1,
      resultAnalysis: resultAnalysisMap[getRandom(resultAnalysisMap.length)],
      time: `${row.statisticsMonth} 13:15:23`
    })
  }
  return result.sort((a, b) => b.id - a.id)
}
