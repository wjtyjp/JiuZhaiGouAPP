import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'
axios.defaults.baseURL = 'https://testapi.1lianyou.com/api/'

Vue.prototype.axios = axios

const request = {}
/*
// 添加请求头
axios.interceptors.request.use(config => {
  if (store.getters['userInfo'] != '') {
    config.headers['token'] = store.getters['userInfo'].token
  }
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
*/
export default request
