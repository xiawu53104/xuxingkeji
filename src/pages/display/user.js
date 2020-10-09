import avatarImg from '@/assets/images/avatar.jpg'

export const emotionMap = {
  1: '开心',
  2: '平静',
  3: '困惑',
  4: '惊讶',
  5: '厌恶',
}

const names = ['张三', '李四', '王五']
const sexyMap = ['男', '女']
const isSpyMap = ['是', '否']
export const departmentMap = ['技术部', '工程部', '财务部']
const positionMap = ['部门经理', '电工', '铁工', '会计', '工程师']

// export default [
//   {
//     id: 1,
//     name: '张三',
//     sexy: '男',
//     department: '技术部',
//     position: '部门经理',
//     spy: '水电工',
//     phone: '13109876543',
//     capture: 'xxx',
//     result: 1,
//     recognitionDate: '2020-09-10',
//     evaluationTimes: 3,
//     avg: 92,
//   },
// ];

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
const resultAnalysisMap = ['优秀', '良好', '中等', '极差']

export const getEmotionList = function() {
  const users = getUsers()
  return users.map(x => ({
    ...x,
    capture: avatarImg,
    result: resultMap[getRandom(resultMap.length)],
    statisticsMonth: '2020-09',
    spy: '检修工',
    resultAnalysis: resultAnalysisMap[getRandom(resultAnalysisMap.length)],
  }))
}
