import Vue from 'vue'
import http from '../http-Post'
Vue.prototype.http = http

class DataPostService {
  getAll () {
    return http.get(`/`)
  }
  getDetail (id) {
    return http.get(`/${id}`)
  }
  createData () {
    return http.post('/')
  }
  deleteData (id) {
    return http.delete(`/${id}`)
  }
  updateData (id, data) {
    return http.put(`/${id}`, data)
  }
  findByTitle (title) {
    return http.get(`?title=${title}`)
  }
  commentByUser (id) {
    return http.get(`/${id}/comments`)
  }
}
export default new DataPostService()
