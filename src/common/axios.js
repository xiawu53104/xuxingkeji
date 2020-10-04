import axios from 'axios'
import Vue from 'vue'

const BASE_URL = 'https://datascreen-dev.sdxxtop.com/'

const instance = axios.create({
  baseURL: BASE_URL
})

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  Vue.prototype.$message.error({
    message: '接口请求报错，请重试',
    duration: 1500
  })
  return Promise.reject(error);
})

export default instance