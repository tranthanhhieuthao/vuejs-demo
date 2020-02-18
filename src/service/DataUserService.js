import Vue from 'vue'
import http from '../http-common'
Vue.prototype.http = http

class DataUserService {
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
}
export default new DataUserService()
