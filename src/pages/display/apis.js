import http from '@/common/axios'

// 职工历史心理报告分析
export const getHistoryAnalysis = async () => {
    const rawData = await http.post(`/psychol/evaluation/historyAnalysis`)
    return rawData.data
}

// 心理测评成绩分析
export const getPsychology = async () => {
    const rawData = await http.post(`/psychol/evaluation/markAnalysis`)
    return rawData.data
}

// 低分报告
export const getLowScore = async () => {
    const rawData = await http.post(`/psychol/evaluation/lowScore`)
    return rawData.data
}

// 低分案例报告下拉数据
export const getLowScoreSelections = async () => {
    const rawData = await http.post(`/psychol/evaluation/getReportSelection`)
    return rawData.data
}

// 心理测评结果分析
export const getReport = async () => {
    const rawData = await http.post(`/psychol/evaluation/reportAnalysis`)
}
