import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  headers: {
    'Content-type': 'application/json'
  }
})
