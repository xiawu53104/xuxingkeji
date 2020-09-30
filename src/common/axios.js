import axios from 'axios'

const BASE_URL = 'https://datascreen-dev.sdxxtop.com/'

const instance = axios.create({
  baseURL: BASE_URL
})

export default instance